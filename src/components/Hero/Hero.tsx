import Image from "next/image";

import heroImage from "@/assets/hero.png";
import { Container } from "@mantine/core";

export default function Hero() {
    return (
        <Container>
            <Image src={heroImage} alt="Hero image"/>
        </Container>
    );
}