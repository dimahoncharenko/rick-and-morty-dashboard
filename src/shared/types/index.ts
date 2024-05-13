export type BackendResponse<T> = {
    info: {
        count: number;
        pages: number;
        next: null | string;
        prev: null | string;
    },
    results: T[]
} 

export type Status = "Alive" | "Dead" | "Unknown";
export type Gender = "Female" | "Male" | "Genderless" | "Unknown";

export type Character = {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: string;
}