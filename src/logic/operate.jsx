import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = parseFloat(Big(numberOne));
  const n2 = parseFloat(Big(numberTwo));
  switch (operation) {
    case '+':
      return (n1 + n2);
    case '-':
      return (n1 - n2);
    case 'X':
      return (n1 * n2);
    case '/':
      if (n1 !== 0) {
        return (n1 / n2);
      }
      break;
    default:
      return 'Error';
  }
  return operate.toString();
};

export default operate;
