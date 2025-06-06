import React from "react";

function ProductCard(props) {
  const { name, image, price, category } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={image}
          alt={name}
          width="180" // 'width' e 'height' como strings para compatibilidade com <img>
          height="180"
          className="card-img-top mx-auto mt-3"
          style={{ objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text text-success fw-bold mt-auto">
            Preço: R$ {price.toFixed(2)}
          </p>
          <p className="card-text text-muted small">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
