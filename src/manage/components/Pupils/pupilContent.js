import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Book from "./book"  
import Classroom from "./classroom"  
import Circular from "./circular"  
import Finance from "./finance"  


const AntTabs = withStyles({
  indicator: {
    backgroundColor: "#f2f0ed"
  },
  
})(Tabs);

const SubTab = withStyles({
  root: {
    fontSize: 18,
    fontWeight: 600,
    textTransform: "none",
    color: '#313131',
    width: "13vw",
    padding: "0px 5px",
    '&:hover':{
    fontWeight: 900,

    }
  },
  selected:{
  
     color:'#313131 !important',
     fontWeight:900,
     backgroundColor:'#d1cdc5',
     borderBottomLeftRadius:20,
     borderTopLeftRadius:20,
  }  
})(Tab);


export default function PupilContent() {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-1 px-24">
      <div className="w-1/7  mt-12 bg-tabBackground rounded-l-special">
          <AntTabs
            value={value}
            orientation={'vertical'}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >

                    <SubTab label="LIBRO DE CLASES" />
                    <SubTab label="SALA DE CLASES"/>
                    <SubTab label="CIRCULARES" />
                    <SubTab label="FINANZAS" />

          </AntTabs> 
      </div>

      {value===0 && <div className="w-6/7 bg-contentBackground rounded-tl-special rounded-r-special"> <Book/> </div>}
      {value===1 && <div className="w-6/7 bg-contentBackground rounded-tl-special rounded-r-special"> <Classroom/> </div>}  
      {value===2 && <div className="w-6/7 bg-contentBackground  rounded-tl-special rounded-r-special"> <Circular/> </div>}
      {value===3 && <div className="w-6/7 bg-contentBackground  rounded-tl-special rounded-r-special"> <Finance/> </div>}

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