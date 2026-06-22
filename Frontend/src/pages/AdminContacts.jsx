import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/contact"
      );

      setContacts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-black mb-10">
          Contact Inquiries
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : contacts.length === 0 ? (
          <p>No inquiries found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-800">
              <thead className="bg-slate-900">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Company</th>
                  <th className="p-4 text-left">Service</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-t border-slate-800"
                  >
                    <td className="p-4">{contact.name}</td>
                    <td className="p-4">{contact.email}</td>
                    <td className="p-4">{contact.phone}</td>
                    <td className="p-4">{contact.company}</td>
                    <td className="p-4">{contact.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminContacts;