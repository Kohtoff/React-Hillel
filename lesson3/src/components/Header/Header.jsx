import React, { Component } from "react";

import NavbarItem from "../NavbarItem/NavbarItem";
import './Header.css'

export default class Header extends Component {
  state = {
    routes: [],
  };
  render() {
    const { routes } = this.state;
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
    );
  }

  componentDidMount() {
    //fetch navbar items
    fetch("https://www.swapi.tech/api/")
      .then((res) => {
        return res.json();
      })
      .then(({ result }) => {
        //convert obj to array
        result = Object.keys(result).map((item) => ({
          name: item,
          link: result[item],
        }));
        this.setState({
          routes: result,
        });
      })
      .catch((err) => console.log(err));
  }
}
