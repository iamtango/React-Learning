
| S.No | Topic <img width="200px">  | Tags                                               | <img width="50px"> Link <img width="50px"> |
| :--: | :------------------------- | :------------------------------------------------- | :----------------------------------------: |
|  1.  | Inception                  | `react` `react-dom` `react element`                |            [ 🔗](1.Inception)             |
|  2.  | Igniting Our App           | `bundler` `parcel`                                 |         [ 🔗](2.Ignition%20our%20App)         |
|  3.  | Laying the foundation      | `jsx` `babel` `components`                         |      [ 🔗](3.Laying%20the%20Foundation)       |
|  4.  | Coding in React            | `Reconciliation` `Virtual DOM` `config driven UI`  |         [ 🔗](4.Talk%20is%20Cheak%20show%20me%20the%20code)          |
|  5.  | Let's get hooked           | `useState` `data binding` `name & default export`  |         [ 🔗](5.Lets%20Get%20Hooked)          |
|  6.  | Exploring the world        | `useEffect` `conditional rendereing` `shimmer`     |       [ 🔗](6.Exploring%20the%20world)        |
|  7.  | Finding the path           | `Routing` `create-router-dom` `Formik`             |         [ 🔗](07-finding-the-path)         |
|  8.  | Let's get Classy           | `class components`                                 |         [ 🔗](8.Lets%20Get%20Classy)          |
<<<<<<< HEAD
|  9.  | Optimizing our App         | `custom hooks` `lazy loading`                      |        [ 🔗](9.Optimizing%20our%20app)        |
=======
|  9.  | Optimizing our App         | `custom hooks` `lazy loading`                      |        [ 🔗](9.Optimizing%20our%20app)        
>>>>>>> b51eea529434a4afb93c7e482f47a0044d20d531
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

=======
# React-Learning Namaste React

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
       useState() => it return an array and the first variable of the array is the variable name and second 
       is the function to upadate the variable
       syntax :  
                //local state variable in react
                
                const [variableName, setVariableName] =useState("Search"); //use the text in param 


React says Every time u need ur varibale to be sync with UI Use useState variable. 


## Q:what is React hooks? 
    A: it is nothing but the normal function, the are so many hooks and one of the hook we use is useState hook

>>>>>>> 0c85810e34b81744975b09d17125031febed1136

In the Reconciliation process there is the Diff algo use in it >>> React Fiber is the new reconciliation algorith   

rerender the component every time when useState Varibale calls

 ## Q: Why React is Fast ?
    A: because of the fast dom manupulation, Whenever any changes happened in the state then its Quickly rerender everything (everytimes).
----------------------------xxxxxxxxx----------------------------


** Monolith  >> whole project deploy uding 1 repo
# Q: Microservice  Advantages
    A: Diffrent projects all together,  Easy to maintain ,Sepration of concern , no need to depend on some specific Lang.

-------------xxxxxxxx-------------

# Hooks start with use
we can use hooks by simply calling them


2. @Hook >> useEffect Hook > it comes from react Lib

    us can call the function by passing another function in to it and another fuction is CALLBACK function

    use can calll the useEffect() by giving 2 params they are CALLBACK and DEPENDENCY ARRAY.
    if we pass anything into the dependency array then everytime the value is use the useEffect is call
   # It is the best place to make API call

    by default it will be call once after components render 

    and if we dont pass any thing in the useEffect hook apart from the callback function it will call every time when the component renders, if we pass dependency arry then it will call only once after render 


    # optional Chaining >> if data  not presend in the perticualr place it help to not get and error

    # Shimmer  effect  which resembless the actual page's UI

    by default the length of the page is 0

 Don't create (Functional) component inside component, otherwise it will call alot of times

 # Never write your useState Inside the IF..Else or also in Forloop

# react gives useState hook to use as local variable inside functional component
# @Never use usestate outside of functional component   

# CDN is the optimalway to store images because it is fast


# createBrowserRouter it comes from  react-router-dom help to create routing{route to perticular page }    it takes some configuration(Array){which is the list of path}


# RouterProvider it comes from  react-router-dom help to create routing 
root.render rnders whatever u gave so if u want to render acccordingly then use RouterProvider 
 Syntax:
        root.render(<RouterProvider router={createBrowserRouter_const_name}>)

        

# SPA - Single Page Application

# There are 2 types of routing
 1.Client-side routing
 2.Server-side routing =>it is a way that all pages comes from server

# Links are the another component comes from  react-router-dom help to create routing 

# if want to route to another page but also wanted SPA then Import Link  from react-router-dom
# and it is alternative of anchor tag, anchor tag reload the whole page while Link does SPA

# at the end Link Compoent uses anchor tag behind the scenes

if u have to create nested route u have to create Outlets it comes from react-router-dom
help to keep changing according to the routes
# all the children written in the createBrowserRouter goes into the outlet

# useParams is another hook it is use to read the dinamic url parameters

----------------XXXXXXXXXXXXX----------------
# Q: * Class Based Components *
   A: It is the easrlier concept it introduce before Hooks and it is very hard to wirte code in early time.
   It is kind of Depricated menthod its alternative is Functional Component

   we can create classbased compoent with the help of class keyword and extends React.Component and React.component comes from react 
   syntax :  class <className> extends React.Component
   most imp part of the classbased compoent is @Render Method it help to return some JSX code just like functional component

   componentDidMount is the method in the classbased component which is the best place to call the API and it will be call after first render
   Constructor >> Render >> componentDidMount

componentDidUpdate it will call after every next render

componentWillUnmount use for "cleanUp"



======================================================================================================

# Building our Own Hooks
it is use for useablability, readablelity, easy to maintain

whenever create any hook always  make new file and file name start with use 

# useState Returns >> target

there is one event listner call Online which help to show the user is offline or not
and is u use any event listner u must need to clean all the event listner because if u use another listner and then back to that normal listner then the new event listner is being call so use "Unmounting"

# Q: How many JS /JSX file parcel produce?
  A: Only one

# One one js file created by bundle but it is bigger projects and has more than 100 components then one-bundle break ur code
so u have to splitting the code or make it in small chunks or "OnDemand Loading"

JUst like useState react also give us lazy which is help for lazy loading it take a function and useful for dynamic import or lazy import
and it is use to create another bundler which help for  code chunking
Syntax: 
        const VARNAME = lazy( ( ) => import("Relative Path") )



react will try to render the things which is not in there so it gives an error so it will suspend the operation
# When u r loading the component on demand react try to sunspend it
Upon OnDemand LOading -> Upon Render -> Suspend Loading
So to avoid the error it uses another component call suspense component and put another component in between
and if the component take long time to load into the app then suspense use props called fallback 
Syntax : 
            <Suspense fallback={<Shimmer />}> 
            <Instamart />
            <Suspense/>

# Never Ever Dynamically load ur component into the the Another Component            
