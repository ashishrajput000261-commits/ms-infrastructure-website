import { useEffect, useState } from "react";
import axios from "axios";
import {
  FiBriefcase,
  FiDownload,
  FiMail,
  FiPhone,
  FiTrash2,
  FiRefreshCw,
  FiAlertCircle,
  FiFileText,
  FiMapPin,
} from "react-icons/fi";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await axios.get(
        "http://localhost:8080/api/careers/applications"
      );

      setApplications(response.data);
    } catch (error) {
      setMessage("Unable to load career applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const openResume = (applicationId) => {
    window.open(
      `http://localhost:8080/api/careers/applications/${applicationId}/resume`,
      "_blank"
    );
  };

  const deleteApplication = async (applicationId, candidateName) => {
    const shouldDelete = window.confirm(
      `Delete application submitted by ${candidateName}?`
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setDeletingId(applicationId);
      setMessage("");

      const response = await axios.delete(
        `http://localhost:8080/api/careers/applications/${applicationId}`
      );

      setMessage(response.data.message || "Application deleted successfully.");

      setApplications((previousApplications) =>
        previousApplications.filter(
          (application) => application.id !== applicationId
        )
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Unable to delete this application."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return "Not available";
    }

    return new Date(dateValue).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 pb-16 pt-28 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Admin Panel
            </p>

            <h1 className="text-3xl font-black md:text-5xl">
              Career Applications
            </h1>

            <p className="mt-4 max-w-2xl text-slate-600">
              Review candidate details, open uploaded resumes, and manage
              submitted job applications.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchApplications}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Refresh Applications
          </button>
        </section>

        {message && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-800">
            <FiAlertCircle size={18} />
            <span>{message}</span>
          </div>
        )}

        <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Total Applications
            </p>

            <p className="mt-3 text-4xl font-black text-cyan-600">
              {applications.length}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Latest Candidate
            </p>

            <p className="mt-3 truncate text-xl font-black text-slate-900">
              {applications[0]?.fullName || "No applications yet"}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Resume Storage
            </p>

            <p className="mt-3 text-xl font-black text-slate-900">
              PDF Uploads Enabled
            </p>
          </div>
        </section>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
            <FiRefreshCw className="mx-auto animate-spin text-cyan-600" size={30} />
            <p className="mt-4 font-medium text-slate-600">
              Loading applications...
            </p>
          </div>
        ) : applications.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
            <FiBriefcase className="mx-auto text-cyan-600" size={42} />

            <h2 className="mt-5 text-2xl font-black">
              No Applications Found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Candidate applications submitted through the Careers page will
              appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {applications.map((application) => (
              <article
                key={application.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-400 hover:shadow-md"
              >
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-600">
                      <FiBriefcase />
                    </div>

                    <div>
                      <h2 className="text-xl font-black text-slate-900">
                        {application.fullName}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-cyan-600">
                        {application.experience} Experience
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    ID #{application.id}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <p className="flex items-center gap-3">
                    <FiMail className="shrink-0 text-cyan-600" />
                    <a
                      href={`mailto:${application.email}`}
                      className="break-all hover:text-cyan-600"
                    >
                      {application.email}
                    </a>
                  </p>

                  <p className="flex items-center gap-3">
                    <FiPhone className="shrink-0 text-cyan-600" />
                    <a
                      href={`tel:${application.phone}`}
                      className="hover:text-cyan-600"
                    >
                      {application.phone}
                    </a>
                  </p>

                  <p className="flex items-center gap-3">
                    <FiMapPin className="shrink-0 text-cyan-600" />
                    <span>
                      Current Company:{" "}
                      <strong className="text-slate-800">
                        {application.currentCompany || "Not provided"}
                      </strong>
                    </span>
                  </p>

                  <p>
                    Expected Salary:{" "}
                    <strong className="text-slate-800">
                      {application.expectedSalary || "Not provided"}
                    </strong>
                  </p>

                  <p>
                    Applied On:{" "}
                    <strong className="text-slate-800">
                      {formatDate(application.appliedAt)}
                    </strong>
                  </p>
                </div>

                {application.coverLetter && (
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Cover Letter
                    </p>

                    <p className="whitespace-pre-line text-sm leading-6 text-slate-600">
                      {application.coverLetter}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openResume(application.id)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-700"
                  >
                    <FiFileText />
                    Open Resume
                    <FiDownload />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteApplication(application.id, application.fullName)
                    }
                    disabled={deletingId === application.id}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FiTrash2 />
                    {deletingId === application.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminApplications;