"use client"
import Link from 'next/link';
import React from 'react';

const page = () => {
  // Sample data
  const users = [
    { name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', createdAt: '2024-01-01' },
    { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '234-567-8901', createdAt: '2024-02-15' },
    { name: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '345-678-9012', createdAt: '2024-03-22' },
    { name: 'Bob Brown', email: 'bob@example.com', phoneNumber: '456-789-0123', createdAt: '2024-04-10' },
  ];

  // Action handlers
  const handleEdit = (user) => {
    alert(`Editing user: ${user.name}`);
  };

  const handleDelete = (user) => {
    alert(`Deleting user: ${user.name}`);
  };

  return (
    <div className="overflow-x-auto p-32">
      <table className="table w-full relative">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.createdAt}</td>
              <td>
                <button 
                  className="btn btn-primary btn-xs mr-2" 
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-error btn-xs" 
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<div className=' absolute right-32'>
<Link href='/employee/Createemployee'>
      <button className=' p-4 bg-purple-700 text-white rounded-lg flex items-center justify-center'>
        create
      </button>
</Link>
</div>
    </div>
  );
};

export default page;
