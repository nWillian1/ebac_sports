import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Vestuarios } from '../store/reducer/carrinho'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Vestuarios[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
