import styled from "styled-components";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import icon from '../../assets/light.png';

interface Props{
  isDark:boolean
}

//SEARCH INPUTS
export const Form=styled.form`
  display:flex;
  align-items:center;
  justify-content:center;
`
export const GridContainer=styled.div<Props>`
  display:grid;
  grid-template-columns:1.5fr 1fr 1fr;
  background-color: ${props => props.isDark ? '#19202D' : '#fff'};
  border-radius:8px;

  &>div:last-child{
    display:flex;
    align-items:center;
    gap:15px;
  }
  @media screen and (max-width:940px){
    grid-template-columns:1fr 1fr 1fr;
    place-items:center;
  }
  @media screen and (max-width:599px){
    display:none;
  }
`
export const GridItem=styled.div`
 position:relative;
 padding:0 10px;

 &:not(:last-child)::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background-color: #ccc;
}
`
export const SearchInput=styled.input<Props>`
  padding:20px 20px 20px 25px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 15px 15px;
  border: none;
  height:50px;
  width:300px;
  background-color: ${props => props.isDark ? '#19202D' : '#fff'};

  &:focus {
  outline: none;
  }
  &::placeholder {
  padding-left:5px;
  font-family: 'Kumbh Sans', sans-serif;
}

@media screen and (max-width:899px){
    width:200px;
 }
@media screen and (max-width:599px){
  background-image:url(${icon});
  width:230px;
  border-radius:8px;
}
`
export const LocationInput=styled.input<Props>`
  padding:20px 20px 20px 25px;
  background-image: url(${locationIcon});
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 14px 18px;
  border: none;
  height:50px;
  width:300px;
  background-color: ${props => props.isDark ? '#19202D' : '#fff'};

  &:focus {
  outline: none;
  }
  &::placeholder {
  padding-left:5px;
  font-family: 'Kumbh Sans', sans-serif;
}

@media screen and (max-width:899px){
    width:200px;
 }
`
export const CheckInput=styled.div<Props>`
 display:flex;
 align-items:flex-start;
 gap:5px;
  & label {
    font-size:14px;
    color: ${props => props.isDark ? '#fff' : '#19202D'};
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

  @media screen and (max-width:899px){
    width:70px;
 }
`
///////////////Mobile
export const Mobile=styled.div`
 @media screen and (min-width:599px){
  display:none;
 }
`