"use client";

const ProductItem = ({ product }) => {
  // console.log("dfg");
  // console.log(product);
  const { id, title, images, description } = product;
  // console.log(images);
  // console.log(images[0]);
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={images[0]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
