import React from "react";
 const Component1 = ({details}) =>{
    const fulltime= details.fulltime;
    return(
        <>
        <div data-testid={`comp-${details.id}`} className=" text-center">
            {fulltime ? <h2 className=" text-success">{details.user}</h2>: <h5>{details.user}</h5>}
        </div>
        </>
    )
 }
 export default Component1