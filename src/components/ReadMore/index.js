import {useState} from 'react'

import {
  Container,
  Heading,
  Description,
  ReactImage,
  ReactDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMoreReadLess, setReadMoreReadLess] = useState(false)

  const onClickBtn = () => {
    setReadMoreReadLess(prevState => !prevState)
  }

  const description = readMoreReadLess
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = readMoreReadLess ? 'Read Less' : 'Read More'

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReactDescription>{description}</ReactDescription>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </Container>
  )
}
export default ReadMore
