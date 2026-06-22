import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiMail,
  FiPhone,
  FiSearch,
  FiUsers,
  FiX,
  FiEye,
} from "react-icons/fi";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/contact");
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    const keyword = search.toLowerCase();

    return (
      contact.name?.toLowerCase().includes(keyword) ||
      contact.email?.toLowerCase().includes(keyword) ||
      contact.phone?.toLowerCase().includes(keyword) ||
      contact.service?.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-4">
            Admin Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-black">
            Contact Inquiries
          </h1>

          <p className="text-slate-400 mt-4">
            View and manage customer inquiries submitted from the website
            contact form.
          </p>
        </div>

        {/* Stats + Search */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl">
                <FiUsers />
              </div>

              <div>
                <p className="text-slate-400 text-sm">Total Inquiries</p>
                <h2 className="text-4xl font-black text-cyan-400">
                  {contacts.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Search Inquiries
            </label>

            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Search by name, email, phone or service..."
              />
            </div>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
            <p className="text-slate-300">Loading inquiries...</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
            <p className="text-slate-300">No inquiries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-3xl">
            <table className="w-full min-w-[900px]">
              <thead className="bg-slate-950">
                <tr>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Name
                  </th>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Email
                  </th>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Phone
                  </th>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Company
                  </th>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Service
                  </th>
                  <th className="p-5 text-left text-sm text-slate-400 uppercase tracking-widest">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredContacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-t border-slate-800 hover:bg-slate-950/60 transition"
                  >
                    <td className="p-5 font-semibold">{contact.name}</td>

                    <td className="p-5 text-slate-300">
                      <span className="inline-flex items-center gap-2">
                        <FiMail className="text-cyan-400" />
                        {contact.email}
                      </span>
                    </td>

                    <td className="p-5 text-slate-300">
                      <span className="inline-flex items-center gap-2">
                        <FiPhone className="text-cyan-400" />
                        {contact.phone}
                      </span>
                    </td>

                    <td className="p-5 text-slate-300">
                      {contact.company || "N/A"}
                    </td>

                    <td className="p-5">
                      <span className="rounded-full bg-cyan-400/10 text-cyan-400 px-4 py-2 text-sm font-bold">
                        {contact.service}
                      </span>
                    </td>

                    <td className="p-5">
                      <button
                        onClick={() => setSelectedContact(contact)}
                        className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-full font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition"
                      >
                        <FiEye />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {selectedContact && (
          <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center px-6">
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
              <button
                onClick={() => setSelectedContact(null)}
                className="absolute top-5 right-5 h-10 w-10 rounded-full bg-slate-950 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                <FiX />
              </button>

              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
                Inquiry Details
              </p>

              <h2 className="text-3xl font-black mb-8">
                {selectedContact.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <div>
                  <p className="text-slate-500 text-sm mb-1">Email</p>
                  <p className="text-slate-200">{selectedContact.email}</p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm mb-1">Phone</p>
                  <p className="text-slate-200">{selectedContact.phone}</p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm mb-1">Company</p>
                  <p className="text-slate-200">
                    {selectedContact.company || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm mb-1">Service</p>
                  <p className="text-cyan-400 font-bold">
                    {selectedContact.service}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 text-sm mb-3">Message</p>
                <p className="text-slate-200 leading-relaxed">
                  {selectedContact.message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminContacts;