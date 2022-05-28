import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameButtons from './GameButtons'
import {
  Container,
  ResultBox,
  Title,
  ScoreButton,
  RuleButton,
  ButtonContainers,
  InnerContainer,
  Span,
  Score,
  PopupContainer,
  RuleImage,
  ClosePopupButton,
  PopupContainerCenter,
} from './styledComponents'
import Result from './Result'

const result = ['none', 'YOU WON', 'YOU LOSE', 'IT IS DRAW']

class Home extends Component {
  state = {
    score: 0,
    showResult: false,
    opponentPlayer: '',
    yourPlayer: '',
    isWon: result[0],
  }

  changeStates = opponentChoice => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
      opponentPlayer: opponentChoice,
    }))
  }

  choiceAndResult = (id, finalResult) => {
    const {choicesList} = this.props

    let image = ''
    if (id === 'ROCK') {
      image = choicesList[0].image
    } else if (id === 'SCISSORS') {
      image = choicesList[1].image
    } else if (id === 'PAPER') {
      image = choicesList[2].image
    }

    if (finalResult === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (finalResult === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (finalResult === 'IT IS DRAW') {
      this.setState(prevState => ({score: prevState.score}))
    }

    this.setState({
      yourPlayer: image,
      isWon: finalResult,
    })
  }

  renderGameContainer = () => {
    const {choicesList} = this.props
    const {showResult} = this.state
    return (
      <ButtonContainers>
        {choicesList.map(each => (
          <GameButtons
            key={each.id}
            id={each.id}
            image={each.image}
            choiceList={choicesList}
            result={result}
            showResult={showResult}
            changeStates={this.changeStates}
            choiceAndResult={this.choiceAndResult}
          />
        ))}
      </ButtonContainers>
    )
  }

  renderResultContainer = () => {
    const {opponentPlayer, yourPlayer, isWon} = this.state
    return (
      <Result
        changeStates={this.changeStates}
        opponentPlayer={opponentPlayer}
        yourPlayer={yourPlayer}
        isWon={isWon}
      />
    )
  }

  render() {
    const {score, showResult} = this.state

    return (
      <Container>
        <InnerContainer>
          <ResultBox>
            <Title>
              Rock <br /> Paper <br /> Scissors
            </Title>
            <ScoreButton>
              <Span>Score</Span> <br />
              <Score>{score}</Score>
            </ScoreButton>
          </ResultBox>
          {showResult
            ? this.renderResultContainer()
            : this.renderGameContainer()}
          <Popup modal trigger={<RuleButton type="button">Rules</RuleButton>}>
            {close => (
              <>
                <PopupContainerCenter>
                  <PopupContainer>
                    <ClosePopupButton type="button" onClick={() => close()}>
                      <RiCloseLine color="black" size={25} />
                    </ClosePopupButton>
                    <RuleImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </PopupContainer>
                </PopupContainerCenter>
              </>
            )}
          </Popup>
        </InnerContainer>
      </Container>
    )
  }
}

export default Home
