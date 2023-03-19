
export const useNumberFormat = (amount, decimals) => {
    return Math.floor(amount / (10 ** (decimals - 2))) / 100;
}
