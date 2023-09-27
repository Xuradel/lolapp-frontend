import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/user', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      <Nav name={name} setName={setName} />
      <Routes>
        <Route path='/' Component={() => <Home />} />
        <Route path="/login" Component={() => <Login setName={setName}/>} />
        <Route path="/register" Component={() => <Register />} />
      </Routes>

    </>
  );
}

export default App;
