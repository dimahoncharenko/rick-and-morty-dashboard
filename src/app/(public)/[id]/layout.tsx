import { getCharById } from "@/shared/lib/requests"
import { Metadata } from "next"

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = params.id

    const char = await getCharById(id);

    return {
        title: `${char?.name}: Rick and Morty's Wacky Character | Explore Now!`,
        description: `memorable quotes, & fun facts! (under 160 characters)
        Get to know the wild world of ${char?.name} in Rick and Morty! Discover their personality`
    }
}

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>{children}</>
    )
}