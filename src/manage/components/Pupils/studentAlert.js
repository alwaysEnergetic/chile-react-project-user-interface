import React from "react";


const StudentAlert = () => {

    return (
        <div>
            <div>
                <p className = " text-lg font-bold">  Rasumen semestal</p>
                <div className = {"p-3 w-60 h-28 bg-tabBackground rounded-special border-2"} >
                    <p className="leading-3"> 3 anotaciones </p>
                    <p className="leading-3"> 2 trabajos pendientes </p>
                </div>
            </div>
            <div>
                <p className = "text-lg font-bold mt-3">  Comentarios y alertas</p>
                <div className = {"p-3 w-60 h-28 rounded-special bg-tabBackground border-2"} >
                    <p> Notas sobre el mínimo </p>
                </div>
            </div>

        </div>
    );
};

export default StudentAlert;


