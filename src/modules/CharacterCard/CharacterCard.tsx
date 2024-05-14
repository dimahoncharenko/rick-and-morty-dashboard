"use client";

import { Card } from "@mantine/core";

import Badge from "@/components/Badge";
import Link from "next/link";
import { Character } from "@/shared/types";

type Props = {
    item: Character;
}

export default function CharacterCard({ item }: Props) {
    return (
        <Card classNames={{ root: "relative rounded-md border-[#5c5cee] border-2 p-0" }}>
            <div className="absolute right-2 top-1">
                <Badge color={item.status.toLowerCase()} name={item.status} />
            </div>
            <img src={item.image} className="w-full" alt={item.name} />
            <div className="p-2">
                <h2 className="font-bold font-lato text-xl"><Link href={`/${item.id}`}>{item.name}</Link></h2>
                <div className="pt-2">
                    <p>Location</p>
                    <p>{item.location.name}</p>
                </div>
            </div>
        </Card>
    );
}