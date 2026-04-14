import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Vestuarios = {
  id: number
  nome: string
  preco: number
  categoria: string
  imagem: string
}

type favoritoState = {
  itens: Vestuarios[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Vestuarios>) => {
      const produto = action.payload
      const index = state.itens.findIndex((item) => item.id === produto.id)

      if (index !== -1) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
