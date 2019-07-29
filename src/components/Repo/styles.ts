import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 6px;
  @media (max-width: 1200px) {
    margin-bottom: 3px;
  }
`

export const StarCount = styled.div``

export const RepoAnchor = styled.a`
  margin-left: 12px;
  text-decoration: none;
  color: #000;
  font-weight: normal;
  &:hover {
    font-weight: 700;
  }
`
