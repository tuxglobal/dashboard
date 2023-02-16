
export const useNumberFormat = (amount) => {
    return Math.floor(amount / 10000000000000) / 100000;
}
