import App from './components/App';

//самовызывающаяся функция
(async () => {
    await App.render();
})();