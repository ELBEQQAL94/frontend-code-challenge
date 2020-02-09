import axios from 'axios';
import { GITHUB_API, DATE_OF_LAST_THIRTY_DAYS } from '../const';

export async function getRepos(CURRENT_PAGE) {
  try {
    const response = await axios.get(
      `${GITHUB_API}/repositories?q=created:>${DATE_OF_LAST_THIRTY_DAYS}&sort=stars&order=desc&page=${CURRENT_PAGE}`,
    );
    return response.data.items;
  } catch (error) {
    return error;
  }
}
