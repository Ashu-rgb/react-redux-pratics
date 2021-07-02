import React from 'react'

function Home(props) {
    console.warn("Home",props.data)
    return (
        <div>
            
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://unsplash.com/photos/xsGxhtAsfSA" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:"i phone 11"})}>Add To cart</button>

                </div>
            </div>



        </div>






    )
}
export default Home;