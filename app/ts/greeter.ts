
// 定义接口 interface
interface Person {
    firstName: string,
    lastName: string
}

function greeter(person:Person){
    return "Hello   :"+ person.firstName + " + " + person.lastName;
}

var  user = { firstName:"张", lastName:"浩" }

// 最后使用类来改写这个例子

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + "-" + middleInitial + "-" + lastName;
    }
}

interface Person{
    firstName:string;
    middleInitial:string;
    lastName: string;
}

function greeter2 (person:Person){
    return person.firstName + "-" + person.middleInitial + "-" + person.lastName;
}

var user2 = new Student("张", "1","壮");

// console.log(greeter2(user2));

// var name2:string = 123;
// console.log(typeof name2) // number  这种情况会提示出错但依然会编译，只是可能会出现不按预期执行的情况

let name3:string = "zhang";
let age:number = 18;
let sentence: string = `你好啊， ${name3}`; // 可以用末班字符串 定义文本和内嵌表达式 
// console.log(sentence) ; // 你好啊， zhang

// 数组
let list: Array<number> = [1,2,3];
// console.log(list); // 使用数组的 泛型

// 枚举 enum
enum Color {red = 1,green=2,blue=4}
let c:Color = Color.red;
// console.log(c) // 0 如果定义数值就显示数值，没定义默认为下标 

let colorName:string = Color[4];
// console.log(colorName); // blue

// Any 
// 定义变量类型的时候如果不清楚类型，这些值可能来自动态的内容  我们可以用any类型来标记这些变量
let u:any;

// 类型断言 有两种语法： 尖括号语法  和 as 语法  作用： 绕开ts 的额外的属性检查

let somValue: any = 'this is string';
let strLength: number = (<string>somValue).length;  // 这种写法在使用 jsx 时，只有as 语法是被允许的

//等价于 let strLength: number = (somValue as string).length;

// 可选属性  定义了但没有规定必须传入
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black"});
// console.log(mySquare);// {color:"black", area:100}  

// 只读属性 readonly

interface Point {
    readonly x: number;
    readonly y:number;
}
// 上面定义了只读属性，那么我们构造一个Point

let p1:Point = {x:10,y:8};
// p1.x = 8;  // 会报错： 无法分配到X ，因为他是常数或只读属性

// 额外属性检查 最佳的方式是添加一个字符串索引签名

interface SquareConfig2{
    color?:string,
    width?:number,
    [propName:string]:any
}

// 可索引类型

interface StringArray{
    [index:number]: string
}

let myArray : StringArray;
myArray = ["z","h"];
// console.log(myArray[1]) // h


// 将索引签名设置为只读，这样就防止了给索引赋值：
interface ReadonlyStringArray{
    readonly [index:number] : string
}
let myArray2: ReadonlyStringArray = ["alice","bob"];
// myArray2[2] = "测试添加"; // error: ReadonlyStringArray中的索引签名仅允许读取

// 继承接口
interface Shape {
    color:string;
}
interface Acfun{
    name: string
}
// 可以继承一个也可以继承多个， 继承多个的时候中间用 , 链接
interface Square extends Shape, Acfun{
    slideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.slideLength = 10;
square.name = 'z';

let square2 = <Square>{};  // var square2 = {}; 编译出来的js 其实就相当于声明了一个对象， 意义不大

// 接口继承类  关键字： private   protected  意味着当你创建了一个接口继承一个拥有私有或保护的成员类是， 这个接口只能被这个类或其子类实现
// implements 实现类接口的关键字
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}


class Button extends Control implements SelectableControl {
    select() { }
}


class TextBox extends Control {
    select() { }
}



// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }

// class Location {

// }

// 类
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello  " + this.greeting;
    }
}

let greet = new Greeter2("world");
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

