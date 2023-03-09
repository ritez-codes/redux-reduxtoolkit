import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, STATUSES } from '../features/products/productSlice'


function Products() {
     const dispatch = useDispatch();
     const { data, status } = useSelector(state => state.products);

     useEffect(() => {
          dispatch(fetchProducts())
     }, [])

     if (status === STATUSES.LOADING) {
          return <div>
               Loading....
          </div>
     }
     if (status === STATUSES.IDLE) {
          return (
               <div>
                    <h1>REDUX THUNK</h1>
                    {
                         data.map((item, index) => {
                              return <div className='item'>
                                   {item.id} - {item.title}
                              </div>
                         })
                    }
               </div>
          )
     }
     if (status === STATUSES.ERROR) {
          return <div>
               Something went Wrong ....
          </div>
     }
}

export default Products
