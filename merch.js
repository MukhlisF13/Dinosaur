import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const merchItems = [
{}


const Merch = () => {
const [cart, setCart] = useState<number[]>([]);

const addToCart = (id: number) => {
  setCart([...cart, id]);
alert(`Added item to cart! Cart now has $(cart.length + 1} items.`);
};
return (
<div>
<h1 className="page-title">Dinosaur Merchandise</h1>

<div style={{ textAlign: `right`, marginBottom: `20px` }}>
<button className="filter-button">
Cart ({cart.length})
</button>
</div>

<div className="merch-container">
{merchItems.map((item) => (
<div key{item.id} className="merch-item">
<div style={{
height: `150px`,
backgroundColor: `#f0f0f0`,
display: `flex`,
alignItems: `center`,
justifyContent: `center`,
borderRadius: `5px`,
marginBottom: `10px`
}}>
<p>[{item.name} Image]</p>
</div>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p className="merch-price">${item.price.toFixed(2)}</p>
<button
className="buy-button"
onClick={() => addToCart(item.id(}
>
Add to Cart
</button>
</div>
      ))}
    </div>
  </div>
  );
};

export default Merch;
