import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/customers');
      setCustomers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setLoading(false);
    }
  };

  const addCustomer = async (customer) => {
    try {
      const response = await axios.post('http://localhost:3001/customers', customer);
      setCustomers([...customers, response.data]);
      return response.data;
    } catch (error) {
      console.error('Error adding customer:', error);
      throw error;
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/customers/${id}`);
      setCustomers(customers.filter(customer => customer.id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <CustomerContext.Provider value={{ customers, loading, addCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomers must be used within a CustomerProvider');
  }
  return context;
};