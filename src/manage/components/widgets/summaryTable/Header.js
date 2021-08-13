import React from "react";
const Header = ({ fields }) => {
    return (
        <thead>
            <tr>
                {fields.map((item, index) => {
                    return (
                        <th
                            key={index}
                            style={
                                index === 0
                                    ? { width: "60vw" }
                                    : {
                                          backgroundColor: "#03413f",
                                          border: "1px solid white",
                                          color: "#f7f6f5",
                                          fontSize: "9px",
                                          width: "30px",
                                          height: "30px",
                                      }
                            }
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {item}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
export default Header;
