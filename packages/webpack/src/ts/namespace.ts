
namespace Validation {
    export interface StringValidator {
        isAccesptable(s:string) : boolean;
    }

    const LetterRegexp = /^[a-zA-Z]+$/;

    export class LetterOnly implements StringValidator {
        isAccesptable(s:string) {
            return LetterRegexp.test(s);
        }
    }
}

let names = "Joe";


