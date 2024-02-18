"use client";

// import { greet2 } from "./Types.component";

// declaring type of props - see "Typing Component Props" for more examples
type HomeProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

// easiest way to declare a Function Component; return type is inferred.
// const HomeComponent: React.FC = ({ message }: HomeProps) => {

//     return
//     <div>{message}</div>

// }

// // you can choose annotate the return type so an error is raised if you accidentally return some other type
// const HomeComponent = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

// // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
// const HomeComponent = ({ message }: { message: string }) => <div>{message}</div>;

// // Alternatively, you can use `React.FunctionComponent` (or `React.FC`), if you prefer.
// // With latest React types and TypeScript 5.1. it's mostly a stylistic choice, otherwise discouraged.`


const HomeComponent: React.FC<HomeProps> = ({ message }) => {
    const longMessage: string = `Hello ${message}`;
    // greet2("sdfsdf");??????
    return (<div>
        <div>{message}</div>
        <div>{longMessage}</div>
        <div><div>https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/</div></div>
    </div>);
};

export default HomeComponent;
