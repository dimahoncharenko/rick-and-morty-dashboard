import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BackendResponse, Character, Gender, Status } from "../types";

const baseApiUrl = 'https://rickandmortyapi.com/api';

type CharactersRequest = {
    name?: string;
    status?: Status;
    type?: string;
    gender?: Gender;
}

export const characterApi = createApi({
    reducerPath: "characterApi",
    baseQuery: fetchBaseQuery(),
    tagTypes: ["Character"],
    endpoints: builder => ({
        findMany: builder.query<BackendResponse<Character>, CharactersRequest>({
            query: ({ name, status, type, gender }) => {
                const params = new URLSearchParams();

                if (name) params.append('name', name);
                if (status) params.append('status', status);
                if (type) params.append('type', type);
                if (gender) params.append('gender', gender); 

                return {
                    url: `${baseApiUrl}/character`,
                    params
                }
            },
            providesTags: ["Character"]
        })
    })
})

export const { useFindManyQuery } = characterApi;