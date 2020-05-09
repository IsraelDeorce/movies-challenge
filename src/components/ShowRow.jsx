import React from 'react';

const ShowRow = ({ show }) => {
	return (
		<table key={show.id}>
			<tbody>
				<tr>
					<td>
						<img alt="poster" src="logo192.png" />
					</td>
					<td>
						{show.title}
						<p>{show.overview}</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
export default ShowRow;