import axios from "axios"


export const getProductsDataAPI = async (page = 1) => {
    let res = await axios.get(`https://smart-shop-render.onrender.com/products?_page=${page}&_limit=20`);
    return res.data;
}

export const updateAddProductAPI = async (data,change=1) => {
    let res = await axios.patch(`https://smart-shop-render.onrender.com/products/${data.id}`, {
        ...data, isAdded: true, orderedQuantity: data.orderedQuantity+change, avilableQuantity: data.avilableQuantity - change,
    });
    return res.data;
}

export const updateRemoveProductAPI = async (data) => {
    let res = await axios.patch(`https://smart-shop-render.onrender.com/products/${data.id}`, {
        ...data, isAdded: false,  avilableQuantity: data.avilableQuantity + data.orderedQuantity,orderedQuantity: 0,
    });
    return res.data;
}

export const getFilteredData = async (category, maxPrice, order,page) => {
    let url = `https://smart-shop-render.onrender.com/products?_page=${page}&_limit=20&`;
    if (category) {
      url += `category=${category}&`;
    }
    if (maxPrice !== Infinity) {
      url += `price_lte=${maxPrice}&`;
    }
    if (order) {
      url += `_sort=price&_order=${order}&`;
    }
    url = url.slice(0, -1); // remove trailing "&"

    // console.log(url)
  
    let res = await axios.get(url);
    return res.data;
  };
  
