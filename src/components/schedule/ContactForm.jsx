import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MuiPhoneInput from 'material-ui-phone-number';
import { useHttp } from '../../hooks/useHttp';

const useStyles = makeStyles({
    card: {
        // margin: '20px',
        // backgroundColor: '#f2f2f2',
        borderRadius: '20px',
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

const ContactForm = ({ handleClose, setNotificationOpen, courses, course }) => {
    const classes = useStyles();

    const [selectedCourse, setSelectedCourse] = useState(course.name);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const { request } = useHttp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/order', 'POST', { selectedCourse, name, phone, message });
            setNotificationOpen(true);
            handleClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // <Container
        //   maxWidth="lg">

        <Card className={classes.card}>
            <CardContent>

                {/* <Box display="flex" justifyContent="center">
          <Typography variant="h5">Записаться на курс</Typography>
        </Box> */}

                <form
                    className={classes.form}
                    onSubmit={handleSubmit}
                    noValidate
                >

                    <FormControl
                        required
                        className={classes.course}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel id="course-label">Выбрать Курс</InputLabel>
                        <Select
                            label="Выбрать Курс"
                            labelId="course-label"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            {courses.map((c) => <MenuItem key={c.course.name} value={c.course.name}>{c.course.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <TextField
                        label="Фамилия, Имя"
                        required
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <Box display="flex" justifyContent="center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Отправить
                  </Button>
                    </Box>

                </form>

            </CardContent>
        </Card>
        // </Container>
    );
}

export default ContactForm;
