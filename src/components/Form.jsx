import React from "react";
import Inputs from "./Inputs";

function Form(params) {
    return  <div className="container">
    <h1>Hello</h1>
    <form className="form">
    <Inputs 
        type="text" 
        placeholder="Username"
    />
    <Inputs 
        type="password" 
        placeholder="Password"
    />
      {/* <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" /> */}
      <button type="submit">Login</button>
    </form>
  </div>
}

export default Form;