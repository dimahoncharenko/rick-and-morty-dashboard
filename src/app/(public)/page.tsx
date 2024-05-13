import Hero from "@/components/Hero";
import Header from "@/modules/Header";
import { Box } from "@mantine/core";

export default function Page() {
    return (
        <>
            <Box className="bg-black">
                <Header />
            </Box>
            <Hero />
        </>
    );
}