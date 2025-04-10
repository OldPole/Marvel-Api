import Comics from '../Comics/Comics.js';

import './_App.scss';

class App {
    async render() {
        await Comics.render();
    }
}

export default new App();