import _ from 'lodash';
import { utils } from './utils/utils';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    if (module.hot) {
        module.hot.accept('./print.js', function() {
            console.log('Accepting the updated intMe module!');
            printMe();
        })
    }
    return element;
}


console.log("start", utils);

(function() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
})();

document.body.appendChild(component());