import './OrderForm.css';

//Products
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Television', price: 1200 },
    { id: 3, name: 'Phone', price: 600 },
];

//Function for select product
function OrderForm({ setSelectedProduct, setCount, count, selectedProduct }) {
    const handleChange = (e) => {
        const productId = parseInt(e.target.value);
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
        setCount(0);
    };

    //Counter functions
    const addCount = () => { setCount(count + 1); };
    const decreaseCount = () => { setCount(count > 0 ? count - 1 : 0); };

    return (
        <div>
            <h2>Select Product</h2>
            <p>
                Product: {' '}
                <select onChange={handleChange} value={selectedProduct ? selectedProduct.id : ''}>
                    <option value="" disabled>Select...</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.name} ({product.price}€)
                        </option>
                    ))}
                </select><br></br>
                <br></br>
                Quantity: {' '}
                <button onClick={decreaseCount}>-</button>
                {' '}
                <label>{count}</label>
                {' '}
                <button onClick={addCount}>+</button>
            </p>
        </div>
    );
}

export default OrderForm;
