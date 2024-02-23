import React from "react";

function Person(props) {
   return (
      <>
         <p>
            The Name of the Person is {props.name} and Age is {props.age}
         </p>
      </>
   );
}

export default Person;
