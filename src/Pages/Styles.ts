import styled from "styled-components";
import background from '../assets/background.png'
import searchIcon from '../assets/desktop/icon-search.svg'


export const Background=styled.div`
   background-image:url(${background});
   background-position:center;
   width:100%;
   height:100%;
   background-repeat: no-repeat;
   background-size: cover;
   padding:30px 100px;
`

//Switch Toggle
export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
export const SwitchKnob = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 24px;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.2s;
  
  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 18px;
    background-color: #5964E0;
    border-radius: 50%;
    transition: transform 0.2s;
  }
  
  ${SwitchInput}:checked + & {
    background-color:#fff;
  }
  
  ${SwitchInput}:checked + &::before {
    transform: translateX(26px);
  }
`
export const Container=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:5px;
`
export const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export const GridContainer=styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  background-color:red;
  place-items:center;
`
export const SearchInput=styled.input`
  padding: 20px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 15px 15px;
  border: none;
  height:35px;
`
