import { GH_API } from './config';

export function searchUserByName(name, page = 1) {
  return fetch(GH_API.SEARCH_USER + `?q=${name}&page=${page}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else throw Error('Network problems');
    })
    .then(body => body)
    .catch(err => console.error(err));
}
