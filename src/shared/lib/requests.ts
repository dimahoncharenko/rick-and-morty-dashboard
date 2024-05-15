import { Character, Episode, Location } from "../types";
import { baseApiUrl } from "./constants";

export const getCharById = async (id: string) => {
    try {
        const query =  await fetch(`${baseApiUrl}/character/${id}`);
        return await query.json() as Character;
    } catch (err) {
        if (err instanceof Error) throw err;
    }
}

export const getEpisodeById = async (id: string) => {
    try {
        const query =  await fetch(`${baseApiUrl}/episode/${id}`);
        return await query.json() as Episode;
    } catch (err) {
        if (err instanceof Error) throw err;
    }
}

export const getLocationById = async (id: string) => {
    try {
        const query =  await fetch(`${baseApiUrl}/location/${id}`);
        return await query.json() as Location;
    } catch (err) {
        if (err instanceof Error) throw err;
    }
}