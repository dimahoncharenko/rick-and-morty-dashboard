"use client";

import { useFindManyQuery } from "@/shared/api/locationApi";
import { useRouter, useSearchParams } from "next/navigation";
import Sort from "../Sort";
import PaginationBar from "../PaginationBar";
import Link from "next/link";

export default function Locations() {
    const searchParams = useSearchParams();
    const { data, isLoading, isError, error } = useFindManyQuery({
        name: searchParams.get("name"),
        dimension: searchParams.get("dimension"),
        type: searchParams.get("type"),
        page: searchParams.get("page") || "1",
    });

    const router = useRouter();

    // @ts-ignore
    if (isError && error.status === 404) return <p className="error-text">Not found such records</p>

    const copyParams = () => {
        const params = new URLSearchParams();

        searchParams.has("name") && params.append("name", searchParams.get("name")!);
        searchParams.has("dimension") && params.append("dimension", searchParams.get("dimension")!);
        searchParams.has("type") && params.append("type", searchParams.get("type")!);

        return params;
    }

    const changePage = (page: number) => {
        const params = copyParams();

        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);
        params.append("page", page.toString());
        router.push(`/locations/?${params}`);
    }

    const changeSort = (sort: string) => {
        const params = copyParams()

        params.append("sort", sort);
        searchParams.has("page") && params.append("page", searchParams.get("page")!);
        router.push(`/locations/?${params}`);
    }

    return (
        <>
            <Sort raw={data?.results} isLoading={isLoading} changeSort={changeSort}>
                {sorted =>
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {sorted.map((item) => <Link key={item.id} href={`/locations/${item.id}`}>{item.name}</Link>)}
                        </div>
                        {data?.info.pages && data.info.pages > 0 && <PaginationBar total={data?.info.pages} value={searchParams.has("page") ? Number(searchParams.get("page")) : 1} onChange={changePage} />}
                    </>
                }
            </Sort>

        </>
    );
}