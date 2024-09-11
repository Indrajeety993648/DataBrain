// src/data.js
const products = [
    // Electronics
    { 
      asin: '1', 
      product_title: 'Smartphone X', 
      product_price: '$699.99', 
      product_photo: '/assets/images/product1.jpg',
      product_category: 'Electronics'
    },
    { 
      asin: '2', 
      product_title: 'Wireless Headphones', 
      product_price: '$199.99', 
      product_photo: '/assets/images/product2.jpg',
      product_category: 'Electronics'
    },
    { 
      asin: '3', 
      product_title: 'Gaming Console', 
      product_price: '$499.99', 
      product_photo: '/assets/images/product3.jpg',
      product_category: 'Electronics'
    },
    { 
      asin: '4', 
      product_title: '4K TV', 
      product_price: '$999.99', 
      product_photo: '/assets/images/product4.jpg',
      product_category: 'Electronics'
    },
    { 
      asin: '5', 
      product_title: 'Smartwatch Pro', 
      product_price: '$249.99', 
      product_photo: '/assets/images/product5.jpg',
      product_category: 'Electronics'
    },
    
    // Clothing
    { 
      asin: '6', 
      product_title: 'Designer T-shirt', 
      product_price: '$29.99', 
      product_photo: '/assets/images/product6.jpg',
      product_category: 'Clothing'
    },
    { 
      asin: '7', 
      product_title: 'Casual Shirt', 
      product_price: '$34.99', 
      product_photo: '/assets/images/product7.jpg',
      product_category: 'Clothing'
    },
    { 
      asin: '8', 
      product_title: 'Formal Pants', 
      product_price: '$49.99', 
      product_photo: '/assets/images/product8.jpg',
      product_category: 'Clothing'
    },
    { 
      asin: '9', 
      product_title: 'Summer Dress', 
      product_price: '$39.99', 
      product_photo: '/assets/images/product9.jpg',
      product_category: 'Clothing'
    },
    { 
      asin: '10', 
      product_title: 'Jacket', 
      product_price: '$59.99', 
      product_photo: '/assets/images/product10.jpg',
      product_category: 'Clothing'
    },
  
    // Watches
    { 
      asin: '11', 
      product_title: 'Luxury Watch', 
      product_price: '$499.99', 
      product_photo: '/assets/images/product11.jpg',
      product_category: 'Watches'
    },
    { 
      asin: '12', 
      product_title: 'Sports Watch', 
      product_price: '$129.99', 
      product_photo: '/assets/images/product12.jpg',
      product_category: 'Watches'
    },
    { 
      asin: '13', 
      product_title: 'Smartwatch Basic', 
      product_price: '$89.99', 
      product_photo: '/assets/images/product13.jpg',
      product_category: 'Watches'
    },
    { 
      asin: '14', 
      product_title: 'Classic Watch', 
      product_price: '$79.99', 
      product_photo: '/assets/images/product14.jpg',
      product_category: 'Watches'
    },
    { 
      asin: '15', 
      product_title: 'Vintage Watch', 
      product_price: '$149.99', 
      product_photo: '/assets/images/product15.jpg',
      product_category: 'Watches'
    },
  
    // Jeans
    { 
      asin: '16', 
      product_title: 'Skinny Jeans', 
      product_price: '$39.99', 
      product_photo: '/assets/images/product16.jpg',
      product_category: 'Jeans'
    },
    { 
      asin: '17', 
      product_title: 'Denim Jeans', 
      product_price: '$49.99', 
      product_photo: '/assets/images/product17.jpg',
      product_category: 'Jeans'
    },
    { 
      asin: '18', 
      product_title: 'Ripped Jeans', 
      product_price: '$44.99', 
      product_photo: '/assets/images/product18.jpg',
      product_category: 'Jeans'
    },
    { 
      asin: '19', 
      product_title: 'High-Waist Jeans', 
      product_price: '$34.99', 
      product_photo: '/assets/images/product19.jpg',
      product_category: 'Jeans'
    },
    { 
      asin: '20', 
      product_title: 'Regular Fit Jeans', 
      product_price: '$29.99', 
      product_photo: '/assets/images/product20.jpg',
      product_category: 'Jeans'
    },
  
    // Shoes & Sneakers
    { 
      asin: '21', 
      product_title: 'Running Sneakers', 
      product_price: '$69.99', 
      product_photo: '/assets/images/product21.jpg',
      product_category: 'Shoes & Sneakers'
    },
    { 
      asin: '22', 
      product_title: 'Leather Boots', 
      product_price: '$89.99', 
      product_photo: '/assets/images/product22.jpg',
      product_category: 'Shoes & Sneakers'
    },
    { 
      asin: '23', 
      product_title: 'Casual Sneakers', 
      product_price: '$49.99', 
      product_photo: '/assets/images/product23.jpg',
      product_category: 'Shoes & Sneakers'
    },
    { 
      asin: '24', 
      product_title: 'Formal Shoes', 
      product_price: '$99.99', 
      product_photo: '/assets/images/product24.jpg',
      product_category: 'Shoes & Sneakers'
    },
    { 
      asin: '25', 
      product_title: 'Basketball Shoes', 
      product_price: '$119.99', 
      product_photo: '/assets/images/product25.jpg',
      product_category: 'Shoes & Sneakers'
    },
  
    // Hoodies
    { 
      asin: '26', 
      product_title: 'Graphic Hoodie', 
      product_price: '$39.99', 
      product_photo: '/assets/images/product26.jpg',
      product_category: 'Hoodies'
    },
    { 
      asin: '27', 
      product_title: 'Plain Hoodie', 
      product_price: '$29.99', 
      product_photo: '/assets/images/product27.jpg',
      product_category: 'Hoodies'
    },
    { 
      asin: '28', 
      product_title: 'Zip-Up Hoodie', 
      product_price: '$49.99', 
      product_photo: '/assets/images/product28.jpg',
      product_category: 'Hoodies'
    },
    { 
      asin: '29', 
      product_title: 'Pullover Hoodie', 
      product_price: '$44.99', 
      product_photo: '/assets/images/product29.jpg',
      product_category: 'Hoodies'
    },
    { 
      asin: '30', 
      product_title: 'Sport Hoodie', 
      product_price: '$59.99', 
      product_photo: '/assets/images/product30.jpg',
      product_category: 'Hoodies'
    }
  ];
  
  export default products;
  