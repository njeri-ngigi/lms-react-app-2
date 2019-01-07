import axios from 'axios';
import { urls, headerObject } from './endpoints';

export const handleSubmit = (e, body) => {
  // e.preventDefault();
  localStorage.setItem(
    'user',
    JSON.stringify('user', {
      username: 'njeri',
      token: 'token',
    }),
  );
  console.log('Was I called?');
  axios
    .post(urls.LOGIN, body, headerObject(''))
    .then((request) => console.log(request.data))
    .catch((error) => console.log(error));
};
