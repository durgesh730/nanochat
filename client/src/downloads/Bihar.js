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
import { Typography } from '@mui/material';

function createData(name, year, option) {
     return { name, year, option };
}

const rows = [
     createData('AUTONOMOUS MEDICAL COLLEGE, BAHRAICH', 2023, "Download"),
     createData('AUTONOMOUS MEDICAL COLLEGE, BASTI', 2023, "Download"),
     createData('AUTONOMOUS MEDICAL COLLEGE, AYODHYA', 2023, "Download"),
     createData('AUTONOMOUS MEDICAL COLLEGE, DEORIA', 2023, "Download"),
     createData('AUTONOMOUS MEDICAL COLLEGE, ETAH', 2023, "Download"),

     createData('AUTONOMOUS MEDICAL COLLEGE, FATEHPUR', 2023, "Download"),
];

export default function Download() {
     return (
          <>
               <Navbar />

               <Typography sx={{ textAlign: "center", fontSize: "2rem", alignItems: "center", marginBottom: "2rem", marginTop: "5rem" }} >Bihar Medical Colleges List </Typography>

               <TableContainer component={Paper} sx={{ width: "70%", margin: "auto", marginBottom: "4rem" }} >

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>College</TableCell>
                                   <TableCell align="right">Year</TableCell>
                                   <TableCell align="right">Option</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {rows.map((row, index) => (
                                   <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                   >
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="right">{row.year}</TableCell>
                                        <TableCell align="right"> <a href='#' >  {row.option} </a></TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
               <Footer />
          </>
     );
}
