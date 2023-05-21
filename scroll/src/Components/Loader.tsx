import React from 'react'
import loaderStyles from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
        <div className={loaderStyles.spin}></div>
    </div>
  )
}

export default Loader