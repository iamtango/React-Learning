# React-Learning
cdn links make the project slow

npm use to manage all the package


npm init => create package.json

npm i -D parcel => it is use to install parcel as devdependencies
-D means devdependencies only in the Devlopment Environment
we can install any package without -D that means it for globle Environment
^ (caret) => Auto upgrade to existing version


as soon as any dependencies/devdependencies install then package-lock.json file 
and node_module folder created

npm i react => to install the react 
npm i react-dom => to install the react-dom

npx means it execute

npx parcel index.html => is to run the parcel to the entry point
as soon as hit above command then dist and .parcel-cache folder created
dist folder keep the file minify for us

npx parcel build index.html => is to run the parcel and make the project production build
and it will minifyall the dile into the dist folder


Polyfill =>is nothing but the code which is replacement for the newer version of the code 
(converting the code to the older version of the browser is Called Bable)


## Q: How can u build perfomant web scalable app?
A: There are so many things React optimise do it for us and so many things bundlers gives us
    whole app is the combination of these 2 things.


npm i -D  babel-plugin-transform-remove-console => remove the console.logs 
in the dist folder which help to minify the code
.babelrc is use for babel configuration.

https://legacy.reactjs.org/docs/reconciliation.html

render means updating something into the dom


JSX its use the html inside the js

## Q: what is JSX?
 A: JSX is the html like syntax but it is not html inside js

 jsx use React.createElement behind the scene  JSX => React.createElement => Object =>HTML(DOM)
babel understand JSX

babel is the compiler next generation js 



    // React Compnent
    // Functional  it is NEW
    //  class based component it is OLD

   ## Q: what is functional component 
      A: it is nothing but the function that return some piece of jsx or react element 


Write name of the component start with capital letter.

JSX is very Secure 

nested component is called component composition

JSX can only have one parent so to overcome that React.Fragment 
came into the picture and it is like an Empty Tag 
using React.Fragment is looks so ugly so instead of that write empty <> </>

<React.Fragment> < /React.Fragment> === <></>

*****   Config Driven UI   *****


Virtual DOM is just not the concept of the react but the concept of the Software Engg concept and react also use it

Virtual DOM => Keeping the reperesntetion of the dom with us.

## Q:Why we need Virtual DOM?
   A: It needed for Reconciliation uses diff algo =>it find diff between Trees (it will only reender the specific portion) 

   Key help to react that what need to be Updated


React Fiber is the new Reconciliation Engine   


Every Compnent in react maintains the state and u can put all the variable into the state 

What is state 

## Q:what is useState?
    A: It is use to create a state varibales and it comes form react 
       useState() => it return an array and the first variable of the array is the variable name and second is the function to upadate the variable
       syntax :  
                //local state variable in react
                
                const [variableName, setVariableName] =useState("Search"); //use the text in param 


React says Every time u need ur varibale to be sync with UI Use useState variable. 


## Q:what is React hooks? 
    A: it is nothing but the normal function, the are so many hooks and one of the hook we use is useState hook

