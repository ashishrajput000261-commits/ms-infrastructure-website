import { FiCamera, FiEdit2, FiImage, FiPlus, FiTrash2 } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminGallery = () => {
  return (
    <AdminLayout>
      <section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Content Management
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Gallery Management
            </h1>

            <p className="text-slate-400 mt-3">
              Add and manage project, site-work, and field-operation images.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-3 rounded-xl transition">
            <FiPlus className="text-lg" />
            Add Gallery Image
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Gallery Images</h2>
              <p className="text-sm text-slate-500 mt-1">
                Images currently available on the website.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Total images:{" "}
              <span className="text-cyan-400 font-semibold">0</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="col-span-full border border-dashed border-slate-700 rounded-2xl py-16 px-5 text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-3xl">
                <FiImage />
              </div>

              <h3 className="text-xl font-semibold">
                No gallery images yet
              </h3>

              <p className="text-sm text-slate-500 mt-3 max-w-md mx-auto leading-6">
                Add telecom tower, fiber installation, survey, maintenance, or
                team-operation images to display them on the public website.
              </p>

              <button className="mt-6 inline-flex items-center gap-2 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold px-5 py-3 rounded-xl transition">
                <FiCamera />
                Upload First Image
              </button>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminGallery;