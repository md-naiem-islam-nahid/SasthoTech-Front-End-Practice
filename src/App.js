import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';


import NavBar from './components/NavBar';
import Home from './components/Home';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';

const App = () => {
  return (
    <div className={styles.card}>
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/all-tasks" element={<AllTasks />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;