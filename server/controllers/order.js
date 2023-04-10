import Order from '../models/Order';
import tg from '../services/telegram';

const post = async (req, res, next) => {
    try {
        const { selectedCourse, name, phone, message } = req.body;

        const order = new Order({ selectedCourse, name, phone, message });
        await order.save();

        await tg.sendMessage(JSON.stringify(
            { selectedCourse, name, phone, message },
            null,
            ' ',
        ));

        res.json({ id: 0 });
    }
    catch (err) {
        next(err);
    }
};

export default { post };
