import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-slate-950 text-white text-3xl font-bold h-lvh flex justify-center gap-20 items-center flex-col">
      <Link href="/layoutComponents">layoutComponents</Link>
      <Link href="/HOC">HOC</Link>
    </div>
  );
}
