import Image from "next/image";

import logo from "@/assets/logo.png";

export default function Logo() {
    return (
        <Image src={logo} alt="Logo of Rick and Morty" width={50}/>
    );
}