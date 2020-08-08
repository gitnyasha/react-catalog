import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions'
import { Product } from '../components/Product'

const ProductList = ({ dispatch, loading, products, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    // Show loading, error, or success state
    const renderProducts = () => {
        if (loading) return <p>Loading products...</p>
        if (hasErrors) return <p>Unable to display products.</p>
        return products.map((product) => <Product key={product.id} product={product} />)
    }

    return (
        <section>
            <h1>Products</h1>
            {renderProducts()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.products.loading,
    products: state.products.products,
    hasErrors: state.products.hasErrors,
})

export default connect(mapStateToProps)(ProductList)