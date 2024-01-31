const fetchProductsDataAsync = async () => {
  let products = [];
  try {
    console.log("fetchinf data");
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await response.json();
    products = await json;
  } catch (error) {
    console.log("error", error);
  }
  return products;
};


export default fetchProductsDataAsync;