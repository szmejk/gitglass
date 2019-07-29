import styled from 'styled-components'

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Header = styled.h3`
  margin: 16px 0 6px 0;
  font-weight: 700;
  font-size: 15px;
  @media (max-width: 1200px) {
    margin-top: 6px;
  }
`
