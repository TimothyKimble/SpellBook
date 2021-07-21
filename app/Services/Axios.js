
// @ts-ignore
export const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells',
  timeout: 4000
})
//grabbing spells because we are only working with the spells api.


// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/TimothyKimble/spells',
  timeout: 10000
})