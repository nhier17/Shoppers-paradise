import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import { Items } from "../components";
import { toast } from "sonner";
import { Bars } from "react-loader-spinner";

const ShopCategory = ({ image, category }) => {
    const { getProducts } = useContext(ShopContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const image_url = "https://shoppers-paradise17.onrender.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                toast.error("Error fetching products");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [getProducts]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <img src={image} alt="banner" className="w-full h-auto rounded-md" />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500 text-sm">
                    <span className="font-semibold">Showing 1-12</span> out of 36 products
                </p>
                <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
                    <span>Sort by</span> <IoIosArrowDropdown />
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        category === product.category && (
                            <Items
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                image={image_url + product.image}
                                new_price={product.new_price}
                                old_price={product.old_price}
                            />
                        )
                    ))}
                </div>
            )}
            <div className="flex justify-center items-center mt-8">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default ShopCategory;
