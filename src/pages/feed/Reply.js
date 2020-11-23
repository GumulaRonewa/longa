import React from 'react'
import './feed.css';
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";

export default function Replys(){
	return(
		<div>
		<Divider />
                        <ListItem style={{height:'auto'}}>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"T"}
                      />
                        <div className='postsection'>
                          <div className={'username'} style={{position:'absolute'}}>ddddddf</div>
                          <div style={{color:'transparent'}}>vv</div>
                          <div className={'posttext'} style={{marginTop:5}}> Lorem ipsum dolor sit amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sait amet, consetetur sa

 
                          </div>
                        </div>
                        <div className='iconcol'>
                    <IconButton>
                        <Badge badgeContent={5} max={9} color="secondary">
                    <FavoriteIcon />
                  </Badge>
                  </IconButton>
                  
                  </div>
                     </ListItem>
                     <Divider/>

                  </div>
	)
}