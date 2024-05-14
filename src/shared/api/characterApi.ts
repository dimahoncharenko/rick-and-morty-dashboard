import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BackendResponse, Character, Gender, Status } from "../types";
import { baseApiUrl } from "../lib/constants";

type CharactersRequest = {
  page: number | string;
  name: string | null;
  status: Status | null;
  type: string | null;
  gender: Gender | null;
};

type CharacterRequest = {
  id: string;
};

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Character"],
  endpoints: (builder) => ({
    findMany: builder.query<BackendResponse<Character> | null, CharactersRequest>({
      query: ({ page, name, status, type, gender }) => {
        const params = new URLSearchParams({ page: page.toString() });

        if (name) params.append("name", name);
        if (status) params.append("status", status);
        if (type) params.append("type", type);
        if (gender) params.append("gender", gender);

        return {
          url: `${baseApiUrl}/character`,
          params,
        };
      },
      providesTags: ["Character"],
    }),
    findOne: builder.query<Character, CharacterRequest>({
      query: ({ id }) => ({
        url: `${baseApiUrl}/character/${id}`
      }),
      providesTags: ["Character"],
    }),
  }),
});

export const { useFindManyQuery, useFindOneQuery } = characterApi;
