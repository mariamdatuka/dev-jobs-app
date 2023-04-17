import styled from "styled-components";

interface Props{
   isDark:boolean;
}

export const Fieldset=styled.fieldset<Props>`
 width:300px;
 height:200px;
 padding:20px;
 margin-left:20px;
 margin-top:30px;
 border:none;
 border-radius:8px;
 background-color: ${props => props.isDark ? '#19202D' : '#fff'};

 & img{
    background-color:red;
 }

 & p{
    color:#6E8098;
    font-size:12px;
    opacity:0.7;
 }
 & h5{
    padding-top:20px;
    font-size:12px;
    color: #5964E0;
  }
 & button{
    border:none;
    color:${props=>props.isDark?'#fff':'#6E8098'};
    background:none;
    font-family:inherit;
    font-size:16px;
    cursor:pointer;
    text-align:left;
}
`
export const GridContainer=styled.div`
   display:grid;
   grid-template-columns:repeat(3, 1fr);
   place-items:center;
   @media screen and (max-width:999px){
      grid-template-columns:repeat(2, 1fr);
   }
   @media screen and (max-width:599px){
      grid-template-columns:1fr;
   }
`