
// primitive types
// string, number, boolean

export const stringValue: string = "my string";
export const numberValue: number = 5;
export const booleanValue: boolean = true;

// any
export let anyValue: any = "5";
anyValue = 5;


// function

function greet(name: string): void {
    printCoord({ x: 3, y: 7 });

    console.log("no return value function call");
}

// export const greet2 = (name: string): void => { console.log("call 2"); };


// return promise
async function getFavourite(): Promise<number> {
    return 26;
}


// function updateCacheForKey(key) {
//     return fetch(/*...*/).then(result => {
//         const value = result;
//         cache[key] = value;
//         return value;
//     });
// }

const names: string[] = ["Alice", "Bob", "Eve"];

// contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s: string) {
//     console.log(s.toUpperCase());
// });

// contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});


// object types

function printCoord(pt: { x: number, y: number }): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

// union types
function printId(id: string | number): void {
    if (typeof id === "string") {
        // in this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // here, id is of type 'number'
        console.log(id);
    }
}

function welcomePeople(x: string[] | string): void {
    if (Array.isArray(x)) {
        // here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
// type alias
type Point = {
    x: number;
    y: number;
};

// exactly the same as the earlier example  call: printCoord({ x: 100, y: 100 });
function printCoord2(pt: Point): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

type ID = number | string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
    return "sdf";
}


// interface
interface IPoint {
    x: number;
    y: number;
}

function printCoord3(pt: IPoint): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}


// interface vs types

interface IAnimal {
    name: string;
}

interface IBear extends IAnimal {
    honey: boolean;
}



type Animal = {
    name: string;
};

type Bear = Animal & {
    honey: boolean;
};

// const bear = getBear();
// bear.name;
// bear.honey;


// adding new fields to

interface IWindow {
    title: string;
}

interface IWindow {
    ts: IPoint;
}

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});
// type Window4 = {   error
//     title: string;
// };

// type Window4 = {
//     ts: Point;
// };


// type assertion


const myCanvas: HTMLCanvasElement = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("main_canvas");



// literal types
let x: "hello" = "hello";
// ok
x = "hello";
// ...
////// x = "howdy"; this is error
// type '"howdy"' is not assignable to type '"hello"'.


function printText(s: string, alignment: "left" | "right" | "center"): void {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}


declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req: { url: string, method: string } = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method); error
// argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// change 1:
const req2: any = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req2.url, req2.method);
// change 2
// handleRequest(req.url, req.method as "GET");

// const req3 = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req3.url, req3.method);

// non null assertion
function liveDangerously(x?: number | null): void {
    // no error
    console.log(x!.toFixed());
}