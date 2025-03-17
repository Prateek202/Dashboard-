import { useCustomers } from '../context/CustomerContext';

function CustomerStats() {
  const { customers, loading } = useCustomers();

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  const totalCustomers = customers.length;
  const recentCustomers = customers.slice(-5).reverse();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customer Statistics</h1>

      <div className="grid gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
          <p className="text-4xl font-bold text-blue-600">{totalCustomers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
          <div className="divide-y">
            {recentCustomers.map((customer) => (
              <div key={customer.id} className="py-3">
                <p className="font-medium">{customer.name}</p>
                <p className="text-sm text-gray-600">{customer.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStats;