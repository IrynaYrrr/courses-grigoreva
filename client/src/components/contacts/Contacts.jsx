import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ViberIcon from './ViberIcon';
import { isMobile } from 'react-device-detect';
import "./contacts.scss";

const useStyles = makeStyles({
    facebook: {
        width: "80px",
        height: "80px",
        backgroundColor: "#0d47a1",
        color: "white",
        "&:hover": {
            backgroundColor: '#1565c0',
            color: "white"
        }
    },
    instagram: {
        width: "80px",
        height: "80px",
        backgroundColor: "#f50057",
        color: "white",
        "&:hover": {
            backgroundColor: '#ff4081',
            color: "white"
        }
    },
    linkedin: {
        width: "80px",
        height: "80px",
        backgroundColor: "#1976d2",
        color: "white",
        "&:hover": {
            backgroundColor: '#1e88e5',
            color: "white"
        }
    },
    whatsapp: {
        width: "80px",
        height: "80px",
        backgroundColor: "#64dd17",
        color: "white",
        "&:hover": {
            backgroundColor: '#76ff03',
            color: "white"
        }
    },
    viber: {
        width: "80px",
        height: "80px",
        backgroundColor: "#6a1b9a",
        color: "white",
        "&:hover": {
            backgroundColor: '#8e24aa',
            color: "white"
        }
    },
    telegram: {
        width: "80px",
        height: "80px",
        backgroundColor: "#00b0ff",
        color: "white",
        "&:hover": {
            backgroundColor: '#40c4ff',
            color: "white"
        }
    },
    gmail: {
        width: "80px",
        height: "80px",
        backgroundColor: "#ffab00",
        color: "white",
        "&:hover": {
            backgroundColor: '#ffc400',
            color: "white"
        }
    },
});

const Contacts = () => {

    const classes = useStyles();

    return (
        <div className="contactform" id="contactform">
            <div className="top">
                <iframe
                    title="googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.620887014509!2d35.0479754516061!3d48.4638031362597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3e6b1cf0641%3A0x2e649084b63cfed6!2z0KbQtdC90YLRgCDQvtCx0YPRh9C10L3QuNGPICLQk9Cg0JjQk9Ce0KDQrNCV0JLQkCI!5e0!3m2!1sru!2sua!4v1628706056715!5m2!1sru!2sua"
                    width="100%"
                    height="100%"
                    style={{ border: 0, marginTop: 50, }}
                    allowFullScreen=""
                    loading="lazy" />
            </div>


            <div className="bottom">
                <Fab
                    href="https://www.facebook.com/profile.php?id=100067835085019"
                    target="_blank"
                    className={classes.facebook}
                >
                    <FacebookIcon className="icon" />
                </Fab>

                <Fab
                    href="https://www.instagram.com/grigoreva__lp/"
                    target="_blank"
                    className={classes.instagram}
                >
                    <InstagramIcon className="icon" />
                </Fab>

                <Fab
                    href="https://www.linkedin.com/in/grigorevalp21/"
                    target="_blank"
                    className={classes.linkedin}
                >
                    <LinkedInIcon className="icon" />
                </Fab>

                <Fab
                    href="https://wa.me/380679143119"
                    target="_blank"
                    className={classes.whatsapp}
                >
                    <WhatsAppIcon className="icon" />
                </Fab>

                <Fab
                    href={isMobile ? "viber://add?number=380679143119" : "viber://chat?number=+380679143119"}
                    target="_blank"
                    className={classes.viber}
                >
                    <ViberIcon className="icon" />
                </Fab>

                <Fab
                    href="https://t.me/grigorevalp"
                    target="_blank"
                    className={classes.telegram}
                >
                    <TelegramIcon className="icon" />
                </Fab>

                <Fab
                    href="mailto:grigorevalp21@gmail.com"
                    target="_blank"
                    className={classes.gmail}
                >
                    <MailIcon className="icon" />
                </Fab>
            </div>
        </div>
    );
}

export default Contacts;
