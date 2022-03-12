import React, { useState } from "react";
import styles from "../Styles/finalize.module.css";
import Template1 from "../Components/Template1";
import Sidebar from "../Components/Sidebar";
function Finalize() {
  return (
    <div className={styles.outer}>
      <Template1 />

      <Sidebar />
    </div>
  );
}

export default Finalize;
