import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';

export default function KrishnaAssig() {
    return (
        <>
            <Grid sx={{ paddingTop: '6rem' }} >
                <Grid sx={{ paddingLeft: "2rem" }} >
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>Users</Typography>
                </Grid>
                <TableContainer component={Paper}
                    sx={{ margin: "auto", marginTop: '1rem', width: '96%', padding: "10px" }}
                >
                    <Table
                        size="medium"
                        aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Date Created</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>Durgesh</div>
                                </TableCell>
                                <TableCell >04/10/2013</TableCell>
                                <TableCell >Admin</TableCell>
                                <TableCell >Active</TableCell>
                                <TableCell>
                                    <SettingsIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "bule" }} />
                                    <CancelIcon sx={{ paddingRight: "1rem", cursor: "pointer", color: "red" }} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
}