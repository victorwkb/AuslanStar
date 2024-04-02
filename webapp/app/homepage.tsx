import Title from "@/components/Title";
import Feature from "@/components/Feature";
import Link from "next/link"



export default function Home() {
  return (
    <>
        <h1>默认Home</h1>
        <Link href={"/dictionary"}></Link>
        <Link href={"/resources"}></Link>
      <Title />
      <Feature />


    </>
  );
}