import LocationFilter from "@/modules/LocationFilter";
import Locations from "@/modules/Locations";
import { Container } from "@mantine/core";

export default function Page() {
    return (
        <Container>
            <LocationFilter />
           <Locations />
        </Container>
    )
}