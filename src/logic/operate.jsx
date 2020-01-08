// eslint-disable-next-line
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = parseFloat(Big(numberOne));
  const n2 = parseFloat(Big(numberTwo));
  switch (operation) {
    case '+':
      return (n1 + n2).toString();
    case '-':
      return (n1 - n2).toString();
    case 'X':
      return (n1 * n2).toString();
    case '÷':
      if (n1 !== 0) {
        return (n1 / n2).toString();
      }
      return 'Error';
    default:
  }
  return operate;
};

export default operate;
