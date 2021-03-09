import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../Redux/Actions/CartAction';

const Shop = (props) => {
    console.log(props);
    return (
        <div>
            <h1>SHOP</h1>
        {
            props.products.map((product=><Product product={product}></Product>))
        }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps ={
    addToCart:addToCart
}

// const connectToStore = connect(mapStateToProps,mapDispatchToProps);
// connect(mapStateToProps,mapDispatchToProps)(shop);



export default connect(mapStateToProps,mapDispatchToProps)(Shop);