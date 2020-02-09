export const GITHUB_API = 'https://api.github.com/search';
export const DATE_OF_LAST_THIRTY_DAYS = new Date(
  new Date().setDate(new Date().getDate() - 30),
)
  .toISOString()
  .split('T')[0];
