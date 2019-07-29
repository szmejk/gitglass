import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #ffffff;
  width: 50%;
  max-width: 800px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`

export const Avatar = styled.img`
  border-radius: 8px;
  width: 260px;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`

export const UserDataSection = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
export const VerticalData = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`
export const Name = styled.h2`
  margin: 16px 0;
  @media (max-width: 1200px) {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 6px;
  }
`

export const Bio = styled.span`
  font-size: 15px;
`
