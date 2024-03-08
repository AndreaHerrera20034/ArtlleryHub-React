

export const ProductService = {
    getProductsSmall: () => {
        return new Promise((resolve) => {
            const productsData = [
                { id: 1, name: 'Producto 1', price: 100, inventoryStatus: 'INSTOCK', image: 'product1.jpg' },
                { id: 2, name: 'Producto 2', price: 200, inventoryStatus: 'LOWSTOCK', image: 'product2.jpg' },
                // Agrega más productos según sea necesario
            ];
            resolve(productsData);
        });
    }
};