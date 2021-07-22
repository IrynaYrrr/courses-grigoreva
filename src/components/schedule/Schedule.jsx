import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ScheduleItem from './ScheduleItem';

const useStyles = makeStyles({
  container: {
    height: '96vh',
  },
  grid: {
    height: '96vh',
  },
});

const courses = {
  course1: {
    classPrefix: 'card1',
    title: 'Курс (оффлайн)',
    name: '«Бухгалтерский учёт. Налогообложение»',
    group: '4790 грн',
    indiv: '7690 грн',
    month: '1,5 мес или 3 мес',
    hours: '85 ак.ч.',
    discount: 'от 10% до 20%',
    program: 'Программа обучения',
    order: 'Записаться',
  },
  course2: {
    classPrefix: 'card2',
    title: 'Курс (оффлайн)',
    name: '«Специалист отдела кадров»',
    group: '3350 грн',
    indiv: '5150 грн',
    month: '1 месяц',
    hours: '24 ак.ч.',
    discount: 'от 10% до 20%',
    program: 'Программа обучения',
    order: 'Записаться',
  },
  course3: {
    classPrefix: 'card3',
    title: 'Курс (оффлайн)',
    name: '«Физическое лицо предприниматель»',
    group: '3150 грн',
    indiv: '4100 грн',
    month: '1 месяц',
    hours: '28 ак.ч.',
    discount: 'от 10% до 20%',
    program: 'Программа обучения',
    order: 'Записаться',
  },
  course4: {
    classPrefix: 'card4',
    title: 'Семинар (оффлайн)',
    name: '«Техника безопасности и охрана труда»',
    group: '790 грн',
    indiv: '1400 грн',
    month: '1 день',
    hours: '4 ак.ч.',
    discount: '-10% (моим выпускникам)',
    program: 'Программа обучения',
    order: 'Записаться',
  }
}

const Schedule = () => {

  const classes = useStyles();

  return (
    <div
      className="schedule"
      id="schedule">
      <Container
        maxWidth="lg"
        className={classes.container}>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={3}
          className={classes.grid}
        >
          <Grid item>
            <ScheduleItem course={courses.course1} />
          </Grid>
          <Grid item>
            <ScheduleItem course={courses.course2}/>
          </Grid>
          <Grid item>
            <ScheduleItem course={courses.course3}/>
          </Grid>
          <Grid item>
            <ScheduleItem course={courses.course4}/>
          </Grid>
        </ Grid>
      </Container>
    </div>
  );
};

export default Schedule;
