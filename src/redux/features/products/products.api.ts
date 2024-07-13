/* eslint-disable react-hooks/rules-of-hooks */
import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryParams) => {
        return {
          url: `/products/`,
          method: "GET",
          params: {
            ...queryParams,
          },
        };
      },
      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({ url: `products/${id}` }),
      providesTags: ["product"],
    }),
    checkStockDetails: builder.mutation({
      query: (cartProducts) => {
        return {
          url: `/products/check-stock`,
          method: "POST",
          body: cartProducts,
        };
      },
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
    checkoutProducts: builder.mutation({
      query: (payload) => ({
        url: "/products/checkout",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCheckStockDetailsMutation,
  useCheckoutProductsMutation,
} = productsApi;
