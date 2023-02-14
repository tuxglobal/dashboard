import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import Web3 from 'web3';

export const useWallet = () => {
    const wallets = [
        injectedModule(),
    ];

    const chains = [{
        id: 0x5,
        rpcUrl: 'https://endpoints.omniatech.io/v1/eth/goerli/public',
        label: 'Goerli Testnet',
        token: 'ETH',
        blockExplorerUrl: 'https://goerli.etherscan.io',
    }];

    const appMetadata = {
        name: 'Tux',
        gettingStartedGuide: '/getting-started',
        agreement: {
            version: '1.0.0',
            termsUrl: '/terms',
            privacyUrl: '/privacy',
        }
    };

    const accountCenterOptions = {
        minimal: true,
    };

    const connectModalOptions = {
        showSidebar: false,
        disableClose: true,
        autoConnectLastWallet: true,
    };

    const initOptions = {
        wallets: wallets,
        chains: chains,
        appMetadata: appMetadata,
        accountCenter: accountCenterOptions,
        connect: connectModalOptions,
    };

    const onboard = Onboard(initOptions);

    const web3 = new Web3(RPC_URL);
    const connected = ref(false);

    const connect = async () => {
        const wallets = await onboard.connectWallet();
        console.log(wallets);
        connected.value = true;
        if (wallets[0]) {
            web3.setProvider(wallets[0].provider);
        }
    }

    const isConnected = () => {
        return connected.value;
    }

    return {
        isConnected,
        connect,
        web3,
    }
}
