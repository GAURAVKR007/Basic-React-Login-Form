import React from "react";
import Logged from "./Logged";
import Form from "./Form";

var logged = false;

// function organise() {
//   if(logged){
//     return <Logged />
//   }else{
//     return <Form />
//   }
// }

function App() {
  return (<div className="container">
     { logged ? <Logged /> : <Form /> } {/*  Ternary Operator */}
    </div>
  );
}

export default App;
