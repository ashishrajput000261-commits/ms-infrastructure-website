import {
  FiBriefcase,
  FiCamera,
  FiFileText,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const dashboardCards = [
  {
    title: "Career Applications",
    value: "0",
    description: "Applications received from candidates",
    icon: <FiBriefcase />,
  },
  {
    title: "Gallery Updates",
    value: "0",
    description: "Project and field-work images",
    icon: <FiCamera />,
  },
  {
    title: "Testimonials",
    value: "0",
    description: "Client feedback entries",
    icon: <FiMessageSquare />,
  },
  {
    title: "Contact Enquiries",
    value: "0",
    description: "Messages received from website visitors",
    icon: <FiFileText />,
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <section>
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            MS Infrastructure
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-3">
            Manage website content, enquiries, careers, gallery updates, and
            client testimonials from one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {dashboardCards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-xl mb-5">
                {card.icon}
              </div>

              <h2 className="text-slate-300 font-medium">{card.title}</h2>

              <p className="text-4xl font-bold mt-3 mb-3">{card.value}</p>

              <p className="text-slate-500 text-sm leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-xl">
              <FiUsers />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Welcome, Admin</h2>
              <p className="text-slate-400 text-sm mt-1">
                Your MS Infrastructure content management panel is ready.
              </p>
            </div>
          </div>

          <p className="text-slate-400 leading-7">
            Use the sidebar to manage careers, gallery images, testimonials,
            and contact enquiries.
          </p>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;