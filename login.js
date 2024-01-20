/*
Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
Create a Navigation component that contains links styled like a navbar.
The links don't have to go anywhere.
Put the Navigation component at the top of the page and the LoginForm in the center of the page.


*/
import React from "react";
import ReactDOM from "react-dom";
let e = React.createElement;



export default class LogIn extends React.Component{
 render(){
  return <>
      <h3 id="loginHeader" className="text-center">LOG IN</h3>
      <div className="mb3-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">EMAIL</label>
        <div class="col-sm-10">
          <input type="text" className="form-control-plaintext" id="staticEmail"></input>
        </div>
      </div>
      <div className="mb3-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">PASSWORD</label>
          <div class="col-sm-10">
            <input type="text" className="form-control-plaintext" id="staticEmail"></input>
          </div>
          <button className="btn btn-primary form-control">Log In</button>
        </div>

    </>
 }
}