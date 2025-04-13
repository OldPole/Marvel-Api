import { API_URL, URL_COMMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api.js';
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
                const url = API_URL + URL_COMMICS + '/' + id + '/' + URL_CHARACTERS;

                htmlContent += `
                    <li class="comics-container__item" data-url="${url}">
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

    eventListener() {
        document.querySelectorAll('.comics-container__item').forEach(element => {
            const url = element.getAttribute('data-url');

            element.addEventListener('click', () => {
                console.log(url);
            })
        })
    }
}

export default new Comics();