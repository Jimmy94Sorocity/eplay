import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placeholder.it/222x250" />
    <Titulo>nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
      dignissimos totam eos facilis id ullam animi enim, beatae commodi ipsam
      quia, alias tempora quas earum delectus nam harum neque!
    </Descricao>
  </Card>
)

export default Product
