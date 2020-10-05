import React, { useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomeScreen from './home/HomeScreen'
import ChatScreen from './chat/ChatScreen'
import JobScreen from './jobs/JobScreen'
import FeedScreen from './feed/FeedScreen'
import WalletScreen from './wallet/WalletScreen'
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import WorkIcon from '@material-ui/icons/Work';
import whitelogo from '../images/whitelogo.png'
import './drawer.css';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    main: {
    display: "flex",
    flex: 1,
    overflow:'hidden',
    padding: 0,
    "@global": {
      "*": {
        "scrollbar-width": "thin",
      },
      "*::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
      },
    },
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
              backgroundColor:'#0F81C7',

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
          backgroundColor:'white',

          height:75,

    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
     flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
       [theme.breakpoints.up('sm')]: {
        marginTop:105,

    }
  },
   contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
 search: {
    position: 'relative',
    borderRadius: "18px",
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",

    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      marginTop:30,
          borderRadius: "1px",
      marginLeft: theme.spacing(30),
      width: '50%',
    },
  },
    logo: {
    height: 25,
    width: 50,
    radius: 150,
  },
  icon: {
    height: 40,
    width: 40,
  },
  textcolor: {
    color: "#393C40",
    marginLeft: 30,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    Color:"black",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  avatar:{
       height: 40,
        width:40 ,
         [theme.breakpoints.up('md')]: {
      top: 13,
      left:160,
    },
  } ,
   drawerlogo: {
    width: 180,
    height: 140,
    position: "fixed",
    top: 15,
    left: 30,
  },
  drawerHeader: {
      height:30,
        [theme.breakpoints.up('sm')]: {

    display: "flex",
    height: 165,
    flexDirection: "column",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }
  },
}));

function Drawing(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );
  const drawer = (
<div className="drawer">
      <div className={classes.drawerHeader}>
                 <img alt="R" src={whitelogo} className={classes.drawerlogo} />

      </div>
      <List
        className={"list"}
        style={{
          overflow: "hidden",
          "&::WebkitScrollbar": {
            width: "19px",
          },
        }}
      >
        <ListItem
           component={Link} to={"/Home"}
          style={{ marginTop: 3, height: "11vh"}}
          button
          key={1}
        >
          <ListItemText className={classes.textcolor} primary={"Home"} />
          <HomeIcon className={classes.icon}/>
        </ListItem>
        <div style={{height:7,backgroundColor:'#0F81C7'}}/>

        <ListItem
          component={Link} to={"/feed"}
          style={{ height: "11vh" }}
          button
          key={2}
        >
          <ListItemText className={classes.textcolor} primary={"Feed"} />
        </ListItem>
        <div style={{height:7,backgroundColor:'#0F81C7'}}/>
        <ListItem
           component={Link} to={"/Home"}
          style={{ height: "11vh" }}
          button
          key={3}
        >
          <ListItemText className={classes.textcolor} primary={'Messages'} />
          <MessageIcon className={classes.icon}/>
        </ListItem>
        <div style={{height:7,backgroundColor:'#0F81C7'}}/>
        <ListItem
         component={Link} 
          to={"/wallet"}
          style={{ height: "11vh" }}
          button
          key={4}
        >
          <ListItemText className={classes.textcolor} primary={"Wallet"} />
          <AccountBalanceWalletIcon className={classes.icon}/>
        </ListItem>
        <div style={{height:7,backgroundColor:'#0F81C7'}}/>
        <ListItem
          component={Link} 
          to={"/jobs"}
          style={{ height: "11vh" }}
          button
          key={5}
        >
          <ListItemText className={classes.textcolor} primary={"My Jobs"} />
        <WorkIcon className={classes.icon}/>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
       
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color:"black"}} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
             <Avatar
                className={classes.avatar}
                src={"k"}
                alt={"R"}
            />
            </IconButton>
            
            </div>
        </Toolbar>
      </AppBar>
            {renderMenu}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
   </div>
  );
}
function Main() {
  

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <BrowserRouter>
       <Drawing />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: true,
          })}
        >
          <div className="main">
            <Route path="/home" component={HomeScreen} />
            <Route path="/feed" component={FeedScreen} />
            <Route path="/jobs" component={JobScreen} />
            <Route path="/wallet" component={WalletScreen} />
            <Route path="/messages" component={ChatScreen} />
           
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default class SideDrawer extends React.Component {
  
  render() {
    return <Main />;
  }
}

