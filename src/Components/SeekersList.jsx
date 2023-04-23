import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SeekersList.css';

class Seekers extends React.Component {
  state = {
    seekers: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/seekers', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your_access_token>'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ seekers: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { seekers } = this.state;

    return (
      <div>
        <h1>Seekers</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {seekers.map(seeker => (
              <tr key={seeker.id}>
                <td>{seeker.id}</td>
                <td>{seeker.full_name}</td>
                <td>{seeker.email}</td>
                <td>{seeker.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Seekers;


