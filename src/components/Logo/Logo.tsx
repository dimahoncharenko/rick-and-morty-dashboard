import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

export default function Logo() {
    return (
        <Link href="/"><Image src={logo} alt="Logo of Rick and Morty" height={50} /></Link>
    );
}