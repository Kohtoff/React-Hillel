import React, { useState, useEffect } from 'react'

import './Header.css'
import NavbarItem from '../NavbarItem/NavbarItem'

export default function Header() {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch("https://www.swapi.tech/api/")
      .then((res) => {
        return res.json();
      })
      .then(({ result }) => {
        result = Object.keys(result).map((item) => ({
          name: item,
          link: result[item],
        }));
        setRoutes(result)
      })
      .catch((err) => console.log(err));
    
    }, [])

    return (
        <header id="header">
        <div className="logo-container">
          <h2>Marketplace</h2>
        </div>
        <nav className="navbar navbar--header">
          <ul className="navbar__list">
            {routes.length > 0 &&
              routes.map((item) => <NavbarItem key={item.name} data={item}></NavbarItem>)}
          </ul>
        </nav>
      </header>
    )
}
