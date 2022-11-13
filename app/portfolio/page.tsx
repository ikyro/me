import { Repositories } from '../../components/Repositories'
import { TextAnimation } from '../../components/TextAnimation'

const Portfolio = () => {
  return (
    <div>
      <TextAnimation />

      {/* @ts-expect-error */}
      <Repositories />
    </div>
  )
}

export default Portfolio
