function getCategoryNames(categories: typeof CATEGORIES) {
  return Object.keys(categories);
}

export const CATEGORIES = {
  Housing: {
    description:
      'Rent/mortgage payments, property taxes, utilities, home insurance, maintenance costs, etc.',
    upper: 35,
    average: 25,
    lower: 20,
  },

  Transportation: {
    description:
      'Car payments, fuel costs, maintenance and repairs, public transportation fares, etc.',
    upper: 15,
    average: 10,
    lower: 5,
  },

  Food: {
    description: 'Groceries, dining out, snacks, etc.',
    upper: 15,
    average: 12.5,
    lower: 10,
  },

  Utilities: {
    description: 'Internet, cable/satellite TV, phone bills, etc.',
    upper: 10,
    average: 8,
    lower: 5,
  },

  'Personal Care': {
    description: 'Haircuts, beauty products, toiletries, etc.',
    upper: 5,
    average: 3,
    lower: 2,
  },

  Entertainment: {
    description: 'Movie tickets, concerts, streaming services, hobbies, etc.',
    upper: 10,
    average: 7,
    lower: 5,
  },

  Health: {
    description:
      'Health insurance premiums, medications, doctor visits, gym memberships, etc.',
    upper: 10,
    average: 8,
    lower: 5,
  },

  Education: {
    description: 'Tuition fees, books, supplies, courses, etc.',
    upper: 10,
    average: 5,
    lower: 3,
  },

  'Debt Payments': {
    description:
      'Credit card payments, student loan payments, personal loan payments, etc.',
    upper: 15,
    average: 10,
    lower: 5,
  },

  Savings: {
    description: 'Emergency fund contributions, retirement contributions, etc.',
    upper: 20,
    average: 15,
    lower: 10,
  },

  'Gifts/Donations': {
    description: 'Birthday gifts, holiday gifts, charitable donations, etc.',
    upper: 5,
    average: 3,
    lower: 2,
  },

  Miscellaneous: {
    description: 'Subscriptions, fees, unexpected costs, etc.',
    upper: 15,
    average: 10,
    lower: 5,
  },
};
export const CATEGORY_NAMES = getCategoryNames(CATEGORIES);
