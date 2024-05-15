import { getEpisodeById } from "@/shared/lib/requests"
import { Metadata } from "next"

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = params.id

    const episode = await getEpisodeById(id);

    return {
        title: `Rick and Morty - ${episode?.name}`,
        description: `Discover more about ${episode?.name} | Rick and Morty`
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