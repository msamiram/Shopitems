const express = require('express');
const app = express();
const port = 3001;

// List of products
let products = [
    { id: 1, name: 'Phone', price: 700, quantity: 15 },
    { id: 2, name: 'Laptop', price: 1200, quantity: 10 },
    { id: 3, name: 'Tablet', price: 500, quantity: 25 },
    { id: 4, name: 'Smart Watch', price: 200, quantity: 30 },
    { id: 5, name: 'TV', price: 1500, quantity: 8 },
    { id: 6, name: 'Headphones', price: 100, quantity: 50 },
    { id: 7, name: 'Camera', price: 800, quantity: 12 },
    { id: 8, name: 'Printer', price: 300, quantity: 20 },
    { id: 9, name: 'Monitor', price: 600, quantity: 18 },
    { id: 10, name: 'Keyboard', price: 50, quantity: 40 }
];

// GET request handler to return all products with pagination
app.get('/products', (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || products.length;

    const paginatedProducts = products.slice(offset, offset + limit);
    res.json({
        total: products.length,
        offset,
        limit,
        data: paginatedProducts
    });
});

// GET request handler to return a specific product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
