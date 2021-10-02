import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ContactForm from './ContactForm';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const ScheduleOrder = ({ orderOpen, setOrderOpen, setNotificationOpen, courses, course }) => {
    const handleClose = () => {
        setOrderOpen(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={orderOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Записаться
            </DialogTitle>
            <DialogContent dividers>
                <ContactForm
                    handleClose={handleClose}
                    setNotificationOpen={setNotificationOpen}
                    courses={courses}
                    course={course}
                />
                <br />
                <Typography gutterBottom>
                    {course.proviso0}
                </Typography>
                <Typography gutterBottom>
                    {course.proviso1}
                </Typography>
                <Typography gutterBottom>
                    {course.proviso2}
                </Typography>
                <Typography gutterBottom>
                    {course.proviso3}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default ScheduleOrder;
