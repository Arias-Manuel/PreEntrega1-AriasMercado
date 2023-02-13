import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../BaseDeDatos/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((response) => {
      setProducts(response);
    });
  }, [categoryId]);

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
