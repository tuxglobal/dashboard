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
    const wcBalance = useState('wcBalance', () => 0);
    const rcBalance = useState('rcBalance', () => 0);
    const collateralBalance = useState('collateralBalance', () => 0);
    const price = useState('price', () => 0);
    const nfts = useState('nfts', () => []);

    const connect = async () => {
        await connectWallet();
    }

    const refresh = async () => {
        if(refreshingWallet) return;
        refreshingWallet = true;
        await refreshWallet();
        ethBalance.value = await provider.value.getBalance(address.value);
        usdcBalance.value = await useErc20().balance('usdc', address.value);
        tuxBalance.value = await useErc20().balance('tux', address.value);
        wcBalance.value = await useStaking().stakedAmount(address.value);
        collateralBalance.value = await useErc20().balance('usdc', await useAddressBook('collateralVault'));
        let output = await useUniswap().output('tux', 'usdc', "1000000000000000000");
        price.value = output[1].toString();
        nfts.value = await useStaking().nfts(address.value);
        refreshingWallet = false;
    }

    return {
        connect,
        refresh,
    }
}
