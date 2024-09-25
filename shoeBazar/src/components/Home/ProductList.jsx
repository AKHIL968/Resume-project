

import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/productService'
import ProductItem from '../product/ProductItem'
import { useAuth } from '../../hooks/useAuth'
import Pagination from '../common/Pagination'

const ProductList = () => {
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6) // Adjust this number as needed

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const fetchedProducts = await getProducts()
        setProducts(fetchedProducts)
    }

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            {user ? (
                <h3 className='text-blue text-lg text-center'>Our Products</h3>
            ) : (
                <div></div>
            )}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <div className='col-span-full text-center'>
                        <p className='text-gray font-bold text-md'>No products available</p>
                    </div>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(products.length / productsPerPage)}
                onPageChange={paginate}
            />
        </div>
    )
}

export default ProductList