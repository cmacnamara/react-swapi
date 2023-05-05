const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  console.log(res, 'Res object');
  return res.json()
}