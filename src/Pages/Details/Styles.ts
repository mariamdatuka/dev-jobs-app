import styled from "styled-components";

interface Props{
  isDark:boolean
}

export const BasicInfo=styled.div<Props>`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  background-color: ${props => props.isDark ? '#19202D' : '#fff'};
  width:700px;
  height:140px;
  border-radius:6px;
  margin-bottom:30px;
  padding:0 50px;
  
  & h3{
    font-size:22px;
    margin-bottom:10px;
    color:${props=>props.isDark?'#fff':'#19202D'};
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
export const MoreInfo=styled.div<Props>`
  padding:30px 50px;
  background-color: ${props => props.isDark ? '#19202D' : '#fff'};
  border-radius:6px;
  & h5{
    color: #6E8098;
    font-size:14px;
  }
  & h5 span{
    color:#6E8098;
    font-size:14px;
  }
  & h2{
    color:${props=>props.isDark?'#fff':'#19202D'};
    font-size:18px;
  }
  & p{
    font-size:14px;
    color:#5964E0;
  }
  & button{
    border:none;
    border-radius:6px;
    color:#fff;
    font-family:inherit;
    font-size:14px;
    height:40px;
    width:140px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#5964E0;
    cursor:pointer;
  }
`
export const Description=styled.div`
 width:600px;
 color:#6E8098;
 line-height:1.8;
`
export const Requirements=styled.div<Props>`
 width:600px;
 padding-top:30px;
 & p{
  color:${props=>props.isDark?'#fff':'#19202D'};
  font-size:16px;
  margin-bottom:10px;
 }
 & li{
  color:#6E8098;
  font-size:14px;
  line-height:1.8;
 }
`