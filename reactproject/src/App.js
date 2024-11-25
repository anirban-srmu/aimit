import React from 'react';
import Greeting from './Greeting';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';

function App(props){
  return (
    <div>
      <Greeting name="AIMIT"/>
      <WelcomeMessage/>
      <Footer/>
    </div>
  ); 
}
export default App;