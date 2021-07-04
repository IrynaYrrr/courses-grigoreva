import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = (props) => {
  // const [open, setOpen] = useState(false);
  // setOpen(props.open);

  const {open, setOpen} = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Ваша заявка отправлена. Мы Вам перезвоним.
        </Alert>
      </Snackbar>
  );
}

export default Notification
