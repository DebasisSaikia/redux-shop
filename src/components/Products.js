import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData } from "../redux/actions/productActions";
import { ProductCard, ProductContainer } from "./productStyles";

const Products = () => {
  //   const [products, setProducts] = useState([]);

  // fetching dummy products
  //   useEffect(() => {
  //     fetch(`https://fakestoreapi.com/products`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data);
  //       });
  //   },[]);

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  const products = useSelector((state) =>{ 
      console.log(state)
      return state.allReducers.products
    });

  return (
    <ProductContainer>
      {products.map((product) => {
        return (
          <ProductCard key={product.id}>
            <div className="img_container">
              <img src={product.image} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="bottom_section">
              <div className="price">Buy @ {product.price}</div>
              <div className="rating">
                {product.rating.rate}/5 rated by {product.rating.count}
              </div>
            </div>
          </ProductCard>
        );
      })}
    </ProductContainer>
  );
};

export default Products;
