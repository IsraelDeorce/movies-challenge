import React from 'react';

const ShowRow = ({ show }) => {
  console.log('show:',show);
	return (
		<table key={show.id && show.id}>
			<tbody>
				<tr>
					<td>
						<img alt="poster" src={show.image && show.image.medium} />
					</td>
					<td>
						{show.name && show.name}
						{show.summary && <span dangerouslySetInnerHTML={{__html: show.summary}}></span>}
					</td>
				</tr>
			</tbody>
		</table>
	);
}
export default ShowRow;