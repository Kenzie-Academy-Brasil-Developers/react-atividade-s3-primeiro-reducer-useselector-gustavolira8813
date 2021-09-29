import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #888;
        }
    h2{
        color: lightgreen;
        font-size: 2.5rem;
        text-transform: capitalize ;
    }
    li{
        list-style: none;
        margin-top: 7px;
        border: 1px solid greenyellow;
        padding: 15px;
        min-width: 70px;
        border-radius: 7px;
    }
    li:hover{
        filter: brightness(1.5);
        color: yellow;
        
    }
.fruits{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 70vh;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyle;
