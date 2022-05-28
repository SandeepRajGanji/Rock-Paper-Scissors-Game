import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #1d3959;
  padding-top: 30px;
`
export const InnerContainer = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`
export const ResultBox = styled.div`
  width: 100%;
  padding: 20px 40px;
  border: 1px solid white;
  border-radius: 20px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  color: white;
  font-family: Roboto;
  font-size: 24px;
`
export const ScoreButton = styled.div`
  padding: 10px;
  height: 100px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
`
export const RuleButton = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 8px;
  border: 1px solid;
  font-family: Roboto;
  font-size: 16px;
  font-weight: solid;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 50px;
`
export const ButtonContainers = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding-top: 13px;
  cursor: pointer;
  align-self: center;

  :hover {
    border-radius: 50%;
    box-shadow: 0 0 50px #ccc;
  }
`
export const Image = styled.img`
  width: 150px;
`
export const Span = styled.p`
  color: #1d3959;
  font-family: Roboto;
  font-size: 24px;
  line-height: 0;
  margin-bottom: 0px;
`
export const Score = styled.p`
  color: #1d3959;
  font-family: Roboto;
  font-size: 22px;
  margin-top: 0px;
`

export const ClosePopupButton = styled.button`
  align-self: flex-end;
  margin-right: 25vw;
  cursor: pointer;
  background-color: white;

  @media screen and (max-width: 576px) {
    margin-right: 10vw;
  }
`
export const PopupContainerCenter = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  margin-top: 70px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupContainer = styled.div`
  background-color: transparent;
  padding: 10px;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 90%;
    align-self: center;
  }
`
export const RuleImage = styled.img`
  width: 100%;
  height: 90%;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const Player = styled.div`
  text-align: center;
`
export const PlayerTitle = styled.h1`
  font-size: 24px;
  color: white;
`
export const ResultTitle = styled.p`
  color: white;
`
export const PlayAgianButton = styled.button`
  width: 150px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid;
  font-family: Roboto;
  font-size: 14px;
  font-weight: solid;
  align-self: center;
`
