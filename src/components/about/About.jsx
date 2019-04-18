import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {},
  aboutHeader: {
    marginTop: '24px',
  },
});

const About = ({ classes }) => (
  <section className={classes.root} id="about">
    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
          <article className="about__article">
            <Typography variant="h3" className={classes.aboutHeader}>Over Ansa-Techniek</Typography>
            <Typography variant="body1" paragraph>Ansa-Techniek heeft ruim 30 jaar ervaring in het installatie techniek en werkt veel samen met andere ZZPer en wordt vaak ingehuurd door andere installatiebedrijven.</Typography>
            <Typography variant="body1" paragraph>Heeft u een probleem met u elektrische installatie of wil u een aanpassing vanwege een verbouwen of een nieuwe installatie dan bent u bij mij bij het goede adres.</Typography>
            <Typography variant="body1" paragraph>Als een klant contact opneem met Ansa-Techniek vind ik het belangrijk dat hij of zij alle aandacht krijgt en goed geholpen wordt, of het om een kleine of grote klus gaat vindt ik dat de kwaliteit en prijs heel belangrijk en dat wij allebei tevreden zijn.</Typography>
          </article>
      </Grid>
    </Grid>
  </section>
);

About.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(About);
