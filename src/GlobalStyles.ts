import { createGlobalStyle } from "styled-components";

  export const GlobalStyles=createGlobalStyle<{isDark:boolean}>`
   *{
     margin:0;
     padding:0;
     box-sizing:border-box;
   }
   body{
     height:100vh;
     background-color:${props=>props.isDark?' #060608':'#F4F6F8'};
     font-family: 'Kumbh Sans', sans-serif;
   }
`
