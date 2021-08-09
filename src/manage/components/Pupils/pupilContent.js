import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Book from "./book"  
import Classroom from "./classroom"  
import Circular from "./circular"  
import Finance from "./finance"  

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab:{
    backgroundColor:'#F2F0ED'
  }
});

export default function PupilContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-1 bg-red-500 px-20">
      <div className="w-2/12 bg-blue-500 mt-12 bg-tabBackground">
      <Tabs
        value={value}
        orientation={'vertical'}
        className={classes.tab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" className="bg-tabBackground"/>
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
      </div>

      {value===0 && <div className="bg-green-500 w-10/12"> <Book/> </div>}
      {value===1 && <div> <Classroom/> </div>}
      {value===2 && <div> <Circular/> </div>}
      {value===3 && <div> <Finance/> </div>}
<div className="w-10 h-10 bg-gray" style={{position:'absolute', bottom:200, right:50}}>
    <div>dsfdsfsdfsd</div>
    <div>dsfdsfsdfsd</div>
    <div>dsfdsfsdfsd</div>
    <div>dsfdsfsdfsd</div>
    <div>dsfdsfsdfsd</div>

</div>
    </div>
  );
}