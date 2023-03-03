import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from "../../makeRequest/makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {

    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Pyjamas",
    //         desc: "Pyjamas",
    //         isNew: true,
    //         oldPrice: 410,
    //         price: 400,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/2468231/pexels-photo-2468231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Palazo",
    //         isNew: true,
    //         desc: "Pyjamas",
    //         oldPrice: 510,
    //         price: 500,
    //     },
    // ]

    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe(

        'pk_test_51MPT5sGSy9XeknDcFy5DptcuAiM4xEAOT98agnZ1Wu4yW0womV0sEUwxp3DiJRaKLeOaEUg7tHNw5NvBBhWS3D2Z00NEVxlmMk'
        );
         
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            })
            // we can send the customer info like address and email, lama dev says we do not need it
            //   we use strapi dashboard, we don't need to store them

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id, // redirects to success page
            })
        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div className="cart" >
        <h1>Products in your cart</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_API_URL + item.img} alt="item-img" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item?.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div> 
    // <div>My Beautiful Lady,
    //      Warren Buffet, Richard Feynman, Elon Musk, Albert Einstein and Now Timmortal
    //       but you can be different bro
    // </div>
  )
}

export default Cart