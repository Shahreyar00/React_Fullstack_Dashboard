import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: [
        "User",
        "Products",
        "Customers",
        "Transactions",
        "Geography",
        "Sales",
        "Admins",
        "Performance",
        "Dashboard",
    ],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `api/general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: builder.query({
            query: () => "api/client/products",
            providesTags: ["Products"],
        }),
        getCustomers: builder.query({
            query: () => "api/client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: builder.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "api/client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getGeography: builder.query({
            query: () => "api/client/geography",
            providesTags: ["Geography"],
        }),
        getSales: builder.query({
            query: () => "api/sales/sales",
            providesTags: ["Sales"],
        }),
        getAdmins: builder.query({
            query: () => "api/management/admins",
            providesTags: ["Admins"],
        }),
        getUserPerformance: builder.query({
            query: (id) => `api/management/performance/${id}`,
            providesTags: ["Performance"],
        }),
        getDashboard: builder.query({
            query: () => "api/general/dashboard",
            providesTags: ["Dashboard"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = apiSlice;
