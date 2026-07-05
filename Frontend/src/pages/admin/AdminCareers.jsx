import { FiBriefcase, FiPlus, FiSearch } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminCareers = () => {
  return (
    <AdminLayout>
      <section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Content Management
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Careers Management
            </h1>

            <p className="text-slate-400 mt-3">
              Create and manage job opportunities for MS Infrastructure.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-3 rounded-xl transition">
            <FiPlus className="text-lg" />
            Add New Job
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
            <div className="relative w-full sm:max-w-sm">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input
                type="text"
                placeholder="Search job positions..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            <p className="text-sm text-slate-500">
              Total jobs: <span className="text-cyan-400 font-semibold">0</span>
            </p>
          </div>

          <div className="border border-slate-800 rounded-xl overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-semibold">Job Title</th>
                  <th className="px-5 py-4 font-semibold">Location</th>
                  <th className="px-5 py-4 font-semibold">Experience</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="5" className="px-5 py-14 text-center">
                    <FiBriefcase className="text-cyan-400 text-4xl mx-auto mb-4" />

                    <h2 className="text-lg font-semibold text-white">
                      No job openings yet
                    </h2>

                    <p className="text-sm text-slate-500 mt-2">
                      Click “Add New Job” to create your first career opportunity.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminCareers;