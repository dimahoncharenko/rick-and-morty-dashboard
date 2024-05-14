import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BackendResponse, Episode } from "../types";
import { baseApiUrl } from "../lib/constants";

type EpisodesRequest = {
  page: number | string;
  name?: string | null;
  episode?: string | null;
};

type EpisodeRequest = {
  id: string;
};

export const episodeApi = createApi({
  reducerPath: "episodeApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Episode"],
  endpoints: (builder) => ({
    findMany: builder.query<BackendResponse<Episode> | null, EpisodesRequest>({
      query: ({ page, name, episode }) => {
        const params = new URLSearchParams({ page: page.toString() });

        if (name) params.append("name", name);
        if (episode) params.append("episode", episode);

        return {
          url: `${baseApiUrl}/episode`,
          params,
        };
      },
      providesTags: ["Episode"],
    }),
    findOne: builder.query<Episode, EpisodeRequest>({
      query: ({ id }) => ({
        url: `${baseApiUrl}/episode/${id}`
      }),
      providesTags: ["Episode"],
    }),
  }),
});

export const { useFindManyQuery, useFindOneQuery } = episodeApi;
