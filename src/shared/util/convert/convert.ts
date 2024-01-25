export const convertRate = (
  amount: string,
  rateFrom: string,
  rateTo: string,
) => {
  const amountNumber = Number(amount);
  const rateFromNumber = Number(rateFrom);
  const rateToNumber = Number(rateTo);

  if (isNaN(amountNumber) || isNaN(rateFromNumber) || isNaN(rateToNumber))
    return -1;

  return amountNumber * (rateToNumber / rateFromNumber);
};
