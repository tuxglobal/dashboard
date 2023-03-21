import { useWalletStore } from '~~/store/useWalletStore';
import { storeToRefs } from 'pinia';
import { useStaking } from './useStaking';
import { useAddressBook } from './useAddressBook';

export const useWallet = () => {
    const walletStore = useWalletStore();
    const { loading, connected, wallets, address, onboard, provider, signer, addresses } = storeToRefs(walletStore);
    const { connectWallet, refreshWallet, disconnectWallet } = walletStore;

    let refreshingWallet = false;

    const walletConnected = useState('connected', () => connected);
    const walletLoading = useState('loading', () => loading);

    const state = onboard.value.state.select();
    const { unsubscribe } = state.subscribe(async (update) => {
        if(update.wallets.length == 0 && connected.value) {
            disconnectWallet();
        }
    });

    watch(connected, (val) => {
        walletConnected.value = val;
        if(val) refresh();
    });

    watch(loading, (val) => {
        walletLoading.value = val;
    });

    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const collateralBalance = useState('collateralBalance', () => 0);
    const price = useState('price', () => 0);
    const wcnfts = useState('wcnfts', () => []);
    const rcnfts = useState('rcnfts', () => []);
    const usdcDecimals = useState('usdcDecimals', () => 0);
    const tuxDecimals = useState('tuxDecimals', () => 0);

    const connect = async () => {
        await connectWallet();
    }

    const refresh = async () => {
        if(refreshingWallet) return;
        refreshingWallet = true;
        await refreshWallet();
        ethBalance.value = await provider.value.getBalance(address.value);
        usdcBalance.value = await useErc20().balance('Usdc', address.value);
        tuxBalance.value = await useErc20().balance('Tux', address.value);
        collateralBalance.value = await useErc20().balance('Usdc', await useAddressBook('CollateralVault'));
        let output = await useUniswap().output('Tux', 'Usdc', "1000000000000000000");
        price.value = output.toString();
        const nfts = await useStaking().nfts(address.value);
        usdcDecimals.value = await useErc20().decimals('Usdc');
        tuxDecimals.value = await useErc20().decimals('Tux');
        if(typeof nfts.wc !== 'undefined') wcnfts.value = nfts.wc;
        if(typeof nfts.rc !== 'undefined') rcnfts.value = nfts.rc;
        refreshingWallet = false;
    }

    return {
        connect,
        refresh,
    }
}
