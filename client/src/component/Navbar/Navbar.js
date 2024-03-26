import { useState } from 'react'
import "./navbar.css"
import { FaBars } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-hot-toast';
import { BsArrowReturnLeft, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import * as React from 'react';

// for reset value of result
import { useDispatch } from 'react-redux';
import { resetALLAction } from '../../redux/question_reducer';
import { resetResultAction } from '../../redux/result_reducer';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Typography } from '@mui/material';

const Navbar = () => {

  const dispatch = useDispatch();
  var [isShown, setIsShown] = useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClick = () => {
    if (!isShown) {
      document.getElementById('SideNav').style.width = "170px"
      setIsShown(true);
    } else {
      document.getElementById('SideNav').style.width = "0px"
      setIsShown(false);
    }
  };

  const CloseNav = () => {
    document.getElementById('SideNav').style.width = "0px"
  }

  const user = localStorage.getItem('user')

  const onReset = () => {
    dispatch(resetALLAction())
    dispatch(resetResultAction());
  }


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = () => {
    toast.success("Logout Successfully ")
    setInterval(function () {
      localStorage.clear();
      window.location.reload();
    }, 2000)
  }

  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><Link to="/" onClick={onReset} >Nano chat</Link></div>
            <div className='RightNav'>
              <Link to='/practice-questions/neet' className='neettab' >NEET</Link>
              {
                !user ?
                  <>
                    <Link to='/login' className='logintab' >Login</Link>
                    <Link to='/signup' className='signuptab' > Signup <BsBoxArrowRight /> </Link>
                  </>
                  : ""
              }
              <span
                className='avtar'
                to='/signup'
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <BsFillPersonFill /><small>Account<RiArrowDropDownLine style={{ fontSize: "1.5rem" }} /></small>
              </span>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 100 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          {user && <MenuItem onClick={handleClose}> <CgProfile /><Link to={'/user/profile'} style={{ fontSize: "16px", color: "black" }}> my Profile</Link></MenuItem>}
                          <MenuItem onClick={handleClose}><FiHelpCircle /> <Link to={'/user/help'} style={{ fontSize: "16px", color: "black" }}>Help</Link></MenuItem>
                          {user && <MenuItem onClick={() => { handleLogout() }}><BiLogOutCircle /><Typography sx={{ paddingLeft: "12px", fontSize: "16px" }} >Logout</Typography></MenuItem>}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className='Sidenav' id='SideNav'>
          <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span>
          <Link to='/signup'><BsFillPersonFill />
            <small> {user ? user : "No Login "} </small>
          </Link>
          <Link to='/'>Home</Link>
          <Link to='/neet' onClick={onReset} >NEET</Link>
          {
            !user ?
              <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </>
              :
              <Link onClick={handleLogout} id='logout' >Logout</Link>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
