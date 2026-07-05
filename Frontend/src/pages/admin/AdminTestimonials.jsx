import {
  FiEdit2,
  FiMessageSquare,
  FiPlus,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminTestimonials = () => {
  return (
    <AdminLayout>
      <section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Content Management
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Testimonials Management
            </h1>

            <p className="text-slate-400 mt-3">
              Add and manage client feedback shown on the MS Infrastructure website.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-3 rounded-xl transition">
            <FiPlus className="text-lg" />
            Add Testimonial
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Client Testimonials</h2>
              <p className="text-sm text-slate-500 mt-1">
                Feedback from clients and project partners.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Total testimonials:{" "}
              <span className="text-cyan-400 font-semibold">0</span>
            </p>
          </div>

          <div className="border border-slate-800 rounded-xl overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-semibold">Client</th>
                  <th className="px-5 py-4 font-semibold">Company</th>
                  <th className="px-5 py-4 font-semibold">Rating</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="5" className="px-5 py-14 text-center">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-3xl">
                      <FiMessageSquare />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      No testimonials added yet
                    </h2>

                    <p className="text-sm text-slate-500 mt-2">
                      Add client feedback to build trust on your public website.
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold px-5 py-3 rounded-xl transition">
                      <FiStar />
                      Add First Testimonial
                    </button>
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

export default AdminTestimonials;