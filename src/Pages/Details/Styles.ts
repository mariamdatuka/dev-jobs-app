import styled from "styled-components";

export const BasicInfo=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  background-color:#fff;
  width:700px;
  height:140px;
  border-radius:6px;
  margin-bottom:30px;
  padding:0 50px;
  
  & h3{
    font-size:22px;
  }
  & h4{
    font-size:12px;
    color:#6E8098;
  }
`
export const Wrapper=styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`
export const Button=styled.div`
    border:none;
    border-radius:6px;
    color:#5964E0;
    font-family:inherit;
    font-size:14px;
    height:40px;
    width:140px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f2f2f2;
    cursor:pointer;
`
export const MoreInfo=styled.div`
`
export const Description=styled.p`
 width:700px;
 color:#6E8098;
 line-height:1.8;

`