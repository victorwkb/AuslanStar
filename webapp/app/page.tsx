
import Link from "next/link"



export default function Home() {
  return (
    <>
        <h1>默认Home</h1>
        <Link href={"/dictionary"}></Link>
        <Link href={"/resources"}></Link>



    </>
  );
}