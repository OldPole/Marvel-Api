import { API_URL, URL_COMMICS } from '../../constants/api.js';
import { getDataApi } from '../../utils/getDataApi.js';

import './App.scss';

class App {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMMICS);
        console.log(data);
    }
}

export default new App();