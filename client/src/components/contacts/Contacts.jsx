import "./contacts.scss";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contacts = () => {
    return (
        <div className="contactform" id="contactform">
            <div className="left">
                <iframe
                    title="googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.620887014509!2d35.0479754516061!3d48.4638031362597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3e6b1cf0641%3A0x2e649084b63cfed6!2z0KbQtdC90YLRgCDQvtCx0YPRh9C10L3QuNGPICLQk9Cg0JjQk9Ce0KDQrNCV0JLQkCI!5e0!3m2!1sru!2sua!4v1628706056715!5m2!1sru!2sua"
                    width="100%"
                    height="85%"
                    style={{ border: 0, marginTop: 50, }}
                    allowFullScreen=""
                    loading="lazy" />
            </div>
            <div className="right">
                <InstagramIcon className="icon" />
                <span>
                    <a href="https://www.instagram.com/grigoreva__lp/">grigoreva__lp</a>
                </span>
            </div>
        </div>
    );
}

export default Contacts;
