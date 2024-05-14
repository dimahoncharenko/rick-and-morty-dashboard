"use client";

import { TextInput } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { Search, Tv } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function EpisodeFilter() {
    const searchParams = useSearchParams();
    const [name, setName] = useDebouncedState("", 300);
    const [episode, setEpisode] = useDebouncedState("", 300);
    const router = useRouter();
  
    useEffect(() => {
        const params = new URLSearchParams();
        episode && params.append("episode", episode);
        name && params.append("name", name);
        // If there is sorting, preserve it
        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);

        router.push(`/episodes/?${params}`, );
    }, [episode, name])

    return (
        <form className="flex flex-col md:flex-row gap-4 justify-center py-4">
            <TextInput leftSection={<Search size={16}/>} placeholder="Name" defaultValue={name} onChange={e => setName(e.target.value)} classNames={{ input: "filter-input" }} />
            <TextInput leftSection={<Tv size={16} />} placeholder="Episode" defaultValue={episode} onChange={e => setEpisode(e.target.value)} classNames={{ input: "filter-input" }} />
        </form>
    );
}