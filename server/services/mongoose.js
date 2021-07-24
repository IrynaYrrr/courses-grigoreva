import mongoose from 'mongoose';
import config from 'config';

const connect = async () => {
    await mongoose.connect(config.get('mongo.url'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
};

export default { connect };
