import { ethers } from 'ethers';
import { useWalletStore } from '~~/store/useWalletStore';
import { storeToRefs } from 'pinia';

export const useAddressBook = async (name) => {
    const contractAddress = '0xB2e5FBCD1ae85b060c70315668f3D1f2e2D13Fe5';
    const walletStore = useWalletStore();
    const { provider, addresses } = storeToRefs(walletStore);

    if(typeof addresses[name] !== 'undefined') {
        return addresses[name];
    }

    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"addressBook","outputs":[{"internalType":"contract IAddressBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"get","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"address","name":"address_","type":"address"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setAddressBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"unset","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const contract = new ethers.Contract(contractAddress, abi, provider.value);

    const address = await contract.get(name);
    walletStore.setAddress(name, address);
    return address;
}
