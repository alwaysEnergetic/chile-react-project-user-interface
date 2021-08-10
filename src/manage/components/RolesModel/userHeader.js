import React, { useState } from "react";
import { useEffect } from "react";
import {
    makeStyles,
} from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
    const classes = useStyles();

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );


    const [state, setState] = useState({
        date: new Date(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const tick = () => {
        setState({ ...state, date: new Date() });
    };

    return (
        <div
            className="flex justify-between items-center"
            style={{ padding: "46px" }}
        >
            <div className="w-7/12 text-4xl font-bold" className={classes.logo}>
                Aurora.
            </div>

            <div className="flex w-5/12">
                <div className="flex items-center mr-4">
                    <div className="font-black text-lg mr-3">FECHA</div>

                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={classes.datePicker}
                        excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 17),
                            setHours(setMinutes(new Date(), 30), 18),
                            setHours(setMinutes(new Date(), 30), 19),
                            setHours(setMinutes(new Date(), 30), 17),
                        ]}
                        dateFormat="MMMM d, yyyy"
                    />
                </div>

                <div className="flex">
                    <div className="font-black text-lg mr-3">HORA</div>
                    <input
                        type="text"
                        className="w-28 rounded-lg h-7 text-center"
                        value={state.date.toLocaleTimeString()}
                    />
                </div>

                <label className="text-1xl ml-20">ES-EN</label>
            </div>
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    textbox: {
        marginLeft: 20,
        marginRight: 12,
        fontSize: 16,
        borderRadius: 20,
        width: "40%",
        alignItems: "center",
    },
    logo: {
        fontFamily: "Geller",
        fontSize: 50,
        marginLeft: 100,
        fontWeight: 900,
    },
    title: {
        borderRightColor: "#000",
        opacity: 0.9,
        borderRightStyle: "solid",
    },
    datePicker: {
        width: 123,
        height: 28,
        borderRadius: 7,
        marginLeft: 3
    },
});

export default Header;
