import React from 'react'

function Header(props) {
    console.warn("Home",props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="add-to-cart">{props.data.length}</span>
                <img src="https://www.pinterest.com/pin/453667362463777725/" />


            </div>
            </div>
    )
}

export default Header