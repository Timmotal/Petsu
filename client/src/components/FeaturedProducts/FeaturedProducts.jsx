import React from 'react';
import useFetch from '../../hooks/useFetch';
// import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
// import axios from "axios";

import WhiteModel1 from "../../assets/WhiteWoman.png";
import WhiteModel2 from "../../assets/WhiteWoman2.png";
import BlackModel1 from "../../assets/BlackWoman.png";
import BlackModel2 from "../../assets/BlackWoman2.png";
import MuslimModel1 from "../../assets/MuslimWoman.png";
import MuslimModel2 from "../../assets/MuslimWoman2.png";
import AsianModel1 from "../../assets/AsianWoman.png";
import AsianModel2 from "../../assets/AsianWoman2.png";

const FeaturedProducts = ({ type, content, loading, error }) => {

    const data = [
        {
            id: 1,
            img: WhiteModel2,
            img2: WhiteModel1,
            title: "Red Gown",
            isNew: true,
            oldPrice: 93,
            price: 73,
        },
        {
            id: 2,
            img: BlackModel1,
            img2: BlackModel2,
            title: "Brown Leather Coat",
            isNew: true,
            oldPrice: 144,
            price: 124,
        },
        {
            id: 3,
            img: MuslimModel1,
            img2: MuslimModel2,
            title: "Green Abayas",
            isNew: true,
            oldPrice: 119,
            price: 99,
        },
        {
            id: 4,
            img: AsianModel1,
            img2: AsianModel2,
            title: "White Ao Dai",
            isNew: true,
            oldPrice: 107,
            price: 87,
        },
        // {
        //     id: 5,
        //     img: "https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&w=1600",
        //     title: "Skirt",
        //     isNew: true,
        //     oldPrice: 510,
        //     price: 500,
        // },
    ];

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

    // const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
     

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