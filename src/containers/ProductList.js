import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class ProductList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderList() {
        return this.props.products.map((product) => {
            return (
                <div className="item" key={product.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);