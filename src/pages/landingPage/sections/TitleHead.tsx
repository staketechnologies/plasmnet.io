import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-scroll';
import LockdropPanel from '../../../components/LockdropPanel';
import Grid from '@material-ui/core/Grid';
import { LockdropEnd, LockdropStart } from '../../../database/tokenInfo';

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    btnPrimary: {
        background: 'linear-gradient(45deg, #1d417f 30%, #2e8ec0 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: theme.spacing(4, 0, 0),
    },
    panel: {
        padding: theme.spacing(8, 0, 6),
    },
}));

//todo: add flashy background effects
const TitleHead: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id="title-section">
            <CssBaseline />
            <Container maxWidth="md">
                <br />
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Imagine the internet, <br /> but free from tyranny
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Plasm Network is a blockchain developed from the Substrate framework and a Layer 2 scalable dApp
                    platform that is designed to empower the developers and the users that creates the future
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <LockdropPanel endTime={LockdropEnd} startTime={LockdropStart} />
                        </Grid>
                        <Grid item justify="center">
                            {/* todo: Add Table of contents here */}
                        </Grid>
                    </Grid>

                    <Link className="link" to="ourWork-section" smooth={true} offset={0} duration={900}>
                        <Button variant="contained" color="primary" size="medium" className={classes.btnPrimary}>
                            Learn more
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default TitleHead;
