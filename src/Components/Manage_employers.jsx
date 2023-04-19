import React from 'react'

function Manage_employers() {
  return (
    <>
       <section className="manage__users-page">
        <div className="table__header">
          <strong>Manage Employers</strong>
        </div>
        <div className="table__body">
          <table>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>Employer</td>
              <td><button className='admin__edit'>Edit</button></td>
              <td><button className='admin__delete'>Delete</button> </td> 
            </tr>
          </table>
        </div>

      </section>
    </>
  )
}

export default Manage_employers