import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Contact.css'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

export default function SvgMaterialIcons() {
    const classes = useStyles();
  
    return (
      <Grid container wrap="nowrap" spacing={6} className={classes.root} alignItems="center" justify="center">
        <Grid item>
          <Typography align="center">
            お問い合わせ・お仕事のご依頼などはこちらからお願い致します
            <br />
            <EmailIcon fontSize="large" className="v-a-middle"/><span>miki.mori.4or1@gmail.com</span>
          </Typography>
        </Grid>
      </Grid>
    );
  }