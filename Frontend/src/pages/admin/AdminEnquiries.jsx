import { useEffect, useMemo, useState } from "react";
import {
  FiBriefcase,
  FiEye,
  FiMail,
  FiPhone,
  FiRefreshCw,
  FiSearch,
  FiTrash2,
  FiUser,
  FiX,
} from "react-icons/fi";

const API_URL = "http://localhost:8080/api/contact";

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Enquiries load nahi hui.");
      }

      const data = await response.json();

      const sortedData = [...data].sort(
        (firstEnquiry, secondEnquiry) =>
          (secondEnquiry.id || 0) - (firstEnquiry.id || 0)
      );

      setEnquiries(sortedData);
    } catch (err) {
      console.error("Fetch enquiries error:", err);

      setError(
        "Enquiries load nahi hui. Backend server aur /api/contact endpoint check karo."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Kya tum is enquiry ko permanently delete karna chahte ho?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");
      setSuccessMessage("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Enquiry delete nahi hui.");
      }

      setEnquiries((previousEnquiries) =>
        previousEnquiries.filter((enquiry) => enquiry.id !== id)
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(null);
      }

      setSuccessMessage("Enquiry successfully delete ho gayi.");
    } catch (err) {
      console.error("Delete enquiry error:", err);

      setError(
        "Enquiry delete nahi hui. Backend server aur DELETE API check karo."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const serviceOptions = useMemo(() => {
    const services = enquiries
      .map((enquiry) => enquiry.service)
      .filter(
        (service, index, currentServices) =>
          service &&
          currentServices.indexOf(service) === index
      );

    return services;
  }, [enquiries]);

  const filteredEnquiries = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim();

    return enquiries.filter((enquiry) => {
      const matchesSearch =
        !normalizedSearch ||
        enquiry.name?.toLowerCase().includes(normalizedSearch) ||
        enquiry.email?.toLowerCase().includes(normalizedSearch) ||
        enquiry.phone?.toLowerCase().includes(normalizedSearch) ||
        enquiry.company?.toLowerCase().includes(normalizedSearch) ||
        enquiry.service?.toLowerCase().includes(normalizedSearch) ||
        enquiry.message?.toLowerCase().includes(normalizedSearch);

      const matchesService =
        serviceFilter === "All" ||
        enquiry.service === serviceFilter;

      return matchesSearch && matchesService;
    });
  }, [enquiries, searchTerm, serviceFilter]);

  const clearMessages = () => {
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold text-slate-900">
              Manage Enquiries
            </h1>

            <p className="mt-2 text-slate-500">
              Website contact form se received enquiries ko view aur manage
              karo.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              clearMessages();
              fetchEnquiries();
            }}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
            {successMessage}
          </div>
        )}

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Total Enquiries
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {enquiries.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Services Requested
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {serviceOptions.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Showing Results
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {filteredEnquiries.length}
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_260px]">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Name, email, phone, company ya message search karo..."
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <select
              value={serviceFilter}
              onChange={(event) => setServiceFilter(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            >
              <option value="All">All Services</option>

              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Enquiries List */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Enquiries
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest enquiries sabse upar dikhayi ja rahi hain.
            </p>
          </div>

          {loading ? (
            <div className="py-16 text-center">
              <FiRefreshCw className="mx-auto mb-4 animate-spin text-4xl text-cyan-600" />

              <p className="font-semibold text-slate-600">
                Enquiries loading...
              </p>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 py-14 text-center">
              <FiMail className="mx-auto mb-3 text-4xl text-slate-400" />

              <p className="font-semibold text-slate-700">
                Koi enquiry available nahi hai.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Contact form submit hone ke baad enquiry yahan show hogi.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEnquiries.map((enquiry) => (
                <article
                  key={enquiry.id}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-200 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-lg font-bold text-cyan-700">
                          {(enquiry.name || "U").charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {enquiry.name || "Unknown User"}
                          </h3>

                          <p className="text-sm text-slate-500">
                            Enquiry ID: #{enquiry.id}
                          </p>
                        </div>

                        {enquiry.service && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {enquiry.service}
                          </span>
                        )}
                      </div>

                      <div className="mb-4 grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-3">
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="flex min-w-0 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                        >
                          <FiMail className="shrink-0 text-cyan-600" />

                          <span className="truncate">
                            {enquiry.email || "Email not available"}
                          </span>
                        </a>

                        <a
                          href={`tel:${enquiry.phone}`}
                          className="flex min-w-0 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                        >
                          <FiPhone className="shrink-0 text-cyan-600" />

                          <span className="truncate">
                            {enquiry.phone || "Phone not available"}
                          </span>
                        </a>

                        <div className="flex min-w-0 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-700">
                          <FiBriefcase className="shrink-0 text-cyan-600" />

                          <span className="truncate">
                            {enquiry.company || "Company not provided"}
                          </span>
                        </div>
                      </div>

                      <p className="line-clamp-2 leading-7 text-slate-600">
                        {enquiry.message || "No message provided."}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          clearMessages();
                          setSelectedEnquiry(enquiry);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                      >
                        <FiEye />
                        View
                      </button>

                      {enquiry.email && (
                        <a
                          href={`mailto:${enquiry.email}?subject=Regarding your enquiry to MS Telecom & Infrastructure`}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                        >
                          <FiMail />
                          Reply
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDelete(enquiry.id)}
                        disabled={deletingId === enquiry.id}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <FiTrash2 />

                        {deletingId === enquiry.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
                  Enquiry Details
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {selectedEnquiry.name || "Unknown User"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <DetailItem
                  icon={<FiUser />}
                  label="Name"
                  value={selectedEnquiry.name}
                />

                <DetailItem
                  icon={<FiMail />}
                  label="Email"
                  value={selectedEnquiry.email}
                />

                <DetailItem
                  icon={<FiPhone />}
                  label="Phone"
                  value={selectedEnquiry.phone}
                />
                <DetailItem
                icon={<FiBriefcase />}
                label="Company"
                value={selectedEnquiry.company}
              />
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-slate-500">
                  Requested Service
                </p>

                <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-700">
                  {selectedEnquiry.service || "Service not specified"}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-slate-500">
                  Message
                </p>

                <div className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 leading-7 text-slate-700">
                  {selectedEnquiry.message || "No message provided."}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row">
                {selectedEnquiry.email && (
                  <a
                    href={`mailto:${selectedEnquiry.email}?subject=Regarding your enquiry to MS Telecom & Infrastructure`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
                  >
                    <FiMail />
                    Reply by Email
                  </a>
                )}

                {selectedEnquiry.phone && (
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    <FiPhone />
                    Call Client
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => handleDelete(selectedEnquiry.id)}
                  disabled={deletingId === selectedEnquiry.id}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-60"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="mb-2 flex items-center gap-2 text-cyan-600">
        {icon}
        <p className="text-sm font-semibold">{label}</p>
      </div>

      <p className="break-words font-medium text-slate-800">
        {value || "Not provided"}
      </p>
    </div>
  );
};

export default AdminEnquiries;