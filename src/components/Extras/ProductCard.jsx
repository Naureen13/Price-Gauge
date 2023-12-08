import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles';
   
   const ProductCard = ({data}) => {
    const d= data.name;
    const product_name=d.replace(/\s+/g,"-");
     return(
            <>
                <div className="w-full h-[340px] bg-white  rounded-lg shadow-sm p-3 relative cursor-pointer">
                    <div className="flex justify-end">
                    </div>
                    <Link to={`/product/${product_name}`}>
                      <img src={data.image_Url[0].url} alt="" className='w-full h-[170px] object-contain'/>
                    </Link>
                    <Link to="/">
                    <h5  className={`${styles.shop_name}`}>{data.shop.name}</h5>
                    </Link>
                    <Link to={`/product/${product_name}`}>
                    <h4 className='pb-3 font-[300]'>
                       {data.name.length>40 ? data.name.slice(0,50)+"...": data.name}
                    </h4>

                            <div className="py-2 flex items-center justify-between">
                            <div className="flex">
                            <h5 className={`${styles.productDiscountPrice}`}>
                                {'\u20B9'}
                                {data.price === 0
                                ? data.price
                                : data.discount_price}
                                
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ? data.originalPrice + " $" : null}
                            </h4>
                            </div>
                         </div>
                    </Link>
                    
                        
                </div>
            </>  
             )
   } 
   
   export default ProductCard
   