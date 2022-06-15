const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(queryInput) {

  const response = await fetch(`${API_BASE_URL}${queryInput}`).then(  //This returns a promise which needs to be awaited
    data => data.json()
  );
  return response;    // returns respnse data in JSON format

}
 