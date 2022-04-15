const axios = require('axios');
const res = require('express/lib/response');

const apiKey = 'HO-Lh1P5hgdTS5ynisyrnnXZ_Jvn5Y1bb2pR5kMIVng';
const searchText = ({ param }) => {
  const options = {
    baseURL: 'https://api.newscatcherapi.com',
    url: `/v2/searchText?filter_fulltext=${param}`,
    timeout: 2000,
    headers: {
      'x-api-key': apiKey
    }
  };

  return axios(options)
  .then(result => {
    cache.set(country, result.data);
    return Promise.resolve(result.data)
  })
  .catch(error => {
    return Promise.reject(error);
  });
}

module.exports = searchText;
