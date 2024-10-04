import Link from "next/link";
export default function Home(){
  return( <div>
    <ul className="flex gap-3 bg-orange-500">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contactus">Contactus</Link></li>
      <li><Link href="/country">Country</Link></li>

    </ul>
   
    <img src="https://files.oaiusercontent.com/file-a7MFvz0EoU7tOqukHXG93RiC?se=2024-10-04T11%3A30%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D22b255f3-ca5e-4fe7-86c4-e3a3131f1c7e.webp&sig=uq/NDAdt6n7Emg5potftwMuAFnu2eYwx6fcIdFH5KWQ%3D" alt="Sorry" height="800" width="700" />
    </div>
  )
}
