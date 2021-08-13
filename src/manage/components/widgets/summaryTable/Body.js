import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";





const useStyles = makeStyles((theme) => ({
  btnStyle: {
    backgroundColor: "#03413f",
    border:'1px solid white',
    color: '#FFF',
    fontSize: '15px',
    padding: '4px'     
  } ,
}));

const TableBody = ({value})=> {
  
    return (
            <tbody>
                {value.map((item, index)=>{
                    return(<tr key={index}>
                    <td  style={{width:'60vw', border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:12, height:30}}>{item.title}</td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9,}}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9,}}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                    <td  style={{ border:'1px solid #d1cdc5',borderCollapse:'collapse',fontSize:9, }}> </td>
                </tr>  )
                })}
                                
                
            </tbody>

    );
}
export default TableBody;

