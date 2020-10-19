import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }} />
      </Container>
    </React.Fragment>
  );
}
export default About