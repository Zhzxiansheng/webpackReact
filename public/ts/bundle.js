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
buildName('zhang', undefined); // 类型“undefined”的参数不能赋给类型“string”的参数。所以我在上面改了类型为 any
// console.log(buildName('zhang', undefined));
// 可选参数
function buildName2(firstName, lastName) {
    return firstName + " - " + lastName;
}
buildName2('张');
console.log('====================================');
console.log(buildName2('张'));
console.log('====================================');
// 默认参数
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "壮"; }
    return firstName + " - " + lastName;
}
buildName3("张");
console.log(buildName3("张"));
