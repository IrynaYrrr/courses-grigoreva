import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#15023a',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = forwardRef((props, ref) => {
    return <Slide direction="left" ref={ref} {...props} />;
});

const CourseProgramListItem = ({ name }) => (
    <>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <CheckCircleIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name} />
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
);

const ScheduleProgram = ({ programOpen, setProgramOpen, name, courseProgram }) => {
    const classes = useStyles();

    const handleClose = () => {
        setProgramOpen(false);
    };

    return (
        <Dialog
            fullScreen
            open={programOpen}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Программа обучения {name}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Toolbar>
            </AppBar>

            <List>
                {courseProgram.map((cp) => <CourseProgramListItem name={cp} />)}
            </List>
        </Dialog>
    );
};

export default ScheduleProgram;
