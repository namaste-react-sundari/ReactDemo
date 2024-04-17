

// we created a root using ReactDOM library, which is the place, where all the react code render.
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Example of an element inside nested elements.
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1 id="heading" xyz="abc">Hello World, using React.</h1>
 *  </div>
 * </div>
 * 
 */
// const header = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World, using React.");
// const child = React.createElement("div",{id:"child"},header);
// const parent = React.createElement("div",{id:"parent"},child);

/**
 * Example of sibling div nodes child1, child2, in a parent div
 * 
 * <div id="root">
 *  <div id="parent">
 *      <div id="child1">
 *          <h1 id="heading1">Heading-1</h1>
 *          <h2 id="heading2">Heading-2</h2>
 *      </div>
 *      <div id="child2">
 *          <h1 id="heading1">Heading-1</h1>
 *          <h2 id="heading2">Heading-2</h2>
 *      </div>
 *  </div>
 * </div>
 */
const child1_h1 = React.createElement("h1",{id:"heading1"},"Heading-1");
const child1_h2 = React.createElement("h2",{id:"heading2"},"Heading-2");
const child1 = React.createElement("div",{id:"child1"},[child1_h1, child1_h2]);

const child2_h1 = React.createElement("h1",{id:"heading1"},"Heading-1");
const child2_h2 = React.createElement("h2",{id:"heading2"},"Heading-2");
const child2 = React.createElement("div",{id:"child2"},[child2_h1, child2_h2]);

const parent = React.createElement("div",{id:"parent"}, [child1,child2]);


root.render(parent);
