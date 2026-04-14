import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'

import { adicionar } from '../../store/reducer/carrinho'
import { favoritar } from '../../store/reducer/favoritos'
import { Vestuarios } from '../../store/reducer/carrinho'
import { RootState } from '../../store'

type Props = {
  produto: Vestuarios
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootState) => state.favoritos)
  const estaNosFavoritos = itens.find((p) => p.id === produto.id) !== undefined
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
