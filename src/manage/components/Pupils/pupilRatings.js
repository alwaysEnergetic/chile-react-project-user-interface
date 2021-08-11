import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StudentTable from './studentTable'
import StudentAlert  from './studentAlert'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#FFF",
        padding: "1px 27px",
        fontFamily: "Geller",
        height: "5vh",
        display: "flex",
        alignItems: "center",
    },

    tableBoard: {
        display: "flex",
        backgroundColor: theme.palette.tableBoardColor.main,
        flexWrap:'wrap'
    },
}));

const PupilRatings = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.navbar}>
                <div className= "flex mr-8">
                    <span className = "text-base,text-opacity-70, font-black mr-2"> AÑO </span>

                    <form>
                        <select name="year" id="year">
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </form>
                </div>
                <div className= "flex mr-8">
                    <span className = "text-base,text-opacity-70, font-black mr-2"> SEMESTRE </span>
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
                    <span className = "text-base,text-opacity-70"> Mostrando x ramos </span>
                </div>

            </div>

            <div className={classes.tableBoard}>
              <div className="pl-28 pt-8">
                <div>
                    <p className = " text-lg font-bold"> Conjunto notas 1er semestre 2021</p>
                </div>
                <div>
                    <StudentTable/>

                </div>

              </div>
              <div className="flex pt-8 pr-10 pl-20">
                <StudentAlert/>
              </div>
            </div>
        </>
    );
};
export default PupilRatings;
