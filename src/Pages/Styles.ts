import styled from "styled-components";
import background from '../assets/background.png'
import searchIcon from '../assets/desktop/icon-search.svg'
import locationIcon from '../assets/desktop/icon-location.svg'


export const Background=styled.div`
   background-image:url(${background});
   background-position:center;
   width:100%;
   height:100%;
   background-repeat: no-repeat;
   background-size: cover;
   padding:30px 100px;
   position:relative;
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
//SEARCH INPUTS
export const GridContainer=styled.div`
  display:grid;
  grid-template-columns:1.5fr 1fr 1fr;
  background-color:#FFF;
  position:absolute;
`
export const GridItem=styled.div`
 position:relative;
 padding:0 10px;

 &::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background-color: #ccc;
}
`
export const SearchInput=styled.input`
  padding:20px 20px 20px 25px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 15px 15px;
  border: none;
  height:50px;
  width:300px;

  &:focus {
  outline: none;
  }
  &::placeholder {
  padding-left:5px;
  font-family: 'Kumbh Sans', sans-serif;
}
`
export const LocationInput=styled.input`
  padding:20px 20px 20px 25px;
  background-image: url(${locationIcon});
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 14px 18px;
  border: none;
  height:50px;
  width:300px;

  &:focus {
  outline: none;
  }
  &::placeholder {
  padding-left:5px;
  font-family: 'Kumbh Sans', sans-serif;
}
`
export const CheckInput=styled.div`
 display:flex;
 align-items:center;
 gap:5px;
  & label {
    font-size:14px;
  }
  & input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-radius:2px;
    border: 1px solid #ccc;
    outline: none;
  }
  & input[type="checkbox"]:checked {
  accent-color:#5964E0;
 }
`
export const SearchButton=styled.button`
  border:none;
  width:100px;
  height:40px;
  background-color:#5964E0;
  font-family:inherit;
  border-radius:5px;
  color:#fff;
  cursor:pointer;
  transition: all 0.3s ease-in-out;

  &:hover{
    background-color:#939BF4;
  }
`
