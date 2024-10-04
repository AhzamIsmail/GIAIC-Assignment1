import Link from "next/link";
export default function contactus(){
    return(<div>
    <ul className="flex gap-5 bg-blue-300">
        <h1>ahzamismail17@gmail.com</h1>
        <br/>
        <ul className="flex gap-5 bg-green-300">
        <br/>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contactus">Contactus</Link></li>
      <li><Link href="/country">Country</Link></li>
      </ul>

    </ul>
    </div>


    
    );
}