import styled from "styled-components";

export const Header = styled.header`
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3%;


`;

export const Input = styled.input`
        margin: 33px; 
        height:33px;
        font-size:18px;
       
`;

export const Social = styled.img`
  height: 33px;
  width: 33px;
  position: relative;
  padding-left:33px;
   object-fit: contain;
  `;

  export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom:33px;
  `
export const Body = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  font-size: calc(10px + 2vmin);
  justify-content: top;
  min-height: calc(100vh - 70px);

`;

export const Image = styled.img`
  height:108px;
  width: 108px; 
  pointer-events: none;
`;

export const P = styled.p`
  font-weight:bold;
  font-size:22;
  font- Arapey, serif;
  text-align:center;
`
export const Text = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  font-size:18px;
  font: Arapey;
  margin-top: 5%;
  pointer-events: none;
`;

export const Footer = styled.footer`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 108px;
`
export const Button = styled.button`
  background-color: white;
  box-shadow: 4px 2px 1px black;
  height: 44px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
 
  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
