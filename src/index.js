import { API_URL, URL_COMMICS } from './constants/api.js';
import { getDataApi } from './utils/getDataApi.js';

//самовызывающаяся функция
(async () => {
    const data = await getDataApi.getData(API_URL + URL_COMMICS);
    console.log(data);
})();