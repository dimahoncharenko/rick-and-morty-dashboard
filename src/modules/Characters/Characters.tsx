"use client";

import { useFindManyQuery } from "@/shared/api/characterApi";

export default function Characters() {
    const { data, isLoading } = useFindManyQuery({});

    if (isLoading) return <p>Loading...</p>

    return (
        <>{}</>
    );
}