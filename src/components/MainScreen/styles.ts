import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  background-image: linear-gradient(to bottom, ${Colors.darkBlue}, ${Colors.lightBlue});
`
export const Header = styled.h1`
  margin: 24px auto 0 64px;
  color: #ffffff;
  font-weight: normal;
  font-size: 40px;
  @media (max-width: 900px) {
    margin: 24px auto 0 32px;
  }
  @media (max-width: 600px) {
    margin: 16px auto 0 16px;
  }
`
