import bannerImg from '../../assets/images/fundo_hogwarts.png'

import { Banner } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>hero</Banner>
)

export default Hero
