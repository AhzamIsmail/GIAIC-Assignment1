import Link from "next/link";

export default function Page() {
    return (
        <div>
            <ul className=" bg-blue-300">
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/malaysia">Malaysia</Link></li>
                <li><Link href="/country/portugal">Portugal</Link></li>
                <li><Link href="/country/france">France</Link></li>
                <li><Link href="/country/turkey">Turkey</Link></li>
            </ul>
        </div>
    );
}