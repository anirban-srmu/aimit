import React from 'react';
import Greeting from './Greeting';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';
import ClassComponent from './ClassComponent';
import Counter from './Counter';

function App(props){
  return (
    <div>
      <Greeting />
      <ClassComponent message ="This is a class component"/>
      <WelcomeMessage/>
      <Counter/>
      <Footer/>
    </div>
  ); 
}
export default App;