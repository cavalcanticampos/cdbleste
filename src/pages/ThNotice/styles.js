import styled from 'styled-components'
import { tablet } from '../../_breakpoints'

export const Grid = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
  
  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
`

export const BodyNotice = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: justify;
  // padding: 24px;
  
  @media (min-width: ${tablet}) {
    width: 70%;
    padding: 48px;
  }
  
  > div {
    display: flex;
    flex-direction: column;

    @media (min-width: ${tablet}) {
      flex-direction: row;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  min-height: 200px;
  background: #f4f4f4;
  position: relative;
  overflow: hidden;
  font-family: 'Dekar', sans-serif;
  color: #1c3f95;

  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 25%;
    background: #fff;
    transform: rotate(-1.5deg);
    top: -15%;
  }

  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 33%;
    background: #fff;
    transform: rotate(2deg);
    bottom: -15%;
  }
`

export const SocialMedia = styled.span`
  display: flex;
  margin: auto 2px;
  border: solid 2px #777;
  border-radius: 50%;
  padding: 4px;
  
  &:hover {
    cursor: pointer;
    color: rgb(12,51,159);
    border: solid 2px rgb(12,51,159);
  }
`
