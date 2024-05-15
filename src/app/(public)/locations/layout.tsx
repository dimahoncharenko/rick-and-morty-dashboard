import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rick And Morty Dashboard - Locations",
    description: "Explore the Rick and Morty Multiverse: All Known Locations!"
}

type Props = {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <>
            {children}
        </>
    )
}