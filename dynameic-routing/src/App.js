import React from "react";
import { BrowserRouter as Router,Routes,Route, Link, useParams } from "react-router-dom";

function App() {
  const items = ['React','Angular','Vue'];

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ItemList items={items}/>}/>
        <Route path="/item/:name" element={<ItemDetails />}/>
      </Routes>
    </Router>
  );
}
function ItemList({ items }){
  return(
    <ul>
      {items.map((item)=>(
        <li key={item}>
          <Link to={`/item/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
function ItemDetails(){
  const {name} = useParams();
  return <h1>Details about {name}</h1>;
}
export default App;
