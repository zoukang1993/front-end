import AllTS from './ts/index';

interface Utils {
    name ?: string,
    type ?: any,
}

export default class TS {
    data : Utils;
    name : string;

    constructor(utils : Utils) {
        this.data = utils;
        this.name = utils.name;
    }

    init() {
        let allTs = new AllTS();
        allTs.exexute();
    }


    getName() {
        console.log("name", this.name);
    }
}