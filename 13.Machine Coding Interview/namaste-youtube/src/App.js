import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import WatchPage from "./components/WatchPage";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className=" text-lg">
        <Head />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
