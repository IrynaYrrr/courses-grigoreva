import React from 'react'
import "./contact.scss"
import { useState } from "react"
import { Typography, Card, CardContent, Grid, TextField, Button } from "@material-ui/core"

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>

            <div className="right">
                <Typography class="typography">
                    Запись на курс
                </Typography>
                <Card class="card">
                    <CardContent>
                        <form class="form">
                            <Grid container spacing={1}>

                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        class="item"
                                        label="Выберите курс"
                                        placeholder="Выберите курс"
                                        variant="outlined"
                                        fullWidth
                                        required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        class="item"
                                        label="Фамилия, имя"
                                        placeholder="Фамилия, имя"
                                        variant="outlined"
                                        fullWidth
                                        required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        class="item"
                                        label="Номер телефона"
                                        type="number"
                                        placeholder="Введите номер телефона"
                                        variant="outlined"
                                        fullWidth
                                        required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        class="item"
                                        label="Введите сообщение"
                                        multiline rows={5}
                                        placeholder="Введите сообщение"
                                        variant="outlined"
                                        fullWidth
                                        required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Button
                                        class="button"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth>
                                        Отправить
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Contact
