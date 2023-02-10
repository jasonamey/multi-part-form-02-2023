import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

// 84

const GlobalStyles = createGlobalStyle`
  ${normalize}
  :root {   
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: #F8F9FF;
    --light-blue: #EFF5FF;
    --strawberry-red: hsl(354, 84%, 57%);
    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, ul, li, p { 
    margin: 0;
    padding: 0; 
  }
  p { 
    font-size: 16px;
  
  }
`

export default GlobalStyles
