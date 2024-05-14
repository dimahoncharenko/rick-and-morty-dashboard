"use client";

import { TextInput } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { LucideType, Search, LandPlot } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LocationFilter() {
    const searchParams = useSearchParams();
    const [name, setName] = useDebouncedState("", 300);
    const [type, setType] = useDebouncedState("", 300);
    const [dimension, setDimension] = useDebouncedState("", 300);
    const router = useRouter();
  
    useEffect(() => {
        const params = new URLSearchParams();
        type && params.append("type", type);
        name && params.append("name", name);
        dimension && params.append("dimension", dimension);
        // If there is sorting, preserve it
        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);

        router.push(`/locations/?${params}`);
    }, [dimension, name, type])

    return (
        <form className="flex flex-col md:flex-row gap-2 justify-evenly py-4">
            <TextInput leftSection={<Search size={16}/>} placeholder="Name" defaultValue={name} onChange={e => setName(e.target.value)} classNames={{ input: "filter-input" }} />
            <TextInput leftSection={<LucideType size={16} />} placeholder="Episode" defaultValue={type} onChange={e => setType(e.target.value)} classNames={{ input: "filter-input" }} />
            <TextInput leftSection={<LandPlot size={16} />} placeholder="Dimension" defaultValue={dimension} onChange={e => setDimension(e.target.value)} classNames={{ input: "filter-input" }} />
        </form>
    );
}