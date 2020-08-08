import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
    <section>
        <h1>Welcome</h1>
        <p>This is the home page.</p>

        <Link to="/products" className="button">
            View Products
    </Link>
    </section>
)

export default Dashboard