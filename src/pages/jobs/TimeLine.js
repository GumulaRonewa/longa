import React from "react";
import './timeline.css';

const Timeline = (props) => {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div key={i} className={"timeline-item" + (item.active ? ' active' : '')}>
						<div className="timeline-content">
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

const items = [
	{
		name: 'Brief',
		active: true,
	},
	{
		name: 'Bid',
		active: true,
	},
	{
		name: 'Content',
		active: true,
	},
	{
		name: 'Post',
		active: false,
	}
]

 export default class TimeLine extends React.Component {
  

  render(){
     return(

        <Timeline items={items}/>
      )
  }
 }