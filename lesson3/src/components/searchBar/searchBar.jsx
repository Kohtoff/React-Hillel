import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const {inputValue, handlerOnChange} = this.props
        const updateInputValue = (value) => {
            handlerOnChange(value)
        }

        return (
            <div>
                <form action="">
                    <label htmlFor="search">
                        Search
                        <input type="text" value={inputValue} onChange={updateInputValue} name="search"/>
                    </label>
                </form>
            </div>
        )
    }
}
