import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sportize-server.vercel.app/api/v1/" }),
  tagTypes: ['product'],
  endpoints: () => ({}),
});

export default baseApi;
