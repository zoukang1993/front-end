import _ from 'lodash';
import utils from '@/utils/utils.js';
import { a } from './ts/index';

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
    console.log('utils', utils);
    console.log("start", a);
};




webpackInit();
test();

document.body.appendChild(component());