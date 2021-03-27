import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Profile from "./pages/Profile.js";
import Splash from "./pages/Splash.js";
import Details from "./pages/Details.js";
const Main = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Main.js")), 1500);
  });
});

function App({ cart }) {
  const [showModal, setShowModal] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }
  function handleShowModal(event) {
    setShowModal(!showModal);
  }
  React.useEffect(
    function () {
      (async function () {
        const response = await fetch(
          "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              "x-api-key": process.env.REACT_APP_APIKEY,
            },
          }
        );
        const { nodes } = await response.json();
        setItems(nodes);
        const script = document.createElement("script");
        script.src = "/carousel.js";
        script.async = false;
        document.body.appendChild(script);
      })();

      handleOfflineStatus();
      window.addEventListener("online", handleOfflineStatus);
      window.addEventListener("offline", handleOfflineStatus);

      return function cleanup() {
        window.removeEventListener("online", handleOfflineStatus);
        window.removeEventListener("offline", handleOfflineStatus);
      };
    },
    [offlineStatus]
  );
  return (
    <React.Suspense fallback={<Splash />}>
      <Main
        offlineStatus={offlineStatus}
        handleShowModal={handleShowModal}
        showModal={showModal}
        items={items}
        cart={cart}
      />
    </React.Suspense>
  );
}

export default function () {
  const [cart, setCart] = React.useState([]);
  function handleAddToCart(item) {
    const newCart = [{ item, qty: 1 }];
    setCart(newCart);
  }
  return (
    <Router>
      <Route path="/" exact>
        <App cart={cart} />
      </Route>
      <Route path="/profile" exact component={Profile} />
      <Route path="/details/:id" exact>
        <Details handleAddToCart={handleAddToCart} cart={cart} />
      </Route>
    </Router>
  );
}
