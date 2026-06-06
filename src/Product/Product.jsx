import './Product.css'




function Product({image = 'images/no-image.jpg', price = 0, title: productTitle = 'unknown', count = 0, children}) {
    // console.log(props)

    // let {image, price, title, count} = props
    let title = 'Product Cart'
    return (
        count > 0 &&
                
        <div>
            <h2>{title}</h2>
            <div className="card">
                <img src={image} alt="#" />
                <h1>{productTitle}</h1>
                <p className='price'>{price}$</p>
                <p>it is the best charger in 2026 it is 
                    number one of charger
                </p>
                {children}
                <button>Add to Cart</button>
            </div>
        </div>
        
    )


}


export default Product





//     if (props.price > 0) {
//         return(
//             <div>
//                 <h2>Product cart</h2>
//                 <div className="card">
//                     <img src={props.image} alt="#" />
//                     <h1>{props.title}</h1>
//                     <p className='price'>{props.price}$</p>
//                     <p>it is the best charger in 2026 it is 
//                         number one of charger
//                     </p>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//         )
//     }



