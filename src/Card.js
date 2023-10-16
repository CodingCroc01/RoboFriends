import React from "react";

const Card = ({ name, email, id }) => {
  // const Card = (props) => { // we would've used props.name, props.email and props.id in the template strings if we used this
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://www.robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
