//import Home from './pages/Home';
//import './App.css';
import React, { useState } from "react";

import nameData from "./data/text";
import styles from "./App.module.css";
import Table from "./components/Table";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  const [names] = useState([...nameData]);
  return (

    <div className= {styles.header}>
  <Topbar />
    <main className={styles.container}>
      <div className={styles.wrapper}>
    
        <Table data={names} rowsPerPage={10} />
      </div>
    </main>
    </div>
  );
};

export default App;