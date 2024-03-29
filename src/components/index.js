import styled from "styled-components";

export const Header = styled.header`
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 margin: 1%;

 @media (max-width:880px) {

 }

`;

export const Input = styled.input`
        margin-left: 33px; 
        height:33px;
        font-size:18px;
       
        @media (max-width:880px) {
          font-size:12px;
          Width: 78px;
          margin-left: 18px; 
         }
 

       
`;

export const Social = styled.img`
  height: 33px;
  width: 33px;
  position: relative;
  padding-left:33px;
   object-fit: contain;
  `;

  export const Tezos = styled.img`
  height: 33px;
  width: 33px;
  position: relative;
   object-fit: contain;
   @media (max-width:880px) {
    height:23px;
    width:23px;
   }
   
  `;
  export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
 
  `
export const Body = styled.div`
display: flex;
  align-items: center;
  color: black;
 
  flex-direction: column;
  margin-top: 33px;
  font-size: calc(10px + 2vmin);
  justify-content: center;
 width:100vw;
`;

export const Image = styled.img`
  height:108px;
  width: 108px; 
  pointer-events: none;
  @media (max-width:880px) {
   height:66px;
   width:66px;
    font-weight:bold;
  }
`;

export const P = styled.p`
  font-weight:bold;
  font-size:22;
  font- Arapey, serif;
  text-align:center;
`
export const Text = styled.div`
  
margin-left: 11%;
  margin-right: 11%;
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
  margin-left:18px;
  
 
  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
