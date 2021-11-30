import React, {useState} from "react";
import { Body, Button, Header, Input, Image, Social, Text, P, Div, Footer} from "./components";

import ReactPlayer from "react-player"
import { useUserContext } from "./UserContext"
import logo from "./EDALogo.png"
import twitter from './twitter.png';
import insta from './insta.png';
import tezos from './tezoslogo.svg'

 export const App = () => {
  const [amount,setAmount] = useState("")
    const  app = useUserContext();


  const send = () => { 
    app.tezos.wallet
  .transfer({ to: 'tz1PBM5SNXtr1HX5XSEt1aQGmP5CeHeW6FE', amount: Number(amount).toFixed(2)})
  .send()
  .then((op) => {
    console.log(`Hash: ${op.opHash}`);
  
    op.confirmation()
      .then((result) => {
        console.log(result);
        if (result.completed) {
          console.log('Transaction correctly processed!');
        } else {
          console.log('An error has occurred');
        }
      })
      .catch((err) => console.log(err));
  });
  }
  


  
  return (

  <>
   
      <Header>
        
  
      <Image src={logo}/>
      <Div>
     <Social hidden={!app.activeAccount} src={tezos}/>
        <Input
            hidden={!app.activeAccount}
            name="amount"
            type="number"
            step=".01"
          
            required="required"
            placeholder="Amount to Donate?"
            onChange={event => {
              setAmount(event.target.value);
            }}
          />
        <Button onClick={amount>0 && send} hidden={!app.activeAccount}>Donate</Button>
          </Div>
      <Button onClick={() => !app.activeAccount ? app.logIn() : app.logOut()}>
      
          {!app.activeAccount ? "Sync to Donate" :"Sign Out"}</Button>
          
      </Header>
      <Body>
     
      <ReactPlayer url='https://www.youtube.com/watch?v=xn4hdnFLojg'/>
     
            <Text>
            Esquina de Abuela’s is a community space in the Allapattah neighborhood of Miami, Florida where local and international artists come together to create, perform, and exhibit their work.
We want to see artists bloom to their full potential. At EDA, we're not just a hostel, we're not just a gallery, we're not just a venue; we are a family. Everyone who walks through our doors is treated with love and respect. We want every person who comes to EDA to become the best version of themselves by growing together.
            <P>Our Mission</P>
Central to Esquina de Abuela's mission of creating a community space is our reciprocal relationship with other local not-for-profit organizations. We invite our partner organizations to hold events in our space, which builds connection among Miami’s grassroots community groups.
<P>Our Vision</P>
The vision of Esquina de Abuela is rooted in the legacy of Zoila Caridad Guerra, grandmother (Abuela) of Fabian, Esquina de Abuela's founder. Fabian's vision is to tell the story of her bravery and integrity to inspire people to have a more just way of life. Esquina de Abuela strives to be an example for other community spaces where local youth and elders can create and connect with each other and with artists traveling from abroad.
<P>Our Story</P>
During the Cuban Revolution, Fabian's Abuela fought for her country. She showed the same love and devotion to her home here in Allapattah, which was passed on to her grandson Fabian.
            </Text>

        </Body>
        <Footer>
        <a href="https://twitter.com/esquinadeabuela" target="blank" rel="noopener noreferrer"><Social src={twitter} className="twitter" alt="Twitter"/></a>
        <a href="https://twitter.com/esquinadeabuela" target="blank" rel="noopener noreferrer"><Social src={insta} className="instagram" alt="Instagram"/></a>
        </Footer>
 </>
  );
 
}

export default App;
