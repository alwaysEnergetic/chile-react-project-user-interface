import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Book from "./book"  
import Classroom from "./classroom"  
import Circular from "./circular"  
import Finance from "./finance"  

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 9,
    height: 9,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
  },
  checkedIcon: {
    backgroundColor: '#7e7e7e',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width:0,
      height: 0,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#7e7e7e',
    },
  },


});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="primary"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}




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
  const[radioValue, setRadioValule] = React.useState("");

  const tabChange = (event,newValue) => {
    setValue(newValue );
    setRadioValule("");

  }
  const handleChange = (event, newValue) => {
    setValue(5);
    setRadioValule(newValue);
  };
  return (
    <div className="flex flex-1 pl-24 pr-28">
      <div className="w-1/7  mt-12 bg-tabBackground rounded-l-special">
          <AntTabs
            value={value}
            orientation={'vertical'}
            onChange={tabChange}
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

      {value===0 && <div className="w-6/7 bg-contentBackground rounded-tl-special rounded-r-special min-w-61"> <Book/> </div>}
      {value===1 && <div className="w-6/7 bg-contentBackground rounded-tl-special rounded-r-special min-w-61"> <Classroom/> </div>}  
      {value===2 && <div className="w-6/7 bg-contentBackground  rounded-tl-special rounded-r-special min-w-61"> <Circular/> </div>}
      {value===3 && <div className="w-6/7 bg-contentBackground  rounded-tl-special rounded-r-special min-w-61"> <Finance/> </div>}

      <div className="w-10 h-10 bg-gray" style={{position:'absolute', bottom:220, right:64}}>
      <FormControl component="fieldset">
          <RadioGroup defaultValue="roles" aria-label="roles" value={radioValue} onChange={handleChange} name="customized-radios">
            <FormControlLabel value="pupil"  control={<StyledRadio />} label={<span style={{ fontSize: '9px', display: "flex", alignItems: "center" }}>ALUMNO </span>}/>
            <FormControlLabel value="admin" control={<StyledRadio />} label={<span style={{ fontSize: '9px', display: "flex", alignItems: "center" }}>ADMINISTRATIVO </span>}/>
            <FormControlLabel value="teacher" control={<StyledRadio />}label={<span style={{ fontSize: '9px', display: "flex", alignItems: "center" }}>PROFESOR </span>}/>
            <FormControlLabel value="attroney" control={<StyledRadio />} label={<span style={{ fontSize: '9px', display: "flex", alignItems: "center" }}>APODERADO </span>}/>
            <FormControlLabel value="external" control={<StyledRadio />} label={<span style={{ fontSize: '9px', display: "flex", alignItems: "center" }}>EXTERNO </span>}/>

          </RadioGroup>
        </FormControl>
      </div>
      
      {radioValue==="pupil" && <div> <PupilContent/> </div>}
      {radioValue==="admin" && <div> admin </div>}
      {radioValue==="teacher" && <div > teacher </div>}
      {radioValue==="attroney" && <div>  attroney </div>}
      {radioValue==="external" && <div> external </div>}



      </div>

  );
}