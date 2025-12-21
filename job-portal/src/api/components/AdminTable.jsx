import React from "react";

export default function AdminTable() {
  return (
    <div className="admin-table">
      <h2>Recent Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sri Valli</td>
            <td>srivalli@gmail.com</td>
            <td>Employer</td>
            <td>Active</td>
            <td>
              <button className="btn small">Deactivate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
