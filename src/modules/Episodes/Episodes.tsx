"use client";

import { useFindManyQuery } from "@/shared/api/episodeApi";
import { useSearchParams, useRouter } from "next/navigation";
import Sort from "../Sort";
import PaginationBar from "../PaginationBar";
import Link from "next/link";

export default function Episodes() {
    const searchParams = useSearchParams();
    const { data, isLoading } = useFindManyQuery({ 
        name: searchParams.get("name"),
        episode: searchParams.get("episode"),
        page: searchParams.get("page") || "1",
    });

    const router = useRouter();

    if (isLoading) return <p>Loading...</p>

    const copyParams = () => {
        const params = new URLSearchParams();

        searchParams.has("name") && params.append("name", searchParams.get("name")!);
        searchParams.has("episode") && params.append("episode", searchParams.get("episode")!);
    
        return params;
    }

    const changePage = (page: number) => {
        const params = copyParams();

        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);
        params.append("page", page.toString());
        router.push(`/episode/?${params}`);
    }

    const changeSort = (sort: string) => {
        const params = copyParams()

        params.append("sort", sort);
        searchParams.has("page") && params.append("page", searchParams.get("page")!);
        router.push(`/episode/?${params}`);
    }

    return (
        <>
            {data && data.results.length > 0 && (
                <Sort raw={data.results} changeSort={changeSort}>
                    {sorted =>
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {sorted.map((item) => <Link key={item.id} href={`/episodes/${item.id}`}>{item.name}</Link>)}
                            </div>
                            {data.info.pages && data.info.pages > 0 && <PaginationBar total={data?.info.pages} value={searchParams.has("page") ? Number(searchParams.get("page")) : 1} onChange={changePage} />}
                        </>
                    }
                </Sort>
            )}
        </>
    );
}