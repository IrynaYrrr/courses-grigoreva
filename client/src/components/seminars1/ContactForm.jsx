import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MuiPhoneInput from 'material-ui-phone-number';
import { useHttp } from '../../hooks/useHttp';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    card: {
        borderRadius: '20px',
        maxWidth: '600px',
    },
    form: {
        '& .MuiFormControl-root': {
            paddingTop: '5px',
        },
        '& .MuiFormLabel-root': {
            lineHeight: '1.2',
        },
        '& .MuiInputLabel-shrink': {
            paddingTop: '5px',
            paddingLeft: '8px',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
        },
        '& .MuiInputAdornment-root': {
            height: '1em'
        },
        '& .MuiPhoneNumber-flagButton': {
            height: '15px',
            cursor: 'auto'
        },
    },
    course: {
        '& .MuiInputLabel-shrink': {
            paddingLeft: '11px',
        }
    },
    submit: {
        marginTop: '20px',
    }
});

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = () => {
    const classes = useStyles();
    const [selectedCourse, setSelectedCourse] = useState('Запись на семинар «Повышение квалификации бухгалтера»');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState({ open: false, severity: 'success', message: 'This is a success message!' });

    const { request } = useHttp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !phone) {
                return;
            }

            await request(
                '/api/order',
                'POST',
                { selectedCourse, name, phone, message });

            setAlert({ open: true, severity: 'success', message: 'Ваша заявка получена!' });
        } catch (err) {
            console.error(err);
            setAlert({ open: true, severity: 'error', message: 'Ошибка отправки заявки!' });
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(a => {
            return { ...alert, open: false }
        });
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <FormControl
                        required
                        className={classes.course}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        <Typography variant="h5" component="h6">{selectedCourse}</Typography>
                    </FormControl>
                    <TextField
                        label="Фамилия, Имя"
                        required
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)}
                    />
                    <MuiPhoneInput
                        label="Телефон"
                        required
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        defaultCountry={'ua'}
                        onlyCountries={['ua']}
                        countryCodeEditable={false}
                        dropdownClass="MuiPhoneInputDropdown"
                        value={phone}
                        onChange={(e) => setPhone(e)}
                    />
                    <TextField
                        label="Сообщение"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)}
                    />

                    <Box display="flex" justifyContent="center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Отправить
                        </Button>
                    </Box>

                    <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={alert.severity}>
                            {alert.message}
                        </Alert>
                    </Snackbar>

                </form>
            </CardContent>
        </Card>
    );
}

export default ContactForm;
