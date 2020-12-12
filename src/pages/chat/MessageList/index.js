import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import axios from "axios";

import './MessageList.css';


export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  })

  
  const getMessages = () => {
             var data={userID:localStorage.getItem("userId")}

     axios({
         method: 'POST',
         url: `https://longa-money.herokuapp.com/api/messages/user`, // First page at 0
           data:data,

       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
            setMessages(res.data)

    }).catch((e) => {
        console.log(e);
      })
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.isMine;
        var image=current.url==="" ;
         var id=false;

image =!image;
  if(image){
    id= current.url.slice(current.url.length - 4)
    id=id===".mp4";

  }
      let currentMoment = moment(current.time);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showtime = true;

      if (previous) {
        let previousMoment = moment(previous.time);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showtime = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.time);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          video={id}
          image={image}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showtime={showtime}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title='Longa Money Admin'
         
        />

        <div className="message-list-container">{renderMessages()}

        </div>

        <Compose/>
      </div>
    );
}