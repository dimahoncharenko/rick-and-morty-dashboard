"use client";

import Link from "next/link";
import { Container, Collapse, Button, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { ChevronDown, ChevronUp } from "lucide-react";

import { useFindOneQuery } from "@/shared/api/episodeApi";
import Badge from "@/components/Badge";
import { formatDate } from "@/shared/lib/utils";

const regex = /\/character\/(\d+)/;

type Props = {
	id: string;
}

export default function EpisodeDetails({ id }: Props) {
	const { data, isLoading } = useFindOneQuery({ id });
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<>
			<LoadingOverlay visible={isLoading} />
			{!isLoading && data && <Container className="py-8">
				<div className="p-4 shadow">
					<p className="font-black text-xl">ID: <span className="font-normal">{data.id}</span></p>
					<p className="font-black text-xl">Name: <span className="font-normal">{data.name}</span></p>
					<p className="font-black text-xl">Episode code: <span className="font-normal">{data.episode}</span></p>
					<p className="font-black text-xl">On air: <span className="font-normal">{data.air_date}</span></p>
					<p className="font-black text-xl">Created: <span className="font-normal">{formatDate(data.created)}</span></p>
				</div>

				<div className="p-4 shadow mt-10">
					<Button className="mb-2 bg-transparent text-black hover:shadow hover:bg-transparent hover:text-black" onClick={toggle}>Participated {opened ? <ChevronUp size={16} className="-mb-1 ml-1" /> : <ChevronDown size={16} className="-mb-1 ml-1" />}</Button>
					<Collapse in={opened}>
						{data.characters.map((ep, index) => {
							const match = ep.match(regex);
							return <Link className="m-1" key={index} href={`/${match![1]}`}><Badge color="dead" name={`Character ${match![1]}`} /></Link>
						})}
					</Collapse>
				</div>

			</Container>}
		</>
	);
}