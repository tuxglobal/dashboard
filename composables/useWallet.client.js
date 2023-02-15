import { stringifyExpression } from '@vue/compiler-core';
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { ethers } from 'ethers';

export const useWallet = () => {
    const CHAIN_ID = '0x5';
    const CHAIN_NAME = 'Goerli Testnet';
    const RPC_URL = 'https://endpoints.omniatech.io/v1/eth/goerli/public';
    const APP_NAME = 'TUX';
    const APP_DESCRIPTION = 'TUX Defi';
    const USDC_ADDRESS = '0x592A5e7de6B2c923D71F7981efc4CA2d88C7f027';
    const TUX_ADDRESS = '';

    const injected = injectedModule();

    let wallet = null;
    let provider = null;
    let signer = null;

    const connected = useState('connected', () => false);
    const address = useState('address', () => null);
    const loading = useState('loading', () => false);
    const ethBalance = useState('ethBalance', () => '0');
    const usdcBalance = useState('usdcBalance', () => '0');
    const tuxBalance = useState('tuxBalance', () => '0');
    const wcBalance = useState('wcBalance', () => '0');
    const rcBalance = useState('rcBalance', () => '0');

    const contracts = {
        usdc: {
            address: USDC_ADDRESS,
            abi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
        },
        tux: {
            address: TUX_ADDRESS,
            abi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
        }
    }

    const onboard = Onboard({
        wallets: [injected],
        chains: [
            {
                id: CHAIN_ID,
                label: CHAIN_NAME,
                rpcUrl: RPC_URL,
                token: 'ETH',
            }
        ],
        appMetadata: {
            name: APP_NAME,
            description: APP_DESCRIPTION,
        },
        accountCenter: {
            desktop: {
                position: 'topRight',
                enabled: true,
                minimal: true
            },
            mobile: {
                position: 'topRight',
                enabled: true,
                minimal: true
            }
        },
    });

    const connect = async () => {
        await onboard.connectWallet();
    }

    const state = onboard.state.select();

    const { unsubscribe } = state.subscribe((update) => {
        wallet = update;
        if(wallet.wallets[0]) {
            refresh();
        } else {
            if(connected.value) disconnectWallet();
        }
    });

    const refresh = async () => {
        if(loading.value) return;
        loading.value = true;
        // Make sure we're connected to the right chain.
        if(wallet.wallets[0].chains[0].id !== CHAIN_ID) {
            await setChain();
        }
        // If it's a new address or we're not connected yet, connect.
        if(!connected.value || address.value !== wallet.wallets[0].accounts[0].address) {
            await connectWallet();
        }
        // If we're connected, update balances.
        if(connected.value) {
            await updateBalances();
        }
        loading.value = false;
    }

    const setChain = async () => {
        if(!await onboard.setChain({ chainId: CHAIN_ID })) {
            disconnectWallet();
        }
    }

    const connectWallet = async () => {
        provider = new ethers.providers.Web3Provider(wallet.wallets[0].provider, 'any');
        signer = provider.getSigner();
        address.value = await signer.getAddress();
        connected.value = true;
    }

    const updateBalances = async () => {
        if(!connected.value) return;
        ethBalance.value = await provider.getBalance(address.value);
        usdcBalance.value = await call('usdc', 'balanceOf', address.value);
    }

    const disconnectWallet = () => {
        connected.value = false;
        onboard.state.get().wallets.forEach(async (wallet) => {
            await onboard.disconnectWallet({ label: wallet.label });
        });
    }

    const contract = (name) => {
        return new ethers.Contract(contracts[name].address, contracts[name].abi, provider);
    }

    const call = async (contractName, method, ...args) => {
        return await contract(contractName)[method](...args);
    }

    return {
        connect,
        connected,
        loading,
        call,
        updateBalances,
        ethBalance,
        usdcBalance,
        tuxBalance,
        wcBalance,
        rcBalance,
    }
}
