import Link from "next/link";
export default function Aboutus(){
  return( <div>
    <ul className="flex gap-5 bg-blue-500">
      <h1>Dynamic Routing Assignment By "Ahzam Ismail"</h1>
      </ul>
        <ul className="flex gap-5 bg-blue-300">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contactus">Contactus</Link></li>
          <li><Link href="/country">Country</Link></li>
        </ul>
        </div>
  );
}