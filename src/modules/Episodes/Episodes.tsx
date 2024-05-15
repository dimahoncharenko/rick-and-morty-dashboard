"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import { useFindManyQuery } from "@/shared/api/episodeApi";
import Sort from "../Sort";
import PaginationBar from "../PaginationBar";

export default function Episodes() {
    const searchParams = useSearchParams();
    const { data, isLoading, isError, error } = useFindManyQuery({
        name: searchParams.get("name"),
        episode: searchParams.get("episode"),
        page: searchParams.get("page") || "1",
    });

    const router = useRouter();

    // @ts-ignore
    if (isError && error.status === 404) return <p className="error-text">Not found such records</p>

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
        router.push(`/episodes/?${params}`);
    }

    const changeSort = (sort: string) => {
        const params = copyParams()

        params.append("sort", sort);
        searchParams.has("page") && params.append("page", searchParams.get("page")!);
        router.push(`/episodes/?${params}`);
    }

    return (
        <>
            <Sort raw={data?.results} isLoading={isLoading} changeSort={changeSort}>
                {sorted =>
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {sorted.map((item) => <Link key={item.id} href={`/episodes/${item.id}`}>{item.name}</Link>)}
                        </div>
                        {data?.info.pages && data.info.pages > 0 && <PaginationBar total={data?.info.pages} value={searchParams.has("page") ? Number(searchParams.get("page")) : 1} onChange={changePage} />}
                    </>
                }
            </Sort>

        </>
    );
}