import {
  PlayAgianButton,
  Image,
  Box,
  ResultContainer,
  Player,
  PlayerTitle,
  ResultTitle,
} from './styledComponents'

const Result = props => {
  const {opponentPlayer, changeStates, yourPlayer, isWon} = props

  const playAgain = () => {
    changeStates()
  }

  return (
    <>
      <Box>
        <ResultContainer>
          <Player>
            <PlayerTitle>YOU</PlayerTitle>
            <Image src={yourPlayer} alt="your choice" />
          </Player>
          <Player>
            <PlayerTitle>OPPONENT</PlayerTitle>
            <Image src={opponentPlayer} alt="opponent choice" />
          </Player>
        </ResultContainer>
        <ResultTitle>{isWon}</ResultTitle>
        <PlayAgianButton type="button" onClick={playAgain}>
          PLAY AGAIN
        </PlayAgianButton>
      </Box>
    </>
  )
}
export default Result
