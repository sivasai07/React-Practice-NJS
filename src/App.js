import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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



const Footer = () => {
  return (
    <div className="footer">
      <p>© 2026 Food Ordering App</p>
      <p>Home | Contact | Help</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);