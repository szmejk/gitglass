import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  @media (max-width: 600px) {
    margin-bottom: 12px;
  }
`

export const Input = styled.input`
  border: none;
  margin-left: 18px;
  font-size: 18px;
`

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
`
