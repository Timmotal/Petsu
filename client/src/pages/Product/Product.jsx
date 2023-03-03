import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';


const Product = () => { 

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // const images = [
  //   "https://images.pexels.com/photos/4685042/pexels-photo-4685042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/4685031/pexels-photo-4685031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/4685034/pexels-photo-4685034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/4685033/pexels-photo-4685033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // ]

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {
        loading ? (
          "loading"
        ) : (
        <>
        <div className="left">
        <div className="images">
          <img 
            src={process.env.REACT_APP_UPLOAD_API_URL + data?.attributes?.img?.data?.attributes?.url} 
            alt="" 
            onClick={(e)=> setSelectedImg("img")} 
          />
          <img 
            src={process.env.REACT_APP_UPLOAD_API_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt="" 
            onClick={(e)=> setSelectedImg("img2")} 
          />
          {/* <img src={images[2]} alt="" onClick={e=> setSelectedImg(2)} />
          <img src={images[3]} alt="" onClick={e=> setSelectedImg(3)} /> */}
        </div>
        <div className="mainImg">
          <img 
            src={process.env.REACT_APP_UPLOAD_API_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} 
            alt="mainImg" 
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add" onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity
          }))}>
            <AddShoppingCartIcon /> ADD TO YOUR CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO YOUR WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
            <span>Vendor: Tom Hilfiger</span>
          </div>
          <hr />
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
        </>
        )
      }
    </div>
  )
}

export default Product