import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const spinner = () => (
  <Loader type="ThreeDots" color="#AAA" height={100} width={100} />
);

export default spinner;
