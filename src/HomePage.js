import React from 'react';
import './HomePage.css';


const HomePage=()=>{


return(
<div className="navContainer">
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Digitalflake</h2>
      </div>
      <div className="navbar-right">
        <button>Log Out</button>
      </div>
    </nav>

    <aside className="sidebar">
      <ul>
      <li><a href='#Home'>Home</a></li>
      <li><a href='#Category'>Category</a></li>
      <li><a href='#Subcategory'>Subcategory</a></li>
      <li><a href='#Product'>Product</a></li>
      </ul>
    </aside>

</div>



);
}

export default HomePage;