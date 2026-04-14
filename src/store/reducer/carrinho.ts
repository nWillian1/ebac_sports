import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Vestuarios = {
  id: number
  nome: string
  preco: number
  categoria: string
  imagem: string
}

type carrinhoState = {
  itens: Vestuarios[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Vestuarios>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
