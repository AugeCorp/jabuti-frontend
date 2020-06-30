export const categoryIconUrl = (expenseCategory) => {
  const categories = [
    {description: 'Lazer', iconUrl: '../static/images/icons/icon-recreation-outline.png'},
    {description: 'Casa', iconUrl: '../static/images/icons/icon-home-outline.png'},
    {description: 'Estudo', iconUrl: '../static/images/icons/icon-book-outline.png'},
    {description: 'Alimentação', iconUrl: '../static/images/icons/icon-burger-outline.png'},
    {description: 'Saúde', iconUrl: '../static/images/icons/icon-heart-outline.png'},
    {description: 'Vestimenta', iconUrl: '../static/images/icons/icon-shirt-outline.png'},
    {description: 'Transporte', iconUrl: '../static/images/icons/icon-car-outline.png'},
  ]

  const result = categories.filter((category) => category.description === expenseCategory)
  console.log(result.length > 0 ? result[0].iconUrl : categories[0].iconUrl)
  return result.length > 0 ? result[0].iconUrl : categories[0].iconUrl
}