import {Button, Image} from './styledComponents'

const GameButtons = props => {
  const {image, id, result, changeStates, choiceAndResult, choiceList} = props

  const playersChoice = () => {
    const random = Math.floor(Math.random() * 3)
    const imageUrl = choiceList[random].image
    const opponentChoice = choiceList[random].id

    changeStates(imageUrl)

    if (id === 'PAPER' && opponentChoice === 'ROCK') {
      const finalResult = result[1]
      choiceAndResult(id, finalResult)
    } else if (id === 'SCISSORS' && opponentChoice === 'ROCK') {
      const finalResult = result[2]
      choiceAndResult(id, finalResult)
    } else if (id === 'ROCK' && opponentChoice === 'PAPER') {
      const finalResult = result[2]
      choiceAndResult(id, finalResult)
    } else if (id === 'SCISSORS' && opponentChoice === 'PAPER') {
      const finalResult = result[1]
      choiceAndResult(id, finalResult)
    } else if (id === 'ROCK' && opponentChoice === 'SCISSORS') {
      const finalResult = result[1]
      choiceAndResult(id, finalResult)
    } else if (id === 'PAPER' && opponentChoice === 'SCISSORS') {
      const finalResult = result[2]
      choiceAndResult(id, finalResult)
    } else if (id === opponentChoice) {
      const finalResult = result[3]
      choiceAndResult(id, finalResult)
    }
  }

  let testid = 'rockButton'

  if (id === 'ROCK') {
    testid = 'rockButton'
  } else if (id === 'SCISSORS') {
    testid = 'scissorsButton'
  } else if (id === 'PAPER') {
    testid = 'paperButton'
  }

  return (
    <Button type="button" data-testid={testid} onClick={playersChoice}>
      <Image src={image} alt={id} />
    </Button>
  )
}
export default GameButtons
