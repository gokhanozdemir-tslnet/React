

// function Type Expressions

function greeter(fn: (a: string) => void): void {
    fn("Hello, World");
}

function printToConsole(s: string): void {
    console.log(s);
}

greeter(printToConsole);

// or
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction): void {
    // ...
    console.log("s");
}


// call signature
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction): void {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number): boolean {
    return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);