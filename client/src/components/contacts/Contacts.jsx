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
import "./contacts.scss";

const Contacts = () => {
    return (
        <div className="contactform" id="contactform">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                г. Днепр
        <br />
                <br />
        ул. Харьковская 3
      </div>
        </div>
    );
}

export default Contacts;
