// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "../style/download.css"


// const Download = () => {
//      const navigate = useNavigate();
//      const token = localStorage.getItem('token');

//      const handledAYODHYA = () => {
//           if (token === null) {
//                navigate("/Login")
//           } else {
//                navigate("/form");
//           }
//      }

//      return (
//           <>
//               
//                <div className='container'>
//                     <div className='colleges'>
//                          <table>
//                               <tr>
//                                    <th>State</th>
//                                    <th>Year</th>
//                                    <th>Option</th>
//                               </tr> <br />
//                               <tr>
//                                    <td>AUTONOMOUS MEDICAL COLLEGE, AYODHYA</td>
//                                    <td>2022</td>
//                                    <td><span onClick={handledAYODHYA} >Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td> AUTONOMOUS MEDICAL COLLEGE, SIDDHARTH NAGAR</td>
//                                    <td>2022</td>
//                                    <td><span>Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td>MOTI LAL NEHRU MEDICAL COLLEGE, PRAGYRAJ</td>
//                                    <td>2022</td>
//                                    <td><span >Download</span></td>
//                               </tr>
//                               {/* BABA RAGHAVDAS MEDIAL COLLEGE, GORAKHPUR */}
//                               <tr>
//                                    <td>BABA RAGHAVDAS MEDIAL COLLEGE, GORAKHPUR</td>
//                                    <td>2022</td>
//                                    <td><span >Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td>MAHARANI LAXMIBAI MEDICAL COLLEGE, JHANSI</td>
//                                    <td>2022</td>
//                                    <td><span >Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td>MEDICAL COLLEGE, AZAMGARH</td>
//                                    <td>2022</td>
//                                    <td><span >Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td>GANESH SHANKER VIDHARTHI MEMORIAL MEDICAL COLLEGE, KANPUR</td>
//                                    <td>2022</td>
//                                    <td><span>Download</span></td>
//                               </tr>

//                               <tr>
//                                    <td>SAROJINI NAIDU MEDICAL COLLEGE, AGRA</td>
//                                    <td>2022</td>
//                                    <td><span>Download</span></td>
//                               </tr>
//                          </table>
//                     </div>
//                </div>
//               
//           </>
//      )
// }

// export default Download


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from "../component/Footer"
import Navbar from '../component/Navbar'

function createData(name, calories, fat, carbs, protein) {
     return { name, calories, fat, carbs, protein };
}

const rows = [
     createData("King George's Medical University, Lucknow", 2023, "Download"),
     createData('Ice cream sandwich', 2023, "Download"),
     createData('Eclair', 2023, "Download"),
     createData('Cupcake', 2023, "Download"),
     createData('Gingerbread', 2023, "Download"),
     createData("King George's Medical University, Lucknow", 2023, "Download"),
     createData('Ice cream sandwich', 2023, "Download"),
     createData('Eclair', 2023, "Download"),
     createData('Cupcake', 2023, "Download"),
     createData('Gingerbread', 2023, "Download"),
     createData("King George's Medical University, Lucknow", 2023, "Download"),
     createData('Ice cream sandwich', 2023, "Download"),
     createData('Eclair', 2023, "Download"),
     createData('Cupcake', 2023, "Download"),
     createData('Gingerbread', 2023, "Download"),
     createData("King George's Medical University, Lucknow", 2023, "Download"),
     createData('Ice cream sandwich', 2023, "Download"),
     createData('Eclair', 2023, "Download"),
     createData('Cupcake', 2023, "Download"),
     createData('Gingerbread', 2023, "Download"),
];

export default function BasicTable() {
     return (
          <>
               <Navbar />
               <TableContainer component={Paper} sx={{ width: "70%", margin: "auto", marginTop: "6rem", marginBottom: "6rem"}} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>College</TableCell>
                                   <TableCell align="right">Year</TableCell>
                                   <TableCell align="right">Option</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {rows.map((row) => (
                                   <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                   >
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right"> <a href='#' >  {row.fat} </a></TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
               <Footer />
          </>
     );
}
