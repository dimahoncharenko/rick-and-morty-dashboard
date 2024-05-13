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
        <>{children}</>
    )
}