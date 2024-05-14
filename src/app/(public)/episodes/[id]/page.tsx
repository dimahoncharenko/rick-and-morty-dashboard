import EpisodeDetails from "@/modules/EpisodeDetails";

type Props = {
	params: { id: string }
}

export default function Page({ params: { id } }: Props) {
	return (
		<>
			<EpisodeDetails id={id} />
		</>
	);
}