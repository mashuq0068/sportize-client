import baseApi from "@/redux/api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (payload) => ({
        url: "/email",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = contactApi;
