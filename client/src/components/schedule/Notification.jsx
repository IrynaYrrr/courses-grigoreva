import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = ({ open, setOpen }) => {
    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Вашу заявку відправлено. Ми з Вами зв'яжемося.
            </Alert>
        </Snackbar>
    );
}

export default Notification
