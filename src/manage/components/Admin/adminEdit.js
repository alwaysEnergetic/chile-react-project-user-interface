import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminRatings from "./adminRatings"; 

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#FFF",
        padding: "0px 50px",
        fontFamily: "Geller",
        height: "5vh",
        display: "flex",
        alignItems: "center",

    },

    tableBoard: {
        backgroundColor: theme.palette.tableBoardColor.main,
        padding: "30px 100px 10px 80px;",
        flexWrap: "wrap",
    },

}));



const AdminEdit = () => {
    const classes = useStyles();

    const ClassPlan = ()=> {
        return(
            <div className = "flex border bg-tabBackground h-8 items-center mt-3">
                <span className="w-2/12 ml-4" > 00:1:A</span>
                <span className="w-4/12" > 1er Nivel de Transición (Pre-kinder) A </span>
                <form className="w-3/12">
                    <select className="rounded-special border w-36 h-6" name="todo" id="todo">
                        <option value="Todos">Cecilia Montero</option>
                        <option value="Pupil">Pupil....</option>
                        <option value="Professor">Prof...</option>
                        <option value="Admin">Admin...</option>
                    </select>
                </form>
                <form className="w-3/12">
                    <select className = "w-20" name="year" id="year">
                        <option value="2021">202</option>
                        <option value="2022">203</option>
                        <option value="2023">204</option>
                        <option value="2024">205</option>
                    </select>
                </form>            
            </div>
        );
    } 

    const [editContent, setEditContent] = useState(0);
    let content;
    if (editContent===0) {
        content = (
            <>
            <div className={classes.navbar}>
                <button className="text-xl font-black" onClick = {()=>setEditContent(!editContent)}> Atrás</button>
            </div>
                <div className={classes.tableBoard}>
                    <div className="flex mr-8">
                        <span className="text-xl,text-opacity-70, font-black mr-8">
                            Mostrar
                        </span>

                        <form>
                            <select className="rounded-special border w-20 h-6" name="todo" id="todo">
                                <option value="Todos">Todos</option>
                                <option value="Pupil">Pupil</option>
                                <option value="Professor">Prof.</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </form>
                    </div>

                    <div>
                        <div className="flex mt-8 ml-4 ">
                            <div className="text-xl w-2/12 text-opacity-70  font-black "> Código </div>
                            <div className="text-xl w-4/12 text-opacity-70  font-black "> Curso </div>
                            <div className="text-xl w-3/12 text-opacity-70  font-black "> Profesor jefe </div>
                            <div className=" text-xl w-3/12  text-opacity-70  font-black "> Salón </div>
                        </div>
                    </div>
                    <div>
                        <ClassPlan/>
                        <ClassPlan/>
                        <ClassPlan/>
                        <ClassPlan/>
                        <ClassPlan/>



                    </div>
                </div>
            </>
        )
    } else {
        content = <AdminRatings/>
    }    

    return (
        <>
            {content}
        </>
    );
};
export default AdminEdit;
