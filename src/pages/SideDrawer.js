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
import Welcome from './home/Welcome'
import Conformation from './home/Conformation'
import WelcomeBrand from './home/WelcomeBrand'
import Linked from './home/Linked'
import ChatScreen from './chat/ChatScreen'
import ProfileScreen from './profile/ProfileScreen'
import Rewards from './profile/Rewards'
import About from './profile/About'
import Settings from './profile/Settings'
import Login from './login/Login'
import Choose from './login/Choose'
import Register from './login/Register'
import AboutUs from './login/AboutUs'
import RegisterBussiness from './login/RegisterBussiness'
import JobScreen from './jobs/JobScreen'
import FeedScreen from './feed/FeedScreen'
import WalletScreen from './wallet/WalletScreen'
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import WorkIcon from '@material-ui/icons/Work';
import notag from '../images/notag.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Divider from "@material-ui/core/Divider";
import at from '../images/at.svg'
import { createMuiTheme } from '@material-ui/core/styles';

import './drawer.css';

const drawerWidth = 210;
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles((theme) => ({
    main: {
    display: "flex",
    flex: 1,
    overflow:'hidden',
    padding: 0,
  
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
         overflow:'hidden',

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
       [theme.breakpoints.up('sm')]: {
        marginTop:0,
                 overflow:'hidden',


    }
  },
   contentShift: {
             overflow:'hidden',

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
       height: 30,
        width:30 ,
         [theme.breakpoints.up('md')]: {
      top: 13,
      left:160,
    },
  } ,
   drawerlogo: {
    width: 190,
    height: 140,
    position: "fixed",
    top: 15,
    left: 20,
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
   const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpen2 = Boolean(anchorEl2);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handleNotifMenuOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    handleMobileMenuClose();
  };

  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
const menuId = 'primary-search-account-menu';
const menuId2= 'primary-search-account-menu';
    const Signout = () => {
      var win=props.props;
        win.open("login", "_self");

}
    const profilecl = () => {
      var win=props.props;
        win.open("/profile", "_self");

}
    const rewardscl = () => {
      var win=props.props;
        win.open("/myrewards", "_self");

}
    const settingscl = () => {
      var win=props.props;
        win.open("/settings", "_self");

}
   const aboutcl = () => {
      var win=props.props;
        win.open("/about", "_self");

}
  const renderNotifMenu = (
    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId2}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen2}
      onClose={handleMenuClose}
    >
               <div style={{height:400,width:320}}>
                 <div className='notificationlabel'>Notifications</div>
                 <div style={{color:'transparent'}}>Notifications</div>
                 <Divider/>
                 <ListItem>
                      <Avatar src={"https://resources.premierleague.com/photos/2019/08/05/2be02012-7e29-4463-bac6-a9ad54b4971e/GettyImages-1015530518.jpg?width=930&height=620"} alt="R" />
                 <div style={{color:'transparent'}}>N</div>

                    <ListItemText primary=" Sadio Liked your post" />
                 </ListItem>
                 <Divider/>
                 <ListItem>
                      <Avatar src={"data:image/jpeg;base64,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"} alt="R" />
                 <div style={{color:'transparent'}}>N</div>

                    <ListItemText primary="Fun Guy replied to your post" />
                 </ListItem>
                 <Divider/>
               </div>

    </Menu>
  );
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
          <MenuItem onClick={profilecl}>My Profile</MenuItem>
          <MenuItem onClick={rewardscl}>My Rewards</MenuItem>
          <MenuItem onClick={settingscl}>Settings</MenuItem>
          <MenuItem onClick={aboutcl}>About Us</MenuItem>

      <MenuItem onClick={Signout}>Sign Out</MenuItem>
    </Menu>
  );
  const drawer = (
<div className="drawer">
      <div className={classes.drawerHeader}>
                 <img alt="R" src={notag} className={classes.drawerlogo} />

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
          <img src={at} className={classes.icon} alt="" />
        </ListItem>
        <div style={{height:7,backgroundColor:'#0F81C7'}}/>
        <ListItem
           component={Link} to={"/messages"}
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
          <div className='icorrow'>
          <IconButton 
            edge="end"
              aria-label="notif"
              aria-controls={menuId2}
              aria-haspopup="true"
              onClick={handleNotifMenuOpen}
              color="inherit"
          >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              style={{marginLeft:10}}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
             <Avatar
                //className={classes.avatar}
                src={localStorage.getItem("image")}
                alt={"R"}
            />
            </IconButton>
            
            </div>
            </div>
        </Toolbar>
      </AppBar>
            {renderMenu}
            {renderNotifMenu}

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
       {    window.location.pathname !== "/links" &&
          window.location.pathname !== "/welcome" &&
          window.location.pathname !== "/register" &&
          window.location.pathname !== "/reset" &&
          window.location.pathname !== "/choose" &&
          window.location.pathname !== "/registerbrands" &&
          window.location.pathname !== "/loginout" &&
          window.location.pathname !== "/login" &&
          window.location.pathname !== "/" &&
          window.location.pathname !== "/aboutus" &&
          window.location.pathname !== "/wb" &&
          window.location.pathname !== "/details" &&
          window.location.pathname !== "/validreg" && <Drawing props={window}/>}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: true,
          })}
        >
          <div>
            <Route path="/home" component={HomeScreen} />
            <Route path="/feed" component={FeedScreen} />
                        <Route path={"/login"} component={Login} />
                        <Route path={"/register"} component={Register} />
                        <Route path={"/validreg"} component={Conformation} />

                        <Route path={"/setting"} component={Settings} />
                        <Route path={"/myrewards"} component={Rewards} />
                        <Route path={"/settings"} component={Settings} />
                        <Route path={"/aboutus"} component={AboutUs} />
                        <Route path={"/about"} component={About} />
                        <Route path={"/registerbrands"} component={RegisterBussiness} />
                        <Route path={"/welcome"} component={Welcome} />
                        <Route path={"/wb"} component={WelcomeBrand} />
                        <Route exact path={"/"} component={Choose} />
                        <Route path={"/links"} component={Linked} />
                        <Route path={"/profile"} component={ProfileScreen} />

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
   componentWillMount() {
    if (
      window.location.pathname !== "/wb" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/aboutus" &&
      window.location.pathname !== "/settings" &&
      window.location.pathname !== "/settings/wallet" &&
      window.location.pathname !== "/validreg" &&
      window.location.pathname !== "/links" &&

      window.location.pathname !== "/welcome" &&
      window.location.pathname !== "/registerbrands"
    ) {
      if (localStorage.getItem("token") === null) {
        window.open("login", "_self");
      }
  }
}
  render() {
    return <Main />;
  }
}

