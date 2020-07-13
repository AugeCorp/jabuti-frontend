// TODO
export const toCurrency = (value) => {
  if (!value || typeof value !== 'number') {
    return null
  }
  return value
}


export const toPercent = (totalValue, valueToPercent) => {
  if (!totalValue || !valueToPercent) {
    return null
  }
  return (valueToPercent * 100) / totalValue
}

export const decimalPercent = (percent) => {
  if (!percent) {
    return null
  }
  const value = percent.toFixed(1).toString().replace('.', ',')
  if (value[value.length - 1] === '0') return percent
  return value
}

export const formatMoney = (value) => {
  if (value) {
    return (value / 100).toFixed(2).replace('.', ',');
  }

  return value;
};
