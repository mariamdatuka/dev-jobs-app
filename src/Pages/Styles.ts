import styled from "styled-components";
import background from '../assets/background.png'
import searchIcon from '../assets/desktop/icon-search.svg'
import locationIcon from '../assets/desktop/icon-location.svg'

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
