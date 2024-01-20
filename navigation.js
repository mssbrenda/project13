/*
Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
Create a Navigation component that contains links styled like a navbar.
The links don't have to go anywhere.
Put the Navigation component at the top of the page and the LoginForm in the center of the page.


*/


import React from "react";
import ReactDOM  from "react";

export default class Navigation extends React.Component{
  render(){
    return <>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Create Account</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
</ul>
<br></br>
    </>
  }
}