import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70vw;
  padding: 25px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 8px;
`
export const ReactImage = styled.img`
  width: 350px;
`
export const ReactDescription = styled.p`
  text-align: left;
  font-family: 'Roboto';
  color: #334155;
  font-size: 16px;
`
export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  background-color: #1f81ff;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
`
