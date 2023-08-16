# Jo Dikhta hai Vo Bikta hai
# Q: Why we Use Frameworks
  A: 1. to Write optimized css, 2. it saves time
 
- Why frameworks?

  - optimized css,
  - consistent UI
  - saves time.
  - Eg : MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI

- Can we use more than one framework ?

  - It's all package can use any number of frameworks,
  - But, not consistent way

- Different ways to write css :

  1. **Normal Native CSS** - all components's styles in a single file index.css
  2. **SCSS** - Syntactical CSS - atlast it is converted to css
  3. **Inline CSS** - style attribute - pass object - {{backgroundColor : "red"}}
  4. **Component Library** - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
  5. **CSS Framework** - Tailwind
  6. **Styled Components**: Majorly used in react projects.

- **Important**: In a `system design round of interview`, you always have to discuss that

  - what will you use for styling your components?
  - Now, there are differnet ways, you can style your web apps.
  - But, what way you will choose & you have give a a good reason for it.
  - So, you should know what are the pros & cons of using them.
  - Exapmle: what are pros & cons of using `Native CSS` over `SCSS` or `component library`

- Pros & Cons of using Component librery (i.e MaterialUI, Bootstrap, etc)

  - Pros :

    - `consistent UI`: (All the button in your app will look the same now)
    - save time

  - Cons :
    - Bundle size -
    - Loose control over design
    - personal customizition is hard

### Tailwind CSS:

- When? How? & Why? to use it.

- writing css on the go (i.e in the same file )
- reusablity
- less bundle size (minimal css) only includes the css classes that we have used
- Flexible UI (Customizable)

  PROS: Easy to use, More Reuseablitit, code is less, no duplicate css, fast time, easy to debug
  CONS: Heavy Bundle Size

It's comes with some predefined configuration and same need to configure in project. Different Framework or library have it's own configuration like parcels and Angular comes with difference configuration. For Detailed knowladge follow the tailwind documentation.

how to put Tailwind
using cdn links in index.js file


Install Tailwindcss Using Parcel
npm install -D tailwindcss postcss
npx tailwindcss init >> it make tailwind.config.js

In the tailwind.config.js file "content" array is use so that tailwind know that only these extension file be executed

# postcssrc we have to create so that our bundler know that we use tailwind css so it can compile
In short 'it compile Tailwind Css into normal css'

when we write tailwind css we dont write any css in css file just write
@tailwind base;
@tailwind components;
@tailwind utilities;


use extension tailwindcss intellisense

use [] =>Square bracet notesion for the precious or exact value or dynamic value
example: w-[200px]

# -----------------------------------------------------------------------------------

# Data is the New Oil

UI Layer < Data Layer (UI Layer | Data Layer)

# Q: In UI what does data layer consist of ?
  A:It Manges by State and props

#   Q: Diffrence Between State And Props ?
    A: State can be change where Props cannot be change
        State which in the local variable 
        Props are somethings whoes value can be pass from one element component to the another
        Props are kind of local state variable to the parent component
        # Props is something which is recieving inside the component

# PROPS DRILLING => drilling props from top to bottom level

React dev tools extension in chrome
showing whole tree in chrome


accessing parents property into child is called PROPS Drilling
and we can access child property by using custom hooks 

# useContext is the normal hook
# React context is use for piece of data use anywhere in the app and it is normal function
u can create multiple context in the app

Props And state are tied to the compoent but React Context is not tied to the component

<UserContext.Consumer>
<UserContext.Provider>

# React routing also  done with the help of context

#only for debugging
Writing a name to the context provider is good and remove the comfusion if had more context in the app so use
put the .displayName method
ex: userConetxt.displayName = "Name_Which_want_to_display";


