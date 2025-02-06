import React from 'react';
import { useDispatch } from 'react-redux';
import useFetchProducts from '../../hooks/useFetchProducts.ts';
import { StoreContainer, ProductsArray, Product, LoadingOrError } from './styles.js';
import { addToCart } from '../../actions/index.js';

const ProductsList = () => {
    const { products, error, isLoading } = useFetchProducts();
    const dispatch = useDispatch();

    if (isLoading)
        return (
            <LoadingOrError>
                <h2>Loading...................... 🥱</h2>
            </LoadingOrError>
        );
    if (error)
        return (
            <LoadingOrError>
                <h2>There was an error loading the products. 😖</h2>
            </LoadingOrError>
        );

    // Manejar la acción de agregar al carrito
    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }));
    };

    return (
        <StoreContainer>
            <ProductsArray>
                {products.map(product => (
                    <Product key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <figcaption>{product.title}</figcaption>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </Product>
                ))}
            </ProductsArray>
        </StoreContainer>
    );
};

export default ProductsList;