import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import "./List.scss";

const List = ({catId, maxPrice, sort, subCats}) => {

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
    //         img: "https://images.pexels.com/photos/2468231/pexels-photo-2468231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         isNew: true,
    //         oldPrice: 510,
    //         price: 500,
    //     },
    //     {
    //         id: 6,
    //         img: "https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Skirt",
    //         isNew: true,
    //         oldPrice: 510,
    //         price: 500,
    //     },
    // ]

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);

  return (
    <div className="list">
    {
        loading ?
        "loading"
        :
        data?.map((item) => <Card item={item} key={item.id} />)
    }
    </div>
  )
}

export default List