const baseURL = 'https://my-stackoverflow-lite-api.herokuapp.com/api/v1/';
export const urls = {
  LOGIN: `${baseURL}auth/login`,
  SIGNUP: `${baseURL}auth/signup`,
};

export const headerObject = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
