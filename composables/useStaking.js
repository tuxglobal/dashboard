import { ethers } from 'ethers';
import { useWalletStore } from '~~/store/useWalletStore';
import { storeToRefs } from 'pinia';
import { decode } from 'js-base64';

export const useStaking = () => {
    const walletStore = useWalletStore();
    const { provider, address } = storeToRefs(walletStore);

    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"STAKING_indexOutOfBounds","type":"error"},{"inputs":[],"name":"STAKING_invalidTokenId","type":"error"},{"inputs":[],"name":"STAKING_noDividends","type":"error"},{"inputs":[],"name":"STAKING_transferFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"addressBook","outputs":[{"internalType":"contract IAddressBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"availableDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRcEntered","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRcRewarded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRcReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rcClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rcPending","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rcRewarded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setAddressBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"burnPercent_","type":"uint256"}],"name":"setBurnPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxRcReward_","type":"uint256"}],"name":"setMaxRcReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"transferTax_","type":"uint256"}],"name":"setTransferTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRcStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWcStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}];

    const contract = () => {
        return new ethers.Contract(useAddressBook('Staking'), abi, provider.value);
    }

    const nfts = async () => {
        const balance = await contract().balanceOf(address.value);
        let wc = [];
        let rc = [];
        for(let i = 0; i < balance; i++) {
            let id = (await contract().tokenOfOwnerByIndex(address.value, i)).toString();
            let nft = await getNft(id);
            switch(nft.stakeType) {
                case '1':
                    wc.push(nft);
                    break;
                case '2':
                    rc.push(nft);
                    break;
            }
        }
        return {
            wc: wc,
            rc: rc,
        }
    }

    const getNft = async (id) => {
        const meta = JSON.parse(decode((await contract().tokenURI(id)).split(',').pop()));
        const nft = {
            id: id,
            stakeType: getAttribute(meta, 'stakeType'),
            stakeTypeString: getAttribute(meta, 'stakeTypeString'),
            stakeAmount: getAttribute(meta, 'stakeAmount'),
            stakeStart: getAttribute(meta, 'stakeStart'),
            stakePrice: getAttribute(meta, 'stakePrice'),
            startingStakeAmount: getAttribute(meta, 'startingStakeAmount'),
            availableDividends: getAttribute(meta, 'availableDividends'),
            dividendsCompounded: getAttribute(meta, 'dividendsCompounded'),
            dividendsClaimed: getAttribute(meta, 'dividendsClaimed'),
            dividendDebt: getAttribute(meta, 'dividendDebt'),
            tuxRefundAvailable: getAttribute(meta, 'tuxRefundAvailable'),
            rcValue: getAttribute(meta, 'rcValue'),
            rcRewardAvailable: getAttribute(meta, 'rcRewardAvailable'),
            meta: meta,
            owned: await contract().ownerOf(id) == address.value,
        }
        return nft;
    }

    const getAttribute = (meta, key) => {
        for(let i = 0; i < meta.attributes.length; i++) {
            if(meta.attributes[i].trait_type == key) {
                return meta.attributes[i].value;
            }
        }
        return null;
    }

    const stake = async (amount) => {
        await useErc20().approve('Tux', useAddressBook('Staking'), amount);
        const transaction = await contract().populateTransaction.stake(amount);
        const receipt = await walletStore.sendTransaction(transaction);
        useWallet().refresh();
        return receipt;
    }

    const unstake = async (id) => {
        const transaction = await contract().populateTransaction.unstake(id);
        const receipt = await walletStore.sendTransaction(transaction);
        useWallet().refresh();
        return receipt;
    }

    const compound = async (id) => {
        const transaction = await contract().populateTransaction.compound(id);
        const receipt = await walletStore.sendTransaction(transaction);
        useWallet().refresh();
        return receipt;
    }

    const claim = async (id) => {
        const transaction = await contract().populateTransaction.claim(id);
        const receipt = await walletStore.sendTransaction(transaction);
        useWallet().refresh();
        return receipt;
    }

    return {
        nfts,
        getNft,
        stake,
        unstake,
        compound,
        claim,
    }
}
