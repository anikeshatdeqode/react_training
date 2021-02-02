
## Can we write code without JSX?
Yes, we can write. <br/>
It's not necessary to use JSX we can directory use React.createElement method and even JSX code transpile into the createElement one via webpack and babel tools.

## What is the benefit of writing ReactJs code with JSX?
JSX is quite useful when it comes to the development of custom-made components, and makes it easier to convert HTML mockups into ReactElement trees.

## Does Browser understand JSX?
No browser doesn't support JSX. It's not a valid javascipt syntax. It doesn't matches with js grammer but webpack and babel are responsible for transpiling the jsx code into the actual valid javacsript code that browser can understand.

## What would happen if we directly run JSX in Browser?
We used to get invalid token error.

## What is state and why do we use it?
State is what allows you to create components that are dynamic and interactive. We use state just to trigger rerendring of component so we can react to changes made in the state.

## Can we directy modify or update state?
Yes, we can directly modify state as it's just a plain js object but it's not a good prectice to do. The best way to mutate state in using setState method of Component class. Changing state directly will not be going trigger rerendering of the component.

## How do you update a state variable?
The best way to mutate state in using setState method of Component class.

## Can anyone update the state variable?
Yes, anyone who has access of the component instance can modify state directly. And even we can do some sort if magic to make it work in any component.

## Can anyone update the state variable?
The props of a react component is aimed to store values and functions from it's parent component. It's just the pattern, props are immutable. If you want to have a variable that would be mutable, then store it in the state of the component. States are mutable.

## What can we pass in Props?(object, Components, string, functions)
Any data and any kind of object we want it could be component(JSX code), function, ref of any object and any primitive data type.

## What is the use of state variables?? Can’t we use normal variables?
State variable is a special variable used by react component class which is used by setState method present inside component class that has inbuild functionality to mutate the state variable of component and responsible for rerendring of that component so we can reflect the chages made by setState.

## What is the use of props?
props is an special type of property of component and args in functional based component that holds and imutable state of compoennt or some information that component need from it's host component.
It just to store some properties of component and props just a fancy name of properties.

## Is there any other way of passing data between components?
We can pass data through props, children and using state management solution (Redux).

## When to use functional Components?
When we just want to display information coming from host component or just some static content and we don't want to manage any state or there's no need to react to any chnages.

## Are there any advantages or disadvantages of using functional components?
Props: Functional component are much easier to read, less-code, fast and easier to separate container and presentational components
Cons: Don't have state but we can overcome this using react hooks though.

## What are the lifecycle methods of class components and in which order are they called?

### Mounting:
constructor() <br/>
getDerivedStateFromProps()<br/>
render()<br/>
componentDidMount()<br/>

### Updating:
getDerivedStateFromProps()<br/>
shouldComponentUpdate()<br/>
render()<br/>
getSnapshotBeforeUpdate()<br/>
componentDidUpdate()<br/>

### Unmounting:
componentWillUnmount()


## What are keys and why do we use them in lists? 
Keys are just some unique identifier for each item of list, React uses it to prevent from unnecessary rendering of list item. This increases the performance of the list.

## Why does React maintain a Virtual DOM?
React uses virtual DOM to enhance its performance. It uses the observable to detect state and prop changes. React uses an efficient diff algorithm to compare the versions of virtual DOM. It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI
