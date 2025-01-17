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
          <Typography variant="h3" className={classes.aboutHeader}>
            Over Ansa-Techniek
          </Typography>
          <Typography variant="body1" paragraph>
            Ansa-Techniek heeft ruim 30 jaar ervaring in de installatietechniek
            en werkt veel samen met andere ZZP'ers. Wij worden veel ingehuurd
            door andere installatiebedrijven. Ansa-techniek beschikt over
            materialen van een hoge kwaliteit om elke klus uit te voeren.
          </Typography>
          <Typography variant="body1" paragraph>
            Heeft u een probleem met uw elektrische installatie, wilt u een
            aanpassing vanwege een verbouwing of heeft u behoefte aan een
            uitbreiding van uw groepenkast? Dan bent u bij Ansa-techniek op het
            goede adres.
          </Typography>
          <Typography variant="body1" paragraph>
            Als een klant contact opneemt met Ansa-Techniek vinden wij het
            belangrijk dat hij of zij alle aandacht krijgt en goed geholpen
            wordt. Of het om een kleine of grote klus gaat, is de prijs- en
            kwaliteitsverhouding zeer belangrijk voor ons en zorgen wij ervoor
            een uitstekende service te verlenen waar wij beiden tevreden over
            kunnen zijn.
          </Typography>
        </article>
      </Grid>
    </Grid>
  </section>
);

About.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(About);
