import { FiEye, FiMail, FiMessageSquare, FiSearch } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminEnquiries = () => {
  return (
    <AdminLayout>
      <section>
        <div className="mb-8">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Customer Management
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold">
            Contact Enquiries
          </h1>

          <p className="text-slate-400 mt-3">
            View and manage messages received through the website contact form.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="relative w-full sm:max-w-sm">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input
                type="text"
                placeholder="Search enquiries..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            <p className="text-sm text-slate-500">
              Total enquiries:{" "}
              <span className="text-cyan-400 font-semibold">0</span>
            </p>
          </div>

          <div className="border border-slate-800 rounded-xl overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-semibold">Name</th>
                  <th className="px-5 py-4 font-semibold">Email</th>
                  <th className="px-5 py-4 font-semibold">Phone</th>
                  <th className="px-5 py-4 font-semibold">Subject</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="6" className="px-5 py-14 text-center">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-3xl">
                      <FiMail />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      No contact enquiries yet
                    </h2>

                    <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto leading-6">
                      Messages submitted through the public contact form will
                      appear here.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
            <FiMessageSquare className="text-cyan-400" />
            Enquiries will be connected with your Spring Boot Contact API next.
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminEnquiries;