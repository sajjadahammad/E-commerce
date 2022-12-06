import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

function Products() {
  const [products,setProducts] = useState([]);



  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setProducts(items);
    console.log("Products: ",products);
  };


  useEffect(() => {
    fetchData()
  },[]);

  return (
    <>
      {products.map((item) => {
        return (
          <Card
            className="my-3 p-3 rounded"
            key={item.id}
            style={{ height: "450px" }}
          >
            <Card.Img
              src={item.image}
              alt=""
              style={{ height: "255px", width: "255px" }}
              className="container"
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <NavLink>
                <BsHeart size={25} />
              </NavLink>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Products;
