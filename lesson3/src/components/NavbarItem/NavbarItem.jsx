import React, { Component } from 'react'

import "./NavbarItem.css"

export default class NavbarItem extends Component {
    render() {
        const {data} = this.props
        return (
            <li>
                <a className='navbar__item' href={data.link} key={data.name}>{data.name}</a>
            </li>
        )
    }
}
