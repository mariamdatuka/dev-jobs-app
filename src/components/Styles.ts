import styled from "styled-components";


export const Fieldset=styled.fieldset`
 width:300px;
 height:200px;
 padding:20px;
 margin-left:20px;
 margin-top:30px;
 background-color:#fff;
 border:none;
 border-radius:8px;

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
    color: #6E8098;
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
`