import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "See a list of your favorite characters"
}

type Props = {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <>{children}</>
    )
}