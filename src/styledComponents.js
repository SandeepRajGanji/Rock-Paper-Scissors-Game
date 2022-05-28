import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: -8px;
  background-color: #223a5f;
  color: #ffffff;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1140px;
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
`
export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`
export const Names = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Bree Serif';
  background-color: #ffffff;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
`
export const ScoreCardHeading = styled.h1`
  font-size: 16px;
  margin: 5px 5px 5px 10px;
  width: 50px;
`
export const Score = styled.p`
  color: #223a5f;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: ${props => (props.value === true ? 24 : 16)}px;
`

export const GameContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  max-width: 400px;
  margin-top: 40px;
  align-self: center;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`

export const CustomImage = styled.img`
  width: 120px;
`
export const RulesButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  color: #233a5f;
  font-weight: 600;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 20px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
`
export const ChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ChoiceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 30vh;
  max-width: 400px;
  width: 100%;
  margin-bottom: 30px;
`
export const ResultStatus = styled.p`
  font-size: 20px;
  margin-top: 0px;
`
export const PlayAgainButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`
export const PopUpBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  min-height: 60vh;
  min-width: 60vw;
  @media screen and (max-width: 576px) {
    min-height: 100vh;
    min-width: 100vw;
  }
`
export const RulesImage = styled.img`
  width: 500px;
  @media screen and (max-width: 576px) {
    width: 350px;
  }
`
export const PopUpContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const GameItem = styled.li`
  width: 150px;
  margin-bottom: 0px;
`
export const GameButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`
