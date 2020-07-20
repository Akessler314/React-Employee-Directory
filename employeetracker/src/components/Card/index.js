import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      
    >
      <img className="card-img-top" src= {props.image} alt={`Employee at Kessler Corp: ${props.firstName} ${props.lastName}`}></img>
      <div className="card-body information">
      <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
  <p className ="Card-text">Email: {props.email}</p>
    <p className ="Card-text">Phone: {props.phoneNum}</p>
    <p className ="Card-text">Age: {props.age}</p>
    <p className ="Card-text">SSN: {props.ssn}</p>
      </div>
   
    </div>
  );
}

export default Card;

{/* <div className="card">
<img className="card-img-top" src="..." alt="Card image cap">
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
</div>
</div> */}