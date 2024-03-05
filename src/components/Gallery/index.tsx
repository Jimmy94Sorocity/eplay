import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/mais_zoom.png'
import play from '../../assets/images/botao_play.png'
import close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/zw47_q9wbBE?si=Tg8fXn6rR79PSFDm'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((midia, index) => (
            <Item key={midia.url}>
              <img
                src={getMediaCover(midia)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(midia)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" />
          </header>
          <img src={spiderman} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
