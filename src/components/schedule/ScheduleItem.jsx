import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles({
    card: {
        minWidth: 280,
        maxWidth: 290,
    },
    card1_toolbar1: {
        backgroundColor: "#9c27b0",
        color: "white",
    },
    card1_toolbar2: {
        backgroundColor: "#6d1b7b",
        color: "white",
        height: "100px",
        marginBottom: "7px",
    },
    card2_toolbar1: {
        backgroundColor: "#33bfff",
        color: "white",
    },
    card2_toolbar2: {
        backgroundColor: "#2196f3",
        color: "white",
        height: "100px",
        marginBottom: "7px",
    },
    card3_toolbar1: {
        backgroundColor: "#ffcf33",
        color: "white",
    },
    card3_toolbar2: {
        backgroundColor: "#fb8c00",
        color: "white",
        height: "100px",
        marginBottom: "7px",
    },
    card4_toolbar1: {
        backgroundColor: "#64dd17",
        color: "white",
    },
    card4_toolbar2: {
        backgroundColor: "#52b202",
        color: "white",
        height: "100px",
        marginBottom: "7px",
    },
    card1_button1: {
        width: "100%",
        backgroundColor: "#9c27b0",
        color: "white",
        '&:hover': {backgroundColor: "#c27dce"},
    },
    card1_button2: {
        width: "100%",
        backgroundColor: "#4a126b",
        color: "white",
        height:"45px",
        '&:hover': {backgroundColor: "#774b91"},
    },
    card2_button1: {
        width: "100%",
        backgroundColor: "#33bfff",
        color: "white",
        '&:hover': {backgroundColor: "#7ccef3"},
    },
    card2_button2: {
        width: "100%",
        backgroundColor: "#115293",
        color: "white",
        height:"45px",
        '&:hover': {backgroundColor: "#3c6fa2"},
    },
    card3_button1: {
        width: "100%",
        backgroundColor: "#ffcf33",
        color: "white",
        '&:hover': {backgroundColor: "#efd068"},
    },
    card3_button2: {
        width: "100%",
        backgroundColor: "#f57c00",
        color: "white",
        height:"45px",
        '&:hover': {backgroundColor: "#ed9943"},
    },
    card4_button1: {
        width: "100%",
        backgroundColor: "#64dd17",
        color: "white",
        '&:hover': {backgroundColor: "#96e961"},
    },
    card4_button2: {
        width: "100%",
        backgroundColor: "#469a10",
        color: "white",
        height:"45px",
        '&:hover': {backgroundColor: "#76b150"},
    },

});

const ScheduleItem = (props) => {

    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>

            <Toolbar className={classes[`${props.course?.classPrefix}_toolbar1`]}  >
                {props.course?.title}
            </Toolbar>

            <Toolbar className={classes[`${props.course?.classPrefix}_toolbar2`]}>
                <Typography variant="h6" gutterBottom>
                    {props.course?.name}
                </Typography>
            </Toolbar>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <GroupIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`В группе - ${props.course?.group}`} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AttachMoneyIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Индивидуально - ${props.course?.indiv}`} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EventIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.course?.month} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccessTimeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.course?.hours} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LoyaltyIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.course?.discount} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Сертификат" />
            </ListItem>

            <CardActions>
                <Button
                    className={classes[`${props.course?.classPrefix}_button1`]}
                >
                    {props.course?.program}
                </Button>
            </CardActions>

            <CardActions >
                <Button variant="outlined"
                    className={classes[`${props.course?.classPrefix}_button2`]}
                >
                    {props.course?.order}
                </Button>
            </CardActions>

        </Card>
    );
};

export default ScheduleItem;
