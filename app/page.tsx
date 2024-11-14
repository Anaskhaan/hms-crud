import Link from "next/link";

export default function Home() {
  return <div>
    <div className=" flex items-center justify-center ">
    <Link href="/employee">

    <button className=" flex items-center justify-center p-4 rounded-xl bg-purple-600 text-white ">panel</button>
    </Link>
    </div>
  </div>;
}
