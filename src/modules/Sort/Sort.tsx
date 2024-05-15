"use client";

import { LoadingOverlay, Radio } from "@mantine/core";
import { useSearchParams } from "next/navigation";

type Sort = {
    field: string;
    order: "asc" | "desc";
}

type Props<T> = {
    raw?: T[];
    isLoading: boolean;
    changeSort: (sort: string) => void;
    children(sorted: T[]): React.ReactNode;
}
export default function Sort<T extends { name: string },>({ raw, changeSort, children, isLoading }: Props<T>) {
    const searchParams = useSearchParams();

    const sorted = (array: T[]) => array.sort((obj1, obj2) => {
        const sortingBy = searchParams.get("sort") || "desc";

        if (
            sortingBy === "desc" ? obj1.name < obj2.name
                : obj1.name > obj2.name
        )
            return -1;
        else if (
            sortingBy === "asc" ? obj1.name > obj2.name
                : obj1.name < obj2.name
        )
            return 1;
        return 0;
    });

    return (
        <>
            <LoadingOverlay visible={isLoading} />

            <Radio.Group classNames={{ root: "my-4" }} name="sort" value={searchParams.get("sort") || "desc"} onChange={changeSort}>
                <Radio value="desc" label="Sort in descending order" />
                <Radio classNames={{ root: "my-2" }} value="asc" label="Sort in ascending order" />
            </Radio.Group>

            {!isLoading && children(sorted(raw!.slice(0)))}

        </>
    );
}