import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Portfolio from "./pages/Portfolio";
import { analytics } from "./lib/firebaseConfig";
import { logEvent } from "firebase/analytics";

function App() {
  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Portfolio />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
