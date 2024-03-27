import React from "react";

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <h1>Add To Cart</h1>
            </div>
            <h1>Home Componenet</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;