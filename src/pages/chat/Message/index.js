import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      video,
      image,
      showTimestamp
    } = props;
    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : 'not'}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.text }
            {image && !video &&

                <img
                    src={data.url}
                    alt="profile"
                    className={'imagezx'}

                    style={{width:'90%',marginLeft:10,maxHeight:400}}
                  />
                }

                           {video &&
                            <video className={'imagezx'} style={{width:'90%',marginLeft:10,minHeight:400}} controls>
              <source
                src={data.url}
                type="video/mp4"
              />
            </video>
     }
          </div>
        </div>
      </div>
    );
}