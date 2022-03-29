import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let toons = await axios.get('/api/toons'); // returns new promise with all data

				setPeople(toons.data);

			} catch (e) {
				console.log(e);
			}
		})();
	}, []);
	return (
		<div className='App'>
			<h1>Toons</h1>

			<p>This component demonstrates fetching data from the server.</p>
			{people ? (
				<table>
					<thead>
						<tr>
							<th> Id </th>
							<th> Name </th>
							<th> Occupation </th>
						</tr>
					</thead>
					<tbody>
						{people.map((person, index) => (
							<tr key={index}>
								<td> {person.id} </td>
								<td>
									{person.firstName} {person.lastName}
								</td>
								<td>{person.occupation}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (<p><em>Loading...</em></p>)}
		</div>
	);
}

export default App;
