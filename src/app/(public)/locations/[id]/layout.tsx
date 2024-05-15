import { getLocationById } from "@/shared/lib/requests"
import { Metadata } from "next"

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = params.id

    const location = await getLocationById(id);

    return {
        title: `Exploring the Multiverse: ${location?.name}`,
        description: `Discover ${location?.name} | Rick and Morty`
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