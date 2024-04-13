import React from "react";
import dataProducts from "../../data";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

import { useState } from "react";

export default function Products() {
  const products = dataProducts();

  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("default");

  const onSortingChange = (event) => {
    setSorting(event.target.value);
  };

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const sortProducts = (sorting, products) => {
    switch (sorting) {
      case "priceAscending":
        return products.sort((a, b) => a.price - b.price);
      case "priceDescending":
        return products.sort((a, b) => b.price - a.price);
      case "nameA":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "nameZ":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const fullSorting = sortProducts(sorting, filteredProducts);
  return (
    <div class="display flex flex-col">
      <div className="mt-9 text-center text-3xl font-bold">
        <h1>Товары</h1>
      </div>
      <div className="display flex justify-center my-9 gap-7 items-center flex-wrap">
        <Search query={query} onChangeQuery={onChangeQuery} />
        <Filter sorting={sorting} onSortingChange={onSortingChange} />
      </div>

      <div className="mx-auto display flex flex-wrap gap-4 justify-center ">
        {fullSorting.length ? (
          fullSorting.map((product) => (
            <NavLink to={`/product/${product.id}`}>
              <a href="#" key={product.id}>
                <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img className="w-80 h-full" src={product.preview} alt="" />
                  </div>
                  <div class="px-5 pb-5">
                    <div className="display flex gap-5 items-center justify-start">
                    <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                      {product.title}
                      
                    </h3>
                    <div class="flex items-center mt-2.5 mb-2">
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      
                    </div>
                    </div>
                    <p className="text-gray-900 dark:text-white mb-2">{product.description}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        {product.price} ₽
                      </span>
                      
                      <a
                        href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Перейти к товару
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </NavLink>
          ))
        ) : (
          <h2>По вашему запросу `{query}` ничего не найдено!</h2>
        )}
      </div>
    </div>
  );
}
