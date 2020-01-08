import operate from './operate';

const Calculate = (obj, buttonName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName);
  const operations = ['+', '-', 'x', '%', '+/-', '÷'].includes(buttonName);
  const equals = ['='].includes(buttonName);
  let { total, next, operation } = obj;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
    return { next, total, operation };
  }

  if (numbers) {
    if (total === null && next === null && buttonName === '0') {
      return {};
    }
    if (operations) {
      if (next) {
        next += buttonName;
        return { next };
      }
      next = buttonName;
      return { next };
    }
    if (next) {
      next += buttonName;
      total = null;
      return { next, total };
    }
  }

  if (buttonName === '.') {
    if (next) {
      if (next.includes('.')) {
        return {};
      }
      next += '.';
      return { next };
    }
    if (total) {
      if (total.includes('.')) {
        return {};
      }
      total += '.';
      return { total };
    }
    if (operation) {
      next = '0.';
      return { next };
    }
    total += '0.';
    return { total };
  }

  if (!next) {
    operation = buttonName;
    return { operation };
  }

  if (equals && next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
    return { next, total, operation };
  }

  if (operations && next && buttonName === '+/-') {
    next = (parseFloat(next) * -1).toString();
    return { next, total, operation };
  }

  if (operations && total && !next && !operation && buttonName === '+/-') {
    next = (parseFloat(total) * -1).toString();
    total = null;
    return { next, total, operation };
  }
  next = total;
  total = null;
  operation = buttonName;
  return { next, total, operation };
};

export default Calculate;
