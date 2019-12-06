import React,{useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ServiceTab from '../components/Service/ServiceTab';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const Service=()=> {
  //const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="service text-center text-white bg-image">
      <div className="forground-layout">

      
       <h1 className="pt-5">Service</h1>
    <div className="row services">
      <div className="col-mb-3 col-sm-2">
      <AppBar position="" className="coustom-color">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Two" {...a11yProps(3)} />
          <Tab label="Item Three" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <ServiceTab value={value}/>

      </div>
    </div>
    </div>
    </div>
  );
}

export default Service;