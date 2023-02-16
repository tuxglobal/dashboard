import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseWalletModule from '@web3-onboard/coinbase';
import gnosisModule from '@web3-onboard/gnosis';
import { ethers } from 'ethers';
const injected = injectedModule();
const walletConnect = walletConnectModule({
    version: 2,
    projectId: '0e1d2755a1274e65f568212a554864fa',
});
const coinbaseWallet = coinbaseWalletModule();
const gnosisWallet = gnosisModule();

// PROPERTIES
const CHAIN_ID = '0x5';
const CHAIN_NAME = 'Goerli Testnet';
const RPC_URL = 'https://endpoints.omniatech.io/v1/eth/goerli/public';
const APP_NAME = 'TUX';
const APP_DESCRIPTION = 'TUX Defi';

export const useWalletStore = defineStore('walletStore', {
    state: () => ({
        loading: false,
        connected: false,
        wallets: [],
        address: null,
        onboard: Onboard({
            wallets: [
                injected,
                walletConnect,
                coinbaseWallet,
                gnosisWallet,
            ],
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
            apiKey: '0d38637c-9043-476f-ac4e-d3009855c40e',
            notify: {
                desktop: {
                    position: 'topRight',
                    enabled: true,
                },
                mobile: {
                    position: 'topRight',
                    enabled: true,
                },
            },
        }),
        provider: null,
        signer: null,
        addresses: {}
    }),
    actions: {
        async connectWallet() {
            this.loading = true;
            this.wallets = await this.onboard.connectWallet();
            this.provider = new ethers.providers.Web3Provider(this.wallets[0].provider, 'any');
            this.signer = this.provider.getSigner();
            this.address = this.wallets[0].accounts[0].address;
            this.connected = true;
            this.loading = false;
        },
        async refreshWallet() {
            this.loading = true;
            if (this.wallets[0].chains[0].id !== CHAIN_ID) {
                if (!await this.onboard.setChain({ chainId: CHAIN_ID })) {
                    this.loading = false;
                    return;
                }
            }
            this.provider = new ethers.providers.Web3Provider(this.wallets[0].provider, 'any');
            this.signer = this.provider.getSigner();
            this.address = this.wallets[0].accounts[0].address;
            this.loading = false;
        },
        async disconnectWallet() {
            this.connected = false;
            this.wallets.forEach(async (wallet) => {
                await this.onboard.disconnectWallet({ label: wallet.label });
            });
        },
        setLoading(val) {
            this.loading = val;
        },
        setAddress(name, address) {
            this.addresses[name] = address;
        },
        async sendTransaction(transaction) {
            //this.loading = true;
            const tx = await this.signer.sendTransaction(transaction);
            const receipt = await tx.wait();
            //this.loading = false;
            return receipt;
        }
    },
});
