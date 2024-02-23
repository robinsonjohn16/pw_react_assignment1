import React from "react";

function Button(props) {
   const onClickFun = () => {
      alert(props.onClick);
   };
   return (
      <>
         <button onClick={onClickFun}>{props.text}</button>
      </>
   );
}

export default Button;
