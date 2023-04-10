import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ScheduleProgram from './ScheduleProgram';
import ScheduleOrder from './ScheduleOrder';
import Notification from './Notification';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';


const useStyles = makeStyles({
    card: {
        minWidth: 280,
        maxWidth: 290,
        '@media (max-width: 768px)': {
            marginLeft: 25,
        }
    },
    toolbar1: props => props.course.makeStyles.toolbar1,
    toolbar2: props => props.course.makeStyles.toolbar2,
    button1: props => props.course.makeStyles.button1,
    button2: props => props.course.makeStyles.button2,
    typography: props => props.course.makeStyles.typography,
});

const ScheduleItem = (props) => {
    const classes = useStyles(props);

    const [programOpen, setProgramOpen] = useState(false);
    const [orderOpen, setOrderOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);

    const handleClickProgramOpen = () => {
        setProgramOpen(true);
    };

    const handleClickOrderOpen = () => {
        setOrderOpen(true);
    };

    return (
        <Card className={classes.card}>

            <Toolbar className={classes.toolbar1}>
                {props.course?.title}
            </Toolbar>

            <Toolbar className={classes.toolbar2}>
                <Typography className={classes.typography} gutterBottom>
                    {props.course?.name}
                </Typography>
            </Toolbar>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EventIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Старт - ${props.course?.start}`} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <GroupIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`У групі - ${props.course?.group}`} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Індивідуально - ${props.course?.indiv}`} />
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
                <ListItemText primary={props.course?.teacher} />
            </ListItem>

            <CardActions>
                <Button
                    className={classes.button1}
                    onClick={handleClickProgramOpen}
                >
                    {props.course?.program}
                </Button>
            </CardActions>

            <CardActions>
                <Button variant="outlined"
                        className={classes.button2}
                        onClick={handleClickOrderOpen}
                >
                    {props.course?.order}
                </Button>
            </CardActions>

            <ScheduleProgram
                programOpen={programOpen}
                setProgramOpen={setProgramOpen}
                name={props.course?.name}
                courseProgram={props.course?.courseProgram}
            />

            <ScheduleOrder
                orderOpen={orderOpen}
                setOrderOpen={setOrderOpen}
                setNotificationOpen={setNotificationOpen}
                courses={props.courses}
                course={props.course}
            />

            <Notification open={notificationOpen} setOpen={setNotificationOpen} />
        </Card>
    );
};

export default ScheduleItem;
