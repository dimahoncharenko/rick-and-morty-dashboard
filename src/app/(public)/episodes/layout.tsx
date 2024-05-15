import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rick And Morty Dashboard - Episodes",
    description: "Explore the Rick and Morty All Episodes: Get to know what you have missed!"
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