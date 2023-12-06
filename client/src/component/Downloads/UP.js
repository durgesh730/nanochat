import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from "../../component/Footer/Footer"
import Navbar from '../../component/Navbar/Navbar'
import { Typography } from '@mui/material';

function createData(name, year, option) {
     return { name, year, option };
}

const rows = [
     createData('All India Institute of Medical Sciences, Gorakhpur', 2023, "Download"),
     createData('All India Institute of Medical Sciences, Rae Bareli', 2023, "Download"),
     createData('Autonomous State Medical College Society, Etah, Uttar Pradesh', 2023, "Download"),
     createData('Autonomous State Medical College Society, Fatehpur', 2023, "Download"),
     createData('Autonomous State Medical College Society, Ghazipur', 2023, "Download"),
     createData('Autonomous State Medical College Society, Hardoi', 2023, "Download"),
     createData('Autonomous State Medical College Society, Mirzapur', 2023, "Download"),
     createData('Autonomous State Medical College, Siddharthnagar', 2023, "Download"),
     createData('Autonomous State Medical College Pratapgarh', 2023, "Download"),
     createData('Autonomous State Society Medical College Society Jaunpur', 2023, "Download"),
     createData('BRD Medical College, Gorakhpur', 2023, "Download"),
     createData('Dr. Ram Manohar Lohia Institute of Medical Sciences, Lucknow', 2023, "Download"),
];

export default function BasicTable() {
     return (
          <>
               <Navbar />

               <Typography sx={{ textAlign: "center", fontSize: "2rem", alignItems: "center", marginBottom: "2rem", marginTop: "5rem" }} >Uttar Pradesh Medical Colleges List </Typography>

               <TableContainer component={Paper} sx={{ margin: "auto", marginBottom: "4rem", border: "none" , width:"80%"}} >

                    <Table sx={{ minWidth: 650, border: "none" }} aria-label="simple table">
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
