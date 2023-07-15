
    const heading = React.createElement("h1",{
        id:"title "
    },"Hello Everyone here we are its my first!!");
    const heading2 = React.createElement("h2",{
        id:"title2 "
    },"Hello Everyone here we are second time what!!");
    console.log(heading)
    const heading3 = React.createElement("h2",null,"!");
    console.log(heading)

    const container = React.createElement("div",{
        id:"container"
    },[heading,heading2])

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(container)
