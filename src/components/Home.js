import React from "react";

function Home(props) {
    console.warn("Home",props);
    return (
        <div>
            
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
                    <button onClick={()=>props.addToCartHandler({price:1000, name:'I Phone 11'})}>Add To Cart</button>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;