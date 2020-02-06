import axios from "axios";

const GITHUB_API = "https://api.github.com/search";
let DATE_OF_LAST_THIRTY_DAYS = new Date(
  new Date().setDate(new Date().getDate() - 30)
)
  .toISOString()
  .split("T")[0];

export async function getRepos() {
  try {
    const response = await axios.get(
      `${GITHUB_API}/repositories?q=created:>${DATE_OF_LAST_THIRTY_DAYS}&sort=stars&order=desc`
    );
    return response.data.items;
  } catch (error) {
    return false
  }
}
