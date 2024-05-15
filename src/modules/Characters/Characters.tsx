"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useFindManyQuery } from "@/shared/api/characterApi";
import { Gender, Status } from "@/shared/types";
import Sort from "../Sort";
import CharacterCard from "../CharacterCard";
import PaginationBar from "@/modules/PaginationBar";

export default function Characters() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Fetches characters from /character, but if there is a sorting then it's omitted
    const { data, isLoading, error, isError } = useFindManyQuery({
        name: searchParams.get("name"),
        gender: searchParams.get("gender") as Gender,
        status: searchParams.get("status") as Status,
        type: searchParams.get("type"),
        page: searchParams.get("page") || "1",
    });

    if (isLoading) return <p>Loading...</p>
    // @ts-ignore
    if (isError && error.status === 404) return <p className="error-text">Not found such records</p>

    // If there are filters, copy them and change the page accordingly
    const copyParams = () => {
        const params = new URLSearchParams();

        searchParams.has("name") && params.append("name", searchParams.get("name")!);
        searchParams.has("gender") && params.append("gender", searchParams.get("gender")!);
        searchParams.has("status") && params.append("status", searchParams.get("status")!);
        searchParams.has("type") && params.append("type", searchParams.get("type")!);
    
        return params;
    }

    const changePage = (page: number) => {
        const params = copyParams();

        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);
        params.append("page", page.toString());
        router.push(`/?${params}`);
    }

    const changeSort = (sort: string) => {
        const params = copyParams()

        params.append("sort", sort);
        searchParams.has("page") && params.append("page", searchParams.get("page")!);
        router.push(`/?${params}`);
    }

    return (
        <>
            {data && data.results.length > 0 && (
                <Sort raw={data.results} changeSort={changeSort}>
                    {sorted =>
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {sorted.map((item) => <CharacterCard key={item.id} item={item} />)}
                            </div>
                            {data.info.pages && data.info.pages > 0 && <PaginationBar total={data?.info.pages} value={searchParams.has("page") ? Number(searchParams.get("page")) : 1} onChange={changePage} />}
                        </>
                    }
                </Sort>
            )}
        </>
    );
}