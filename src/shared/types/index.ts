export type BackendResponse<T> = {
    info: {
        count: number;
        pages: number;
        next: null | string;
        prev: null | string;
    },
    results: T[]
}

export type Status = "Alive" | "Dead" | "unknown";
export type Gender = "Female" | "Male" | "Genderless" | "unknown";

type Entity = {
    id: number;
    name: string;
    url: string;
    created: string;
}

export type Character = Entity & {
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
}

export type Episode = Entity & {
    air_date: string;
    episode: string;
    characters: string[];
}

export type Location = Entity & {
    type: string;
    dimension: string;
    residents: string[];
}