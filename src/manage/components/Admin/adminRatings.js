import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminTable from "./adminTable";
import AdminEdit from "./adminEdit"

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#FFF",
        padding: "1px 50px",
        fontFamily: "Geller",
        height: "5vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    tableBoard: {
        backgroundColor: theme.palette.tableBoardColor.main,
        padding: "0px 61px 0px 90px;",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    btnStyle: {
        backgroundColor: "#03413f",
        color: "#f7f6f5",
        borderRadius: "10px",
        width: "60px",
        height: "26px",
        display: "flex",
        justifyContent: "center",
    },
}));



const AdminRatings = () => {
    const classes = useStyles();

    const [editContent, setEditContent] = useState(0);
    let content;
    if (editContent===0) {
        content = (
            <>
            <div className={classes.navbar}>
                    <div className="flex">
                        <div className="flex mr-8">
                            <span className="text-base,text-opacity-70, font-black mr-2">
                                {" "}
                                AÑO{" "}
                            </span>
    
                            <form>
                                <select name="year" id="year">
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                </select>
                            </form>
                        </div>
                        <div className="flex mr-8">
                            <span className="text-base,text-opacity-70, font-black mr-2">
                                {" "}
                                SEMESTRE{" "}
                            </span>
                            <form>
                                <select name="semester" id="semester">
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                </select>
                            </form>
                        </div>
                        <div>
                            <span className="text-base,text-opacity-70">
                                {" "}
                                Mostrando x ramos{" "}
                            </span>
                        </div>
                    </div>
    
                    <div className="flex">
                        <div className="flex">
                            <form className="mr-4">
                                <select name="todo" id="todo">
                                    <option value="Todos">Todos</option>
                                    <option value="Pupil">Pupil</option>
                                    <option value="Professor">Prof.</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </form>
                            <form>
                                <input
                                    type="text"
                                    className="bg-tabBackground rounded-special mr-4"
                                />
                                <input
                                    type="submit"
                                    className="bg-searchBtn rounded-special w-16"
                                    value="Buscar"
                                />
                            </form>
                        </div>
                    </div>
                </div>
    
                <div className={classes.tableBoard}>
                    <div>
                        <AdminTable />
                    </div>
                    <form className={classes.btnStyle}>
                        <button type = "submit" onClick={()=>setEditContent(!editContent)}> Editar </button>
                    </form>
                </div>
            </>
        )
    } else {
        content = (<AdminEdit/>)
    }    

    return (
        <>
            {content}
        </>
    );
};
export default AdminRatings;
