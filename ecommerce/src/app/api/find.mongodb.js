use('nextjs-ecommerce-db');

// db.getCollection('products').find({});

// db.getCollection('cart').find({});

// db.getCollection('cart').find({
//     userId: '3'
// }).toArray();

db.getCollection('products').find({
    name: 'Hat'
}).toArray();

