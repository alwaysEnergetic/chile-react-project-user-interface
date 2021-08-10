import React from 'react';


  export default function StudentTable() {
    const tableHeader = ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'N10', 'NE', 'NF']
    const tableData = [
      {
        subject : 'MATEMÁTICAS',
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'LENGUAJE',
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',

        }
      },
      {
        subject : 'INGLES' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },

      {
        subject : 'HISTORIA' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'FÍSICA' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'QUÍMICA' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'BIOLOGÍA' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'INGLES' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },
      {
        subject : 'ED.' , 
        score: {
          n1: '5.0',
          n2: '6.7',
          n3: '4.8',
          n4: null,
          n5: null,
          n6: null,
          n7: null,
          n8: null,
          n9: null,
          n10: null,
          ne: 'E',
          nf: '5.5',
        }
      },

    ];

    return (
      <div>
        <table>
          <thead>
            <tr>     
              <th></th>   
              {tableHeader.map(header => {
                return <th>{header}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return  <tr key={index}>
                        <td>{data.subject}</td>
                        <td>{data.score.n1}</td>
                        <td>{data.score.n2 === null ? '-' : data.score.n2}</td>
                        <td>{data.score.n3 === null ? '-' : data.score.n3}</td>
                        <td>{data.score.n4 === null ? '-' : data.score.n4}</td>
                        <td>{data.score.n5 === null ? '-' : data.score.n5}</td>
                        <td>{data.score.n6 === null ? '-' : data.score.n6}</td>
                       
                        <td>{data.score.n7 === null ? '-' : data.score.n7}</td>
                        <td>{data.score.n8 === null ? '-' : data.score.n8}</td>
                        <td>{data.score.n9 === null ? '-' : data.score.n9}</td>
                        <td>{data.score.n10 === null ? '-' : data.score.n10}</td>
                        <td>{data.score.ne}</td>
                        <td>{data.score.nf}</td>
                      </tr>
            })}    
          </tbody>
        </table>
      </div>
    );
  }