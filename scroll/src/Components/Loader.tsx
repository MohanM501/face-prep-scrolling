import React from 'react'
import loaderStyles from "./Loader.module.css";

// Loading Indicating purpose

const Loader = () => {
  return (
    <div>
        <div className={loaderStyles.spin}></div>
        <h2>...Loading..</h2>
    </div>
  )
}

export default Loader