import { API_URL, URL_COMMICS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api.js';
import { getDataApi } from '../../utils/getDataApi.js';
import { ROOT_INDEX} from '../../constants/root.js'

import './_Comics.scss';

class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMMICS);
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { extension, path } }) => {
            if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics-container__item">
                        <span class="comics-container__item__name">${title}</span>
                        <img class="comics-container__item__img" src="${imgSrc}" />
                    </li>
                `;
            }
        });

        const htmlWrapper = `
            <ul class="comics-container">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Comics();