import HomeComponent from "@/components/Home.component";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>React Hooks</div>
      <div>https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks</div>
      <HomeComponent />
    </main>
  );
}
