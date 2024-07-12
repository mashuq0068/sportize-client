import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        const { _id, ...payload } = data;
        return {
          url: `/products/${_id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (_id: string) => ({
        url: `/products/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
