import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomeScreen from '../home/HomeScreen';
import JobScreen from '../jobs/JobScreen';
import WalletScreen from '../wallet/WalletScreen';
import Feed from '../feed/Feed';
import Settings from '../profile/Settings';
import ProfileScreen from '../profile/ProfileScreen';
import Notification from './Notification';
import ChatScreen from '../chat/ChatScreen'

import Rewards from '../profile/Rewards';
import './side.css'
const Main = () => {
  return (
  	<div>
    <div className="posts">
      <BrowserRouter>
     <Switch>
    <Route path="/home" component={HomeScreen} />
     <Route path="/wallet" component={WalletScreen} />
     <Route path="/myrewards" component={Rewards} />
     <Route path="/myprofile" component={ProfileScreen} />
     <Route path="/settings" component={Settings} />
     <Route path="/feed" component={Feed} />
     <Route path="/chat" component={ChatScreen} />
     <Route path="/myjobs" component={JobScreen} />
     <Route path="/notification" component={Notification} />
  </Switch>
  </BrowserRouter>
    </div>
    </div>
  );
};

export default Main;