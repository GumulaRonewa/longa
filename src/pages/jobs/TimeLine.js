import React from "react";
import './timeline.css';

export default function Timeline(props) {
	const time  = props.time;
		console.log(time)
const items = [
	{
		name: 'Brief',
		active: time.brief.completed,
	},
	{
		name: 'Bid',
		active: time.bid.completed,
	},
	{
		name: 'Content',
		active: time.content.completed,
	},
	{
		name: 'Post',
		active: time.post.completed,
	}
]
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

