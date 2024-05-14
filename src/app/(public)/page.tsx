import { Container } from "@mantine/core";

import Characters from "@/modules/Characters";
import Filter from "@/modules/CharacterFilter";

export default function Page() {
    return (
        <Container>
            <Filter />
            <Characters />
        </Container>
    );
}