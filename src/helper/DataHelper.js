export const translateType = (typeToTranslate) => {
  const types = [
    {default: 'variable', translated: 'Variável'},
    {default: 'fixed', translated: 'Fixo'},
  ]

  const result = types.filter((type) => type.default === typeToTranslate)
  return result.length > 0 ? result[0].translated : typeToTranslate
}

export const dateToString = (date) => {
  if (!date) {
    return null
  }

  const monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const dayNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09']

  return (dayNumbers[date.getDate() - 1] || date.getDate())
    + '/' + monthNumbers[date.getMonth()]
    + '/' + date.getFullYear()
}
