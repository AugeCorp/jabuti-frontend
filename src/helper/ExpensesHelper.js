/* eslint-disable prettier/prettier */
import { colors } from './GlobalStyle';

export const categoryIconUrl = (expenseCategory) => {
  const categories = [
    {
      description: 'Lazer',
      iconUrl: '../static/images/icons/icon-recreation-outline.png',
    },
    {
      description: 'Casa',
      iconUrl: '../static/images/icons/icon-home-outline.png',
    },
    {
      description: 'Estudo',
      iconUrl: '../static/images/icons/icon-book-outline.png',
    },
    {
      description: 'Alimentação',
      iconUrl: '../static/images/icons/icon-burger-outline.png',
    },
    {
      description: 'Saúde',
      iconUrl: '../static/images/icons/icon-heart-outline.png',
    },
    {
      description: 'Vestimenta',
      iconUrl: '../static/images/icons/icon-shirt-outline.png',
    },
    {
      description: 'Transporte',
      iconUrl: '../static/images/icons/icon-car-outline.png',
    },
  ];

  const result = categories.filter(
    (category) => category.description === expenseCategory
  );
  return result.length > 0 ? result[0].iconUrl : categories[0].iconUrl;
};

export const priorityLevelStyle = (level) => {
  const colorScheme = [
    { priority: 'high', color: colors.success },
    { priority: 'medium', color: colors.warning },
    { priority: 'low', color: colors.error },
  ];

  const result = colorScheme.filter(
    (priorityLevel) => priorityLevel.priority === level
  );
  return result.length > 0 ? result[0].color : colorScheme[0].color;
};

export const priorityLevelText = (level) => {
  const levels = [
    { priority: 'high', text: 'alta' },
    { priority: 'medium', text: 'média' },
    { priority: 'low', text: 'baixa' },
  ];

  const result = levels.filter(
    (priorityLevel) => priorityLevel.priority === level
  );
  return result.length > 0 ? result[0].text : levels[0].text;
};
