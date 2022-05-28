import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import {
  AppContainer,
  ResponsiveContainer,
  ScoreCardContainer,
  Names,
  ScoreCardHeading,
  ScoreContainer,
  Score,
  GameContainer,
  CustomImage,
  RulesButton,
  ChoiceCard,
  ResultContainer,
  ChoiceCardContainer,
  ResultStatus,
  PlayAgainButton,
  RulesImage,
  PopUpContainer,
  PopUpBgContainer,
  GameItem,
  GameButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    computerChoice: '',
    gamePlayed: false,
    resultMsg: '',
    computerImageUrl: '',
    userImageUrl: '',
  }

  componentDidMount() {
    this.getComputerChoice()
  }

  getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3 + 1)
    this.setState({
      computerChoice: choicesList[randomChoice].id,
      computerImageUrl: choicesList[randomChoice].imageUrl,
    })
  }

  setRock = () => {
    const {score, computerChoice} = this.state
    let newScore = score
    let result
    const choice = 'ROCK'
    if (choice === computerChoice) {
      result = 'IT IS DRAW'
      newScore = score
    } else if (choice === 'ROCK' && computerChoice === 'PAPER') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'ROCK' && computerChoice === 'SCISSORS') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'ROCK') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'SCISSORS') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'ROCK') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'PAPER') {
      result = 'YOU WON'
      newScore += 1
    }
    const userImageUrl = choicesList.filter(
      eachChoice => eachChoice.id === choice,
    )

    this.setState({
      score: newScore,
      resultMsg: result,
      gamePlayed: true,
      userImageUrl: userImageUrl[0].imageUrl,
    })
  }

  setPaper = () => {
    const {score, computerChoice} = this.state
    let newScore = score
    let result
    const choice = 'PAPER'
    if (choice === computerChoice) {
      result = 'IT IS DRAW'
      newScore = score
    } else if (choice === 'ROCK' && computerChoice === 'PAPER') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'ROCK' && computerChoice === 'SCISSORS') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'ROCK') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'SCISSORS') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'ROCK') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'PAPER') {
      result = 'YOU WON'
      newScore += 1
    }
    const userImageUrl = choicesList.filter(
      eachChoice => eachChoice.id === choice,
    )

    this.setState({
      score: newScore,
      resultMsg: result,
      gamePlayed: true,
      userImageUrl: userImageUrl[0].imageUrl,
    })
  }

  setScissors = () => {
    const {score, computerChoice} = this.state
    let newScore = score
    let result
    const choice = 'SCISSORS'
    if (choice === computerChoice) {
      result = 'IT IS DRAW'
      newScore = score
    } else if (choice === 'ROCK' && computerChoice === 'PAPER') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'ROCK' && computerChoice === 'SCISSORS') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'ROCK') {
      result = 'YOU WON'
      newScore += 1
    } else if (choice === 'PAPER' && computerChoice === 'SCISSORS') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'ROCK') {
      result = 'YOU LOSE'
      newScore -= 1
    } else if (choice === 'SCISSORS' && computerChoice === 'PAPER') {
      result = 'YOU WON'
      newScore += 1
    }
    const userImageUrl = choicesList.filter(
      eachChoice => eachChoice.id === choice,
    )

    this.setState({
      score: newScore,
      resultMsg: result,
      gamePlayed: true,
      userImageUrl: userImageUrl[0].imageUrl,
    })
  }

  gameContainer = () => (
    <GameContainer>
      <GameItem>
        <GameButton data-testid="rockButton" onClick={this.setRock}>
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
          />
        </GameButton>
      </GameItem>
      <GameItem>
        <GameButton data-testid="scissorsButton" onClick={this.setScissors}>
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
          />
        </GameButton>
      </GameItem>
      <GameItem>
        <GameButton data-testid="paperButton" onClick={this.setPaper}>
          <CustomImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="PAPER"
          />
        </GameButton>
      </GameItem>
    </GameContainer>
  )

  playAgain = () => {
    this.setState(
      {
        computerChoice: '',
        gamePlayed: false,
        resultMsg: '',
        userImageUrl: '',
      },
      this.getComputerChoice,
    )
  }

  showResultContainer = () => {
    const {userImageUrl, computerImageUrl, resultMsg} = this.state

    return (
      <ResultContainer>
        <ChoiceCardContainer>
          <ChoiceCard>
            <ScoreCardHeading>YOU</ScoreCardHeading>
            <CustomImage src={userImageUrl} alt="your choice" />
          </ChoiceCard>
          <ChoiceCard>
            <ScoreCardHeading>OPPONENT</ScoreCardHeading>
            <CustomImage src={computerImageUrl} alt="opponent choice" />
          </ChoiceCard>
        </ChoiceCardContainer>
        <ResultStatus>{resultMsg}</ResultStatus>
        <PlayAgainButton onClick={this.playAgain}>PLAY AGAIN</PlayAgainButton>
      </ResultContainer>
    )
  }

  render() {
    const {gamePlayed, score} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreCardContainer>
            <Names Roboto>
              <ScoreCardHeading>ROCK PAPER SCISSORS</ScoreCardHeading>
            </Names>
            <ScoreContainer>
              <Score>Score</Score>
              <Score value>{score}</Score>
            </ScoreContainer>
          </ScoreCardContainer>
          {gamePlayed ? this.showResultContainer() : this.gameContainer()}
          <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
            {close => (
              <PopUpBgContainer>
                <PopUpContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                  <AiOutlineClose size={20} onClick={() => close()} />
                </PopUpContainer>
              </PopUpBgContainer>
            )}
          </Popup>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default App
