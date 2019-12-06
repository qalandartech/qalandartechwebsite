import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3} className="service-box">{children}</Box >
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

const ServiceTab = ({value}) => {
  return (

    <div >
    <TabPanel value={value} index={0} >
    Item One
  </TabPanel> 
  <TabPanel value={value} index={1}>
    Item Two
  </TabPanel>
  <TabPanel value={value} index={2}>
    Item Three
  </TabPanel>
  <TabPanel value={value} index={3}>
    Item Four
  </TabPanel>
  <TabPanel value={value} index={4}>
    Item Five
  </TabPanel>

  </div>
  )
}

export default ServiceTab;