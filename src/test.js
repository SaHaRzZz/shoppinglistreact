const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
async function start() {
    await mongoose.connect('mongodb://localhost:27017/products', {useUnifiedTopology: true, useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('connected!');
    })
    
    const productSchema = new mongoose.Schema({
        id: String,
        list: Object
    });
    
    const Product = mongoose.model('Product', productSchema);
    
    const test1 = new Product({list: {"1": 5}});
    
    // await Product.findOneAndUpdate({id: '1c169588-6add-4dc6-89c3-845f6c3f90fc'}, {"list": "yeah"}, {upsert: true}, (err, res) => {
    //     if(err) {
    //         console.log(err);
    //     }else {
    //         console.log(res);
    //     }
    // });
    await Product.find({id: '1c169588-6add-4dc6-89c3-845f6c3f90fc'}, null, null, (err, res) => {
        console.log(res[0].list);
    })
}

start();

// test1.save((err, test1) => {
//     if(err) return console.error(err);
//     console.log(test1.list);
// })

// test1.update({id: '1c169588-6add-4dc6-89c3-845f6c3f90fc'}, {"1": 5});