import React from "react";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <h2>NextJs Spinner Loader - GeeksforGeeks</h2>
      <Audio
        height="80"
        width="80"
        // radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        // wrapperStyle
        // wrapperClass
      />
    </div>
  );
}
