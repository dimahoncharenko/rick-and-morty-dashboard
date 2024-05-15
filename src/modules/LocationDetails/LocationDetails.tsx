"use client";

import { Button, Collapse, Container, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

import { useFindOneQuery } from "@/shared/api/locationApi";
import Badge from "../../components/Badge";
import { formatDate } from "@/shared/lib/utils";

const regex = /\/character\/(\d+)/;

type Props = {
	id: string;
}
export default function LocationDetails({ id }: Props) {
	const { data, isLoading } = useFindOneQuery({ id });
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<>
			<LoadingOverlay visible={isLoading} />
			{!isLoading && data && (
				<Container className="py-8">
					<div className="p-4 shadow">
						<p className="font-black text-xl">ID: <span className="font-normal">{data.id}</span></p>
						<p className="font-black text-xl">Type: <span className="font-normal">{data.type}</span></p>
						<p className="font-black text-xl">Name: <span className="font-normal">{data.name}</span></p>
						<p className="font-black text-xl">Dimension: <span className="font-normal">{data.dimension}</span></p>
						<p className="font-black text-xl">Created: <span className="font-normal">{formatDate(data.created)}</span></p>
					</div>

					<div className="p-4 shadow mt-10">
						<Button className="mb-2 bg-transparent text-black hover:shadow hover:bg-transparent hover:text-black" onClick={toggle}>Participated {opened ? <ChevronUp size={16} className="-mb-1 ml-1" /> : <ChevronDown size={16} className="-mb-1 ml-1" />}</Button>
						<Collapse in={opened}>
							{data.residents.map((res, index) => {
								const match = res.match(regex);
								return <Link className="m-1" key={index} href={`/${match![1]}`}><Badge color="alive" name={`Character ${match![1]}`} /></Link>
							})}
						</Collapse>
					</div>
				</Container>
			)}
		</>
	);
}