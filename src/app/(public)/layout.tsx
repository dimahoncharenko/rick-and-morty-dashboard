import Hero from "@/components/Hero";
import Header from "@/modules/Header";
import { Box } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Template's main page",
    description: "Basically, there is nothing here."
}

type Props = {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <>
            <Box className="shadow-md py-4">
                <Header />
            </Box>
            
            <Hero />

            {children}
        </>
    )
}