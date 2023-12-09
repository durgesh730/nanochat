import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '.3rem',
};

const FormModal = ({
  setUnpaidChecked,
  setOpen,
  unpaidChecked,
  paidChecked,
  setPaidChecked,
  open
}) => {

  const handleUnpaidChange = (e) => {
    setUnpaidChecked(e.target.checked);
    if (!unpaidChecked) {
      setPaidChecked(false);
    }
  };

  const handlePaidChange = (event) => {
    setPaidChecked(event.target.checked);
    if (!paidChecked) {
      setUnpaidChecked(false);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h3 id="parent-modal-title">Select Counselling Type</h3>

          <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <Divider />
            <div style={{ paddingTop: "1rem", paddingBottom: "0rem" }} >
              <FormControlLabel control={<Checkbox
                checked={unpaidChecked}
                onChange={handleUnpaidChange}
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />}
                label="Unpaid Counselling"
              />
              <br />
              <FormControlLabel control={<Checkbox
                checked={paidChecked}
                onChange={handlePaidChange}
                sx={{
                  color: "#232354",
                  '&.Mui-checked': {
                    color: "#232354",
                  },
                }}
              />} label="Paid Counselling" />
            </div>
          </div>

          <div style={{ paddingTop: "0rem", paddingBottom: "1rem" }}>
            Note:- The services will be provided to you according to your chosen plan.
          </div>
          <Divider />
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem" }} >
            <Button onClick={() => setOpen(false)} variant="outlined" size="medium" >Close</Button>
            <Button sx={{ backgroundColor: "#232354" }} variant="contained" size="medium" >Submit</Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default FormModal
