
import React,{useState} from 'react';
import Login from './login';
import HomePage from './HomePage';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };
     
  return (
    <div>
      {isLoggedIn ? <HomePage/>:<Login onLogin={handleLogin}/>}
      
      

    </div>
  );
};


export default App;
