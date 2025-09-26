export const getUrl = ({ contentType = 'portfolio', order, debug = false }) => {
  if (debug) {
    if (!process.env.REACT_APP_SPACE_ID) {
      console.log('Missing Space ID');
    } else if (!process.env.ACCESS_TOKEN) {
      console.log('Missing Access Token');
    }
  }

  const FETCH_URL = process.env.REACT_APP_FETCH_URL;

  const SPACE_ID = process.env.REACT_APP_SPACE_ID;
  const SPACES_PATH = `spaces/${SPACE_ID}`;

  const URL_ENV = process.env.REACT_APP_URL_ENV;
  const URL_ENV_PATH = `environments/${URL_ENV}`;

  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  const ACCESS_TOKEN_PATH = `entries?access_token=${ACCESS_TOKEN}`;

  let url = `${FETCH_URL}/${SPACES_PATH}/${URL_ENV_PATH}/${ACCESS_TOKEN_PATH}`;

  if (contentType) {
    url += `&content_type=${contentType}`;
  }

  if (order) {
    url += `&order=${order}`;
  }

  return url;
};
