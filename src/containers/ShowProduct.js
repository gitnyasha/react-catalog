import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchProduct } from '../actions';

class ShowProduct extends Component {

    componentWillMount() {
        this.props.fetchProduct(this.props.params.id);
    }

    render() {
        const { product } = this.props;

        if (!product) {
            return <div>Loading...</div>;
        }

        return (
            <div className="card">
                <img src={product.image["url"]} />
                <div className="container">
                    <h4>{product.title}</h4>
                    <p>{product.description.substring(0, 100)}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { product: state.products.product };
}

export default connect(mapStateToProps, { fetchProduct })(ShowProduct);
