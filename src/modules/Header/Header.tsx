import { Container } from "@mantine/core";

import Logo from "@/components/Logo";
import Link from "next/link";

export default function Header() {
    return (
        <Container classNames={{ root: "flex items-center" }}>
            <Logo />
            <div className="flex gap-8 ml-auto">
                <Link href="/">Characters</Link>
                <Link href="/episodes">Episodes</Link>
                <Link href="/locations">Locations</Link>
            </div>
        </Container>
    );
}