import React from "react";

function List(props) {
   return (
      <>
         <ol>{props.items}</ol>
      </>
   );
}

export default List;
