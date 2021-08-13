import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Header from './Header'
import TableBody from './Body'




const useStyles = makeStyles((theme) => ({
  btnStyle: {
    backgroundColor: "#03413f",
    border:'1px solid white',
    color: '#FFF',
    fontSize: '15px',
    padding: '4px'     
  } ,
}));

const headerFields = [
    "Calificaciones 1º Básico A - 1er semestre 2021",
    "N1",
    "N2",
    "N3",
    "N4",
    "N5",
    "N6",
    "N7",
    "N8",
    "N9",
    "N10",
    "NE",
    "NF",

]

const professorSummayTable = ({data})=> {
  
    return (
        <div>
            <div>
              <button className="text-xl font-bold mb-2 "> Atrás</button>
            </div>
          
              <div>
                  <Table>
                     <Header fields={headerFields}/>

                    <TableBody value={data}/>
                  </Table>
                </div>
        </div>
    );
}
export default professorSummayTable;

