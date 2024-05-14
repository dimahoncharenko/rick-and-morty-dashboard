"use client";

import Link from "next/link";
import { Container, Collapse, Button } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { ChevronDown, ChevronUp } from "lucide-react";

import { useFindOneQuery } from "@/shared/api/characterApi";
import { cn, formatDate } from "@/shared/lib/utils";
import Badge from "@/components/Badge";

const regex = /\/episode\/(\d+)/;

type Props = {
	id: string;
}

export default function CharacterDetails({ id }: Props) {
	const { data, isLoading } = useFindOneQuery({ id });
	const [opened, { toggle }] = useDisclosure(false);

	if (isLoading || !data) return <p>Loading...</p>;

	return (
		<Container className="py-8">
			<div className="flex gap-10">
				<div className="p-4 shadow">
					<img className={
						cn("rounded-full max-w-[150px] lg:max-w-[200px] border-8",
							data.status === "Alive" ? "border-[#4ae500]"
								: data.status === "Dead" ? "border-[#fbbc04]"
									: "border-[#b4b4b4]")} src={data.image} alt={data.name}
					/>
					<hgroup className="mt-4">
						<h2 className="font-black font-lato text-2xl">{data.name}</h2>
						<p>{data.status}</p>
					</hgroup>

				</div>
				<div className="p-4 shadow flex-1">
					<p className="font-black text-xl">ID: <span className="font-normal">{data.id}</span></p>
					{data.type && <p className="font-black text-xl">Type: <span className="font-normal">{data.type}</span></p>}
					<p className="font-black text-xl">Species: <span className="font-normal">{data.species}</span></p>
					<p className="font-black text-xl">Gender: <span className="font-normal">{data.gender}</span></p>
					<p className="font-black text-xl">Location: <span className="font-normal">{data.location.name}</span></p>
					<p className="font-black text-xl">Origin: <span className="font-normal">{data.origin.name}</span></p>
					<p className="font-black text-xl">Species: <span className="font-normal">{data.species}</span></p>
					<p className="font-black text-xl">In existence since: <span className="font-normal">{formatDate(data.created)}</span></p>
				</div>
			</div>

			<div className="p-4 shadow mt-10">
				<Button className="mb-2 bg-transparent text-black hover:shadow hover:bg-transparent hover:text-black" onClick={toggle}>Featured in {opened ? <ChevronUp size={16} className="-mb-1 ml-1" /> : <ChevronDown size={16} className="-mb-1 ml-1" />}</Button>
				<Collapse in={opened}>
					{data.episode.map((ep, index) => {
						const match = ep.match(regex);
						return <Link className="m-1" key={index} href={`/episodes/${match![1]}`}><Badge color={data.status.toLowerCase()} name={`Episode ${match![1]}`} /></Link>
					})}
				</Collapse>
			</div>
		</Container>
	);
}  