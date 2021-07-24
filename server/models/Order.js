import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    selectedCourse: String,
    name: String,
    phone: String,
    message: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Order', schema, 'orders');
