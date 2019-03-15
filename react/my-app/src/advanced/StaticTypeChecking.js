// use Flow and TypeScript 


// Adding Flow to a Project
yarn add --dev flow-bin

npm install --save-dev flow-bin

// add flow to the 'scripts' section package.json
{
    // ...
    "scripts": {
        "flow": "flow",
        // ...
    },
    // ...
}

// finally run flow
yarn run flow init

npm run flow init




