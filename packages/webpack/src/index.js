import _ from 'lodash';
import utils from '@/utils/utils';
import TS from './tsIndex';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

const webpackInit = () => {
    if (module.hot) {
        module.hot.accept('./print.js', function() {
            console.log('Accepting the updated intMe module!');
            printMe();
        });
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
};

const test = () => {
    
};

(function() {
    let ts = new TS(utils);
    ts.getName();
    ts.init();
})();




webpackInit();
test();

document.body.appendChild(component());