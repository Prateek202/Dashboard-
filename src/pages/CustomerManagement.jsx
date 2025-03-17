import { useState } from 'react';
import { useCustomers } from '../context/CustomerContext';

function CustomerManagement() {
  const { customers, loading, addCustomer, deleteCustomer } = useCustomers();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(formData);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Customer Management</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-3">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
        >
          Add Customer
        </button>
      </form>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-4">{customer.name}</td>
                <td className="px-4 py-4">{customer.email}</td>
                <td className="px-4 py-4">{customer.phone}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => deleteCustomer(customer.id)}
                    className="text-red-600 hover:text-red-800 px-2 py-1 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerManagement;
