import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BackendResponse, Location } from "../types";
import { baseApiUrl } from "../lib/constants";

type LocationsRequest = {
  page: number | string;
  name?: string | null;
  type?: string | null;
  dimension?: string | null;
};

type LocationRequest = {
  id: string;
};

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Location"],
  endpoints: (builder) => ({
    findMany: builder.query<BackendResponse<Location> | null, LocationsRequest>({
      query: ({ page, name, dimension, type }) => {
        const params = new URLSearchParams({ page: page.toString() });

        if (name) params.append("name", name);
        if (dimension) params.append("dimension", dimension);
        if (type) params.append("type", type);

        return {
          url: `${baseApiUrl}/location`,
          params,
        };
      },
      providesTags: ["Location"],
    }),
    findOne: builder.query<Location, LocationRequest>({
      query: ({ id }) => ({
        url: `${baseApiUrl}/location/${id}`
      }),
      providesTags: ["Location"],
    }),
  }),
});

export const { useFindManyQuery, useFindOneQuery } = locationApi;
