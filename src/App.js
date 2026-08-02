import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./components/Error";
import OfflinePage from "./components/OfflinePage";
import Shimmer from "./components/Shimmer";
import useOnlineStatus from "./hooks/useOnlineStatus";

// Lazily loaded routes: their JS chunk is only fetched when the user
// actually navigates there (e.g. clicking a restaurant card), instead
// of being bundled into the initial page load.
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
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


// AppLayout's only job now: decide whether to show the normal app
// (Header + current route + Footer) or the offline page, based on
// connectivity. The actual "am I online" logic lives in useOnlineStatus.
const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="app">
      <Header />
      {isOnline ? <Outlet /> : <OfflinePage />}
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
              element: (
                <Suspense fallback={<Shimmer />}>
                  <About />
                </Suspense>
              ),
            },
            {
              path: "/contact",
              element: (
                <Suspense fallback={<Shimmer />}>
                  <Contact />
                </Suspense>
              ),
            },
            {
              path: "/restaurants/:resId",
              element: (
                <Suspense fallback={<Shimmer />}>
                  <RestaurantMenu />
                </Suspense>
              ),
            },
      ],
      errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />  );