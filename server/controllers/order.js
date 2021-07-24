import Order from '../models/Order';
import tg from '../services/telegram';

const post = async (req, res, next) => {
    try {
        const { selectedCourse, name, phone, message } = req.body;

        const order = new Order({ selectedCourse, name, phone, message });

        console.log(order._doc);

        res.json({ id: 0 });
    }
    catch (err) {
        next(err);
    }
};

export default { post };
