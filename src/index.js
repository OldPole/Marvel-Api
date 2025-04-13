import App from './components/App';
import Comics from './components/Comics';

//самовызывающаяся функция
(async () => {
    await App.render();
    Comics.eventListener();
})();