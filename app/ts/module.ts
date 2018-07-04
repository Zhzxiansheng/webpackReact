const numberRegexp = /^[0-9]+$/;
interface StringValidator {
    isAcceptable(s: string): boolean;
}
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
class Alert{
    constructor(name: string,age:number){};
    getTostring(){
        console.log(this)
    }
}


export { ZipCodeValidator, Alert };
export { ZipCodeValidator as mainValidator };

