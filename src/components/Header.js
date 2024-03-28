import React from "react";

function Header(props) {
    console.warn("Header",props);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data}</span>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Header;