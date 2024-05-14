import EpisodeFilter from "@/modules/EpisodeFilter";
import Episodes from "@/modules/Episodes";
import { Container } from "@mantine/core";

export default function Page() {
    return (
        <Container>
            <EpisodeFilter />
            <Episodes />
        </Container>
    )
}