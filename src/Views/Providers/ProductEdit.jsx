import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductEdit = () => {
  // Category Product
  const categoryProduct = [
    {
      id: 1,
      name: "Soccer",
    },
    {
      id: 2,
      name: "Volleyball",
    },
    {
      id: 3,
      name: "Basketball",
    },
    {
      id: 4,
      name: "Tennis",
    },
    {
      id: 5,
      name: "Badminton",
    },
    {
      id: 6,
      name: "Swimming",
    },
    {
      id: 7,
      name: "Gym",
    },
  ];

  const [state, setState] = useState({
    name: "",
    brand: "",
    description: "",
    discount: "",
    price: "",
    stock: "",
  });

  //Define state category variables
  const [categoryShow, setCategoryShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategory] = useState(categoryProduct);
  const [searchValue, setSearchValue] = useState("");

  //Search value variable
  const categorySearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    if (value) {
      let searchValue = allCategories.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(searchValue);
    } else {
      setAllCategory(categoryProduct);
    }
  };

  // Handle Events
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const changeImage = (img, files) => {
    if (files.length > 0) {
      console.log(img);
      console.log(files[0]);
    }
  };

  //   Test Edit Product with State
  useEffect(() => {
    setState({
      name: "Men Shirt",
      brand: "Nike",
      description: "Affordable to wear",
      discount: 10,
      price: 196,
      stock: 20,
    });
    setCategory("Soccer");
    setImageShow([
      "/images/messi.png",
      "/images/messi.png",
      "/images/messi.png",
    ]);
  });

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#25282a] rounded-xl">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[rgb(206,209,212)] text-xl font-bold">
            Edit Product
          </h1>
          <Link
            to="/provider/dashboard/products"
            className="text-[rgb(134,145,156)] font-semibold flex justify-center items-center gap-2"
          >
            <FaEye />
            View Products
          </Link>
        </div>

        {/* Field of Name */}
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[rgb(206,209,212)]">
              <div className="flex flex-col w-full gap-1">
                {/* Fieldset of Product Information */}
                <fieldset className="border border-[#595c5e] w-[700px] rounded-xl px-4 py-3">
                  <legend className="font-bold text-xl text-white">
                    Product Information
                  </legend>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col">
                      <label htmlFor="name">Product</label>
                      <input
                        onChange={inputHandle}
                        value={state.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product Name"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="brand">Brand</label>
                      <input
                        onChange={inputHandle}
                        value={state.brand}
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder="Brand Product"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                  </div>

                  {/* Div of Category - Stock */}
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-1 w-full relative">
                      <label htmlFor="category">Category</label>
                      <input
                        readOnly
                        onClick={() => setCategoryShow(!categoryShow)}
                        value={category}
                        type="text"
                        name="category"
                        id="category"
                        placeholder="--Choose Category--"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                      <div
                        className={`absolute top-[101%] bg-[#25282a] w-full transition-all ${
                          categoryShow ? "scale-100" : "scale-0"
                        }`}
                      >
                        <div className="w-full px-4 py-2 fixed">
                          <input
                            value={searchValue}
                            onChange={categorySearch}
                            className="px-3 py-1 focus:border-[#078ee7] outline-none bg-transparent border border-slate-700 rounded-xl text-white overflow-hidden"
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                        <div className="pt-14"></div>

                        <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                          {allCategories.map((c, i) => (
                            <span
                              className={`px-4 py-2 hover:bg-[#079ee7] hover:text-white hover:shadow-lg w-full cursor-pointer ${
                                category === c.name && "bg-[#090a0a]"
                              }`}
                              onClick={() => {
                                setCategoryShow(false);
                                setCategory(c.name);
                                setSearchValue("");
                                setAllCategory(categoryProduct);
                              }}
                            >
                              {c.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="stock">Stock</label>
                      <input
                        onChange={inputHandle}
                        value={state.brand}
                        type="text"
                        name="stock"
                        id="stock"
                        placeholder="Stock"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col w-full gap-1 mt-3 mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="px-4 py-2 focus:border-[#078ee7] outline-none bg-[#25282a] border border-slate-700 rounded-xl text-white"
                      onChange={inputHandle}
                      value={state.description}
                      cols={10}
                      rows={4}
                      id="description"
                      name="description"
                      placeholder="Description the product"
                    ></textarea>
                  </div>

                  {/* Images of Product */}
                  <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-white mb-2">
                    {imageShow.map((img, index) => (
                      <div>
                        <label htmlFor={index}>
                          <img src={img} alt="" />
                        </label>
                        <input
                          onChange={(e) => changeImage(img, e.target.files)}
                          type="file"
                          className="hidden"
                          id={index}
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>

                {/* Fieldset of Pricing */}
                <fieldset className="border border-[#595c5e] w-[700px] rounded-xl px-4 py-3">
                  <legend className="font-bold text-xl text-white">
                    Pricing
                  </legend>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col">
                      <label htmlFor="name">Price</label>
                      <input
                        onChange={inputHandle}
                        value={state.price}
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="Discount">Discount</label>
                      <input
                        onChange={inputHandle}
                        value={state.discount}
                        type="number"
                        name="discount"
                        id="discount"
                        placeholder="% Discount"
                        className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Button Add */}
                <div className="flex w-[700px] justify-end">
                  <button className="bg-[#377dff] hover:shadow-blue-500/30 hover:shadow-md text-white rounded-xl px-7 py-2 my-2">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
