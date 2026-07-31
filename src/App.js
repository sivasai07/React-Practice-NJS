import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// const heading = React.createElement(
//   "h1",
//   { id: "h1" },
//   "Hi from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const jsxHeading = (
//     <h1 className="head">
//         Hello world
//         </h1>
// );

// //title component
// const TitleComponent = () => (
//     <h2 className="heading">
//         helloo from title
//     </h2>
// )

// //react component and component composition
// const HeadingComponent = () => (
//     <div>
//         <TitleComponent />
//         <h1 className="heading">helloo from sai</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      children: [
            {
              path: "/",
              element: <Body />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/restaurants/:resId",
              element:<RestaurantMenu />,
            },
      ],
      errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />  );