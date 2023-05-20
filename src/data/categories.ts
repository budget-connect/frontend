function getCategoryNames(categories: typeof CATEGORIES) {
  return Object.keys(categories);
}

export const CATEGORIES = {
  Housing: {
    description:
      'Rent/mortgage payments, property taxes, utilities, home insurance, maintenance costs, etc.',
  },
  Transportation: {
    description:
      'Car payments, fuel costs, maintenance and repairs, public transportation fares, etc.',
  },
  Food: {
    description: 'Groceries, dining out, snacks, etc.',
  },
  Utilities: {
    description: 'Internet, cable/satellite TV, phone bills, etc.',
  },
  'Personal Care': {
    description: 'Haircuts, beauty products, toiletries, etc.',
  },
  Entertainment: {
    description: 'Movie tickets, concerts, streaming services, hobbies, etc.',
  },
  Health: {
    description:
      'Health insurance premiums, medications, doctor visits, gym memberships, etc.',
  },
  Education: {
    description: 'Tuition fees, books, supplies, courses, etc.',
  },
  'Debt Payments': {
    description:
      'Credit card payments, student loan payments, personal loan payments, etc.',
  },
  Savings: {
    description: 'Emergency fund contributions, retirement contributions, etc.',
  },
  'Gifts/Donations': {
    description: 'Birthday gifts, holiday gifts, charitable donations, etc.',
  },
  Miscellaneous: {
    description: 'Subscriptions, fees, unexpected costs, etc.',
  },
};
export const CATEGORY_NAMES = getCategoryNames(CATEGORIES);
