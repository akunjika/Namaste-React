const heading = React.createElement("h1",{id:"heading"},"Hello world from React!"); // createElement(type, props, ...children)
//it is a react element object which becomes html for the browser to understand
/**
 * IMP
 * //so when we are doing react.createelement is not creating some html ,
 *  it is creating an object while it is rendering to a dom it converts into html. 
   IMP
 */
// Parameters: React.createElement() takes three arguments. They are:

// type: the type of the HTML element (h1,p, button, etc).
// props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
// children: anything that needs to be enclosed by that component.


console.log(heading);  // returns object for heading 
//it is a react element object which becomes html for the browser to understand

const root =  ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading); 

// React DOM: React DOM contains the arguments that are necessary to render react elements in the browser.


//ABOVE CODE CAN ALSO BE WRITTEN LIKE THIS  IN React 17 

let demo = React.createElement(
    "h1", { style: { color: "green" } }, "Welcome to GeeksforGeeks"
)
ReactDOM.render(
    demo,
    document.getElementById('root1')
);

//Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
// Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot


// --------------------------------------------------------------------------------------------------



// Nested structure of html inside js 

/**
 * <div id="parent">
 *   <div id= "child">
 *     <h1>I am h1 tag</h1>
 *   <div>
 * </div>
 */

const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
React.createElement("h1",{},"I am h1 tag")
)
);

console.log(parent);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);


//Nested structure of having 2 child inside child div

/**
 * <div id="parent">
 *   <div id= "child">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h1 tag</h2>
 *   <div>
 * </div>
 */

const parent2 = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")] // created array of children to create siblings in one div
)
);

console.log(parent2);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent2);



//Nested structure of having 2 child inside parent div

/**
 * <div id="parent">
 *   <div id= "child1">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h1 tag</h2>
 *   <div>
 * <div id= "child2">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h1 tag</h2>
 *   <div>
 * </div>
 */

//created array of 2 div 
 
const parent3 = React.createElement("div",{id:"parent"},
[
  React.createElement("div",
{id:"child1"},
[React.createElement("h1",{},"I am h1 tag of nested div"),React.createElement("h2",{},"I am h2 tag of nested div")] 
),React.createElement("div",
{id:"child2"},
[React.createElement("h1",{},"I am h1 tag of nested div"),React.createElement("h2",{},"I am h2 tag of nested div")] 
)
]
)

console.log(parent3);
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(parent3);


// --------------------------------------------------------------------------------------------------
