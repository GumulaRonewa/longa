import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
        let newConversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that is are we g d dvdf dt  needs to be truncated .'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
      
        <ConversationSearch />
        <div style={{color:"transparent"}}>fff</div>
        {
          conversations.map(conversation =>
          <a href={`chat/${conversation.name}`} style={{textDecoration:"none"}}>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          </a>
          )
        }
      </div>
    );
}