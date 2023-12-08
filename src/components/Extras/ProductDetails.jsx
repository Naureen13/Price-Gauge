import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../../styles/styles';
import { backend_url } from '../../backendurl';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = ({ data }) => {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(1);
    const navigate = useNavigate();
    // const d=data.name;
    // const product_name=d.replace(/\s+/g,"-");
    // console.log(d);

    return (
        <div className="bg-white">
            {data ? (
                <div className={`${styles.section} w-[90%]`}>
                    <div className="w-full py-5">
                        <div className="block w-full 800px:flex">
                            <div className="w-full 800px:w-[50%]">
                                <div className='flex'>
                                
                                    <img
                                        src={data.image_Url[select].url}
                                        alt=""
                                        className="w-[50%]"
                                    />
                                    <div className="w-full 800px:w-[50%]">
                                        <div className="w-full 800px:w-[50%]">
                                            <h1 className={`${styles.productTitle}`}>
                                                {data.name}
                                            </h1>
                                            <p>{data.description}</p>
                                            <div className='flex pt-3'>
                                                <h1 className={`${styles.productDiscountPrice}`}>
                                                    {data.price}$
                                                </h1>
                                            </div>

                                            <div className={`${styles.button} mt-6 rounded h-11 flex items-center`}>
                                            <span className='text-white flex items-center'>
                                             Buy here<AiOutlineShoppingCart className='ml-1'/>
                                            </span>
                                            </div>



                                        </div>
                                    </div>


                                </div>

                                <div className="w-full flex">
                                    <div className={`${select === 0 ? "border" : "null"
                                        } cursor-pointer`}>
                                        <img
                                            src={data?.image_Url[0].url}
                                            alt=""
                                            className="h-[200px]"
                                            onClick={() => setSelect(0)}
                                        />
                                    </div>
                                    <div className={`${select === 1 ? "border" : "null"
                                        } cursor-pointer`}>
                                        <img
                                            src={data?.image_Url[1].url}
                                            alt=""
                                            className="h-[200px]"
                                            onClick={() => setSelect(1)}
                                        />
                                    </div>

                                    <br />
                                    <br />
                                </div>
                                <iframe src="https://pricehistoryapp.com/embed/apple-2023-macbook-air-15-inch-m2-chip-with-8-core-cpu-and-10-core-gpu-8gb-unified-memory-256gb-midnight" width="100%" height="500" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
            }
        </div>
    );
};

export default ProductDetails
