"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello   :" + person.firstName + " + " + person.lastName;
}
var user = { firstName: "张", lastName: "浩" };
// 最后使用类来改写这个例子
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "-" + middleInitial + "-" + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return person.firstName + "-" + person.middleInitial + "-" + person.lastName;
}
var user2 = new Student("张", "1", "壮");
// console.log(greeter2(user2));
// var name2:string = 123;
// console.log(typeof name2) // number  这种情况会提示出错但依然会编译，只是可能会出现不按预期执行的情况
var name3 = "zhang";
var age = 18;
var sentence = "\u4F60\u597D\u554A\uFF0C " + name3; // 可以用末班字符串 定义文本和内嵌表达式 
// console.log(sentence) ; // 你好啊， zhang
// 数组
var list = [1, 2, 3];
// console.log(list); // 使用数组的 泛型
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
var c = Color.red;
// console.log(c) // 0 如果定义数值就显示数值，没定义默认为下标 
var colorName = Color[4];
// console.log(colorName); // blue
// Any 
// 定义变量类型的时候如果不清楚类型，这些值可能来自动态的内容  我们可以用any类型来标记这些变量
var u;
// 类型断言 有两种语法： 尖括号语法  和 as 语法  作用： 绕开ts 的额外的属性检查
var somValue = 'this is string';
var strLength = somValue.length; // 这种写法在使用 jsx 时，只有as 语法是被允许的
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
// 上面定义了只读属性，那么我们构造一个Point
var p1 = { x: 10, y: 8 };
var myArray;
myArray = ["z", "h"];
var myArray2 = ["alice", "bob"];
var square = {};
square.color = "blue";
square.slideLength = 10;
square.name = 'z';
var square2 = {}; // var square2 = {}; 编译出来的js 其实就相当于声明了一个对象， 意义不大
// 接口继承类  关键字： private   protected  意味着当你创建了一个接口继承一个拥有私有或保护的成员类是， 这个接口只能被这个类或其子类实现
// implements 实现类接口的关键字
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
// class Location {
// }
// 类
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        return "hello  " + this.greeting;
    };
    return Greeter2;
}());
var greet = new Greeter2("world");
// console.log(greet.greet());// Greeter {greeting:"world"}
// class Animal {
//     move(distanceInMeters: number = 0) {
//         // 这里的判断条件是 if (distanceInMeters == viod 0 也就是undfined; 那么 distanceInMeters = 0) 确保一直有值
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// // dog.bark();
// dog.move(10);
var Animal = /** @class */ (function () {
    function Animal(theName, theAge, theNum, theHaha) {
        this.name = theName;
        this.age = theAge;
        this.number = theNum, this.haha = theHaha;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, age, number, haha) {
        return _super.call(this, name, age, number, haha) || this;
    } // super()关键字 ； 如果子类（又叫派生类）有构造函数 就必须写这个关键字
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name, age, number, haha) {
        return _super.call(this, name, age, number, haha) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python", 1, 1, 'haha');
var tom = new Horse("Tommy the Palomino", 1, 1, 'hah');
// sam.move();  // Sammy  the  Python moved 5 m
// tom.move(34); // Tommy the Palomino moved 34 
var animal = new Animal('1', 1, 1, '2');
// animal.haha   // 这里只读属性依然访问到了
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    } // 这里仔细比对上方， 少了定义 name:string 和 theName  直接定义在括号里了
    Animal2.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var naimal2 = new Animal2('1221');
// console.log(naimal2) // Animal2{name: 1221}
//  存取器  get  set
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee(thefullName) {
        this._fullName = thefullName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
// let employee = new Employee('整个名称'); // 默认名称， 当条件不满足set 第一个判断时； 判断条件里的 this._fullName = newName; 没有走
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }
// 静态属性  用 static 定义一个静态属性， 使用的时候 class类的name .static定义name. x
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.fromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        console.log("point.y：" + point.y); // 10
        console.log("Grid.origin.y: " + Grid.origin.y); // 0
        console.log(this.scale); // 1 and  5
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
// 抽象类  abstract 关键字 是用于定义抽象类后抽象类内部定义抽象方法  抽象类作为其他派生类的基类使用，一般不会被实例化
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    Animal3.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal3;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
// let abc = new Department(); // 报错， 无法创建抽象类实例
// 抽象类的派生类
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, '派生类必须调用super') || this;
    }
    AccountDepartment.prototype.printMeting = function () {
        console.log('执行抽象类的printMeting方法');
    };
    AccountDepartment.prototype.generteReports = function () {
        console.log('另一个不属于抽象类的方法');
    };
    return AccountDepartment;
}(Department));
var department; // 意思是 Department 类的实例是Greeter; 是面向对象的一种写法
department = new AccountDepartment();
// console.log(department);
// department.printName() // 继承了抽象类的方法  // Department name: 派生类必须调用super
// department.printMeting() // 执行抽象类的printMeting方法
// department.generteReports() // 报错， 方法在生命的抽象类中不存在
// 类的高级技巧
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }
// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";
// let greeter4:Greeter = new greeterMaker();
// console.log(greeter4.greet());
// 把类当做接口来用
var NewPoint = /** @class */ (function () {
    function NewPoint() {
    }
    return NewPoint;
}());
var point3d = { xx: 1, yy: 2, z: 3 };
// console.log(point3d); //{xx:1,yy:2,z:3}
//函数
var z = 100;
function addToz(x, y) {
    return '' + (x + y + z);
}
// 可选参数和默认参数  Ts 里的每个函数参数都是必须的，不是不能传递 null || undefined 作为参数， 而是说编译器检查时会检查是否每个参数都传入了值
function buildName(firstName, lastName) {
    return firstName + " - " + lastName;
}
// buildName('1'); // error 应有 2 个参数，但获得 1 个。
// buildName('1', '2', '3'); // error 应有 2 个参数，但获得 3 个。
// buildName('zhang', undefined); // 类型“undefined”的参数不能赋给类型“string”的参数。所以我在上面改了类型为 any
// console.log(buildName('zhang', undefined));
// 可选参数
function buildName2(firstName, lastName) {
    return firstName + " - " + lastName;
}
// buildName2('张');
// console.log(buildName2('张')); // 张 -undefined
// 默认参数
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "三"; }
    return firstName + " - " + lastName;
}
// buildName3("张");
// console.log(buildName3("张")); // 张 -三
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["End"] = 1] = "End";
})(Status || (Status = {}));
var color = Color.Red;
// color = Status.End// 不同枚举类型之间是不兼容的
// 高级类型
// 联合类型
function padLeft(value, padding) {
    console.log(typeof (padding));
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
function getSmallPet(item) {
    return item;
}
var pet = getSmallPet(1);
pet.layEggs; // okay  // 当一个函数联合两个接口的时候， 那么只有两个接口的公用部分
// pet.swim();    // errors
// 每一个成员访问都会报错
// if (pet.swim) { //类型“Bird | Fish”上不存在属性“swim”。类型“Bird”上不存在属性“swim”。
//     pet.swim();//类型“Bird | Fish”上不存在属性“swim”。类型“Bird”上不存在属性“swim”
// }
// else if (pet.fly) {类型“Bird | Fish”上不存在属性“swim”。类型“Bird”上不存在属性“fly”
//     pet.fly();类型“Bird | Fish”上不存在属性“swim”。类型“Bird”上不存在属性“fly”
// }
// 这时候就用到了类型断言
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
// 自定义类型保护
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    // pet.fly();
}
// typeof 类型保护  这种写法相当于上面这个padLeft方法的封装; 更加优秀
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft2(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
// instanceof 类型保护
// instanceof的右侧要求是一个构造函数，TypeScript将细化为：
// 1此构造函数的 prototype属性的类型，如果它的类型不为 any的话
//2 构造签名所返回的类型的联合
// 特殊类型 null undefined  当声明一个变量， 这个变量不会包含undefined null 可以用联合类型的方法明确包含他们
var a = 'zhz'; //相当于 声明a 是字符串类型
// a = null // error 不能将类型“null”分配给类型“string”。
// a = undefined // error 不能将类型“undefined”分配给类型“string”。
var s = "zhz";
s = null; //ok
// 可选参数和可选属性    这两者会默认添加上 |undefined
function f(name, age) {
    return name + age;
}
f('z', 1); //ok
f('z', undefined); //ok  
// f('z', null); //error   类型“null”的参数不能赋给类型“number | undefined”的参数。
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var cc = new C();
// console.log(typeof(cc.name));
cc.name = '123'; //ok
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
getName("zz"); //ok
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
function Shap(s) {
    switch (s.kind) {
        case "square": return s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return s.radius;
    }
}
// 多态的 this类型
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
// console.log(v)// 11  先执行 BasicCalculator  this.value = 2; 再执行 multiply(5)  operand = 5  this.value = this.value * operand = 2*5    再执行 add this.value = 10 + 1 
// 索引类型
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
// console.log(strings) //["Jarid"]
// symbols
var sym1 = Symbol();
var sym2 = Symbol("key"); // 可选的字符串key
var sym4 = Symbol("key");
var sym3 = Symbol("key");
var pets = '123456';
function bian(obj) {
    for (var i in obj) {
        console.log(i);
    }
    for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
        var iterator = pets_1[_i];
        console.log(iterator);
    }
}
var lettersRegexp = /^[A-Za-z]+$/; // 只能是字母
var numberRegexp = /^[0-9]+$/; // 只能是数字
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
// Some samples to try
var strings2 = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings2_1 = strings2; _i < strings2_1.length; _i++) {
    var s_1 = strings2_1[_i];
    for (var name_1 in validators) {
        // console.log(validators[name])
        var isMatch = validators[name_1].isAcceptable(s_1);
        // console.log(isMatch)
        // console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
console.log(1);
// import * as module from "./module"
// let alertModule = new module.Alert("张",17);
// console.log(alertModule);
// alertModule.getTostring();
define("module", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    exports.ZipCodeValidator = ZipCodeValidator;
    exports.mainValidator = ZipCodeValidator;
    var Alert = /** @class */ (function () {
        function Alert(name, age) {
        }
        ;
        Alert.prototype.getTostring = function () {
            console.log(this);
        };
        return Alert;
    }());
    exports.Alert = Alert;
});
