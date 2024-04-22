import React from "react"
import ReactDOM from "react-dom/client"

// Creating React Element using Core React.
const heading = React.createElement(
    "h1",{"id":"heading"},"First React Element using Core React."
);

// Creating React Element using JSX.
const jsxHeading = (<h1 id="heading" className="heading">First React Element using JSX</h1>)

// Creating React Element using Funcional Component.
const JsxHeading = ()=> (<h1 id="heading" className="heading">First React Element using JSX</h1>);

// Creating React Functional Component.
const HeadingComponent1 = ()=>{	
	return <h1>This is a Fist Functional Component</h1>;	
}

//or

// Creating React Functional Component using short hand.
const HeadingComponent2 = ()=>  <h1>This is a Short Hand of Functional Component</h1>;	

//or

// Creating React Functional Component using short hand and wrapping with ().
const HeadingComponent3 = ()=> ( 
    <div id="container">
        <HeadingComponent2/>
         <h1 className="heading">            
            This is a Fist Functional Component
         </h1>
    </div>
);	

// Creating React Functional Component using short hand and wrapping with ().
const HeadingComponent4 = ()=> {
    return ( 
    <div id="container">
        <HeadingComponent2/>
         <h1 className="heading">            
            This is a Fist Functional Component
         </h1>
    </div>
    )
};	

// Creating React Functional Component using normal function.
const HeadingComponent5 = function() {
    return (
    <div id="container">
        <HeadingComponent2/>
         <h1 className="heading">            
            This is a Fist Functional Component
         </h1>
    </div>
    )
};	

const rootDiv = ReactDOM.createRoot(document.getElementById("root"));
// rootDiv.render(jsxHeading);

/**
 * Injecting One React Element into another React Element.
 */
const ele = "MK";
const element1 =  <span id="element1">React Element1</span>;
const element2 = (
	<div>
		{element1}
		<h1 id="element2">React Element2: {ele}</h1>
        <HeadingComponent1/>
	</div>
); 

rootDiv.render(element2);

/**
 * This is the way of rendering functional components in ReactDom's root.
 * When ever Babel parsing the render statement, after seeing </> and name which starts with capital letter,
   it then assumes there must be a component existing and convert it to React element.
 */
// rootDiv.render(<HeadingComponent5/>)