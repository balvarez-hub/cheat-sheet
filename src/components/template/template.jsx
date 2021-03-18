import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { Header } from '../header';

const Template = ({ list }) => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: '25px' }}>
        {list.map((element, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{element.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{element.details}</AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default Template;