class Animal {
    readonly name: string;  // 这里是共有属性，子类可以得到并使用
    private age: number;  // 这里是私有属性，new 出来的实例不能得到并且不能引用
    protected number: number; // 这里是受保护属性  文档上： 和private 很相似，但是派生类可以引用； 但是我发现派生类也不能引用
    readonly haha: string;  // 只读属性  文档上：实例出来的类，不能访问只读属性， 但是 ，发现是能够获取到只读属性的 
    constructor(theName: string, theAge: number, theNum: number, theHaha : string) { this.name = theName; this.age = theAge; this.number = theNum,this.haha = theHaha}
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string, age: number, number: number, haha: string) { super(name,age,number,haha); }  // super()关键字 ； 如果子类（又叫派生类）有构造函数 就必须写这个关键字
    move(distanceInMeters = 5) {  // 这种判断都是， 如果== undefied 就赋值为 5
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string, age: number, number: number, haha:string) { super(name, age, number,haha); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python",1,1,'haha');
let tom: Animal = new Horse("Tommy the Palomino",1,1,'hah');

// sam.move();  // Sammy  the  Python moved 5 m
// tom.move(34); // Tommy the Palomino moved 34 

var animal = new Animal('1',1,1,'2');
// animal.haha   // 这里只读属性依然访问到了

class Animal2 {
    constructor(private name: string) { } // 这里仔细比对上方， 少了定义 name:string 和 theName  直接定义在括号里了
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
var naimal2 = new Animal2('1221');
// console.log(naimal2) // Animal2{name: 1221}


//  存取器  get  set

let passcode = "secret passcode";

class Employee {
    private _fullName: string;
    constructor(thefullName:string){this._fullName = thefullName}
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

// let employee = new Employee('整个名称'); // 默认名称， 当条件不满足set 第一个判断时； 判断条件里的 this._fullName = newName; 没有走
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// 静态属性  用 static 定义一个静态属性， 使用的时候 class类的name .static定义name. x

class Grid{
    static origin = {x:0,y:0};
    fromOrigin(point:{x:number,y:number}) {
        let xDist = (point.x -Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        console.log("point.y：" + point.y); // 10
        console.log("Grid.origin.y: " + Grid.origin.y); // 0
        console.log(this.scale); // 1 and  5
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale:number){

    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

// 抽象类  abstract 关键字 是用于定义抽象类后抽象类内部定义抽象方法  抽象类作为其他派生类的基类使用，一般不会被实例化

abstract class Animal3 {
    abstract makeSound() :void;
    move() :void{
        console.log('roaming the earch...')
    }
}

abstract class Department {
    constructor(public name:string){

    }
    printName() :void{
        console.log('Department name: '+ this.name);
    }
    abstract printMeting(): void; // 必须在派生类中实现
}
// let abc = new Department(); // 报错， 无法创建抽象类实例
// 抽象类的派生类
class AccountDepartment extends Department{
    constructor(){
        super('派生类必须调用super');
    }
    printMeting(): void{
        console.log('执行抽象类的printMeting方法');  
    } 

    generteReports(): void{
        console.log('另一个不属于抽象类的方法')
    }
}

let department: Department;// 意思是 Department 类的实例是Greeter; 是面向对象的一种写法
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
class NewPoint{
    xx: number | undefined;
    yy!: number;
}

interface Point3d extends NewPoint{
    z:number
}
let point3d : Point3d = {xx:1,yy:2,z:3};
// console.log(point3d); //{xx:1,yy:2,z:3}


//函数
let z:number =100;

function addToz(x:number,y:number):string{ // 函数结果也可以定义类型
    return '' + (x + y + z);
}

// 可选参数和默认参数  Ts 里的每个函数参数都是必须的，不是不能传递 null || undefined 作为参数， 而是说编译器检查时会检查是否每个参数都传入了值

function buildName (firstName:string, lastName:any):string{
    return firstName + " - " + lastName;
}
// buildName('1'); // error 应有 2 个参数，但获得 1 个。
// buildName('1', '2', '3'); // error 应有 2 个参数，但获得 3 个。

buildName('zhang', undefined); // 类型“undefined”的参数不能赋给类型“string”的参数。所以我在上面改了类型为 any

// console.log(buildName('zhang', undefined));

// 可选参数
function buildName2(firstName: string, lastName?: string){
    return firstName + " - " + lastName;
}
buildName2('张');

// console.log(buildName2('张')); // 张 -undefined


// 默认参数
function buildName3(firstName: string, lastName="三") {
    return firstName + " - " + lastName;
}
buildName3("张");
// console.log(buildName3("张")); // 张 -三
