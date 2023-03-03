import React from 'react';
import useFetch from '../../hooks/useFetch';
// import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
// import axios from "axios";

const FeaturedProducts = ({ type, content }) => {

    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "https://images.pexels.com/photos/859195/pexels-photo-859195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Long Sleeve",
    //         isNew: true,
    //         oldPrice: 110,
    //         price: 100,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Coat",
    //         isNew: true,
    //         oldPrice: 210,
    //         price: 200,
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Cardigan",
    //         isNew: true,
    //         oldPrice: 310,
    //         price: 300,
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Pyjamas",
    //         isNew: true,
    //         oldPrice: 410,
    //         price: 400,
    //     },
    //     {
    //         id: 5,
    //         img: "https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Skirt",
    //         isNew: true,
    //         oldPrice: 510,
    //         price: 500,
    //     },
    // ];

    // const [data, setData] = useState([]); // we are refactoring our code base
    // i guess thats why it's good to participate in open source and or get code reviews

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //         const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, 
    //         {
    //             headers: {
    //                 Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    //             }
    //             // this is how we are fetching data using Strapi, without header API wont allow you to fetch data
    //         });

    //         setData(res.data.data)
    //         console.log(res);
    //     } catch (err) {
    //         console.log(err);
    //     }
    //   };
    //   fetchData();
    // }, []);

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
     

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                   {content}
                </p>
            </div>
            <div className="bottom">
                {
                error ?
                "Something is wrong somewhere"
                : 
                loading ?
                "loading " 
                : 
                data?.map((item) => (
                    <Card item={item} key={item.id} />
                ))
                }
            </div>
        </div>

    )
}

export default FeaturedProducts