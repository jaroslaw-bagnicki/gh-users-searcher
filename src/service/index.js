import { GH_API } from './config';

export function searchUserByName(name) {
  return fetch(GH_API.SEARCH_USER + `?q=${name}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else throw Error('Network problems');
    })
    .then(body => body)
    .catch(err => console.error(err));
}
