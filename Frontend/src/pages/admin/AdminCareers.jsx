import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiEdit2,
  FiMapPin,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";

const API_URL = "http://localhost:8080/api/careers";

const initialFormData = {
  jobTitle: "",
  department: "",
  location: "",
  employmentType: "Full Time",
  experience: "",
  description: "",
  status: "Open",
};

const AdminCareers = () => {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Career jobs load nahi hui.");
      }

      const data = await response.json();
      setCareers(data);
    } catch (err) {
      console.error("Fetch careers error:", err);
      setError(
        "Career jobs load nahi hui. Backend server aur API check karo."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
    setShowForm(true);
    setError("");
    setSuccessMessage("");
  };

  const closeForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
    setShowForm(false);
    setError("");
  };

  const validateForm = () => {
    if (!formData.jobTitle.trim()) {
      setError("Job title enter karo.");
      return false;
    }

    if (!formData.department.trim()) {
      setError("Department enter karo.");
      return false;
    }

    if (!formData.location.trim()) {
      setError("Job location enter karo.");
      return false;
    }

    if (!formData.experience.trim()) {
      setError("Required experience enter karo.");
      return false;
    }

    if (!formData.description.trim()) {
      setError("Job description enter karo.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const requestUrl = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const requestMethod = editingId ? "PUT" : "POST";

      const response = await fetch(requestUrl, {
        method: requestMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Career job save nahi hui.");
      }

      setSuccessMessage(
        editingId
          ? "Career job successfully update ho gayi."
          : "New career job successfully add ho gayi."
      );

      setFormData(initialFormData);
      setEditingId(null);
      setShowForm(false);

      await fetchCareers();
    } catch (err) {
      console.error("Save career error:", err);
      setError(
        "Career job save nahi hui. Backend entity aur service check karo."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (career) => {
    setFormData({
      jobTitle: career.jobTitle || "",
      department: career.department || "",
      location: career.location || "",
      employmentType: career.employmentType || "Full Time",
      experience: career.experience || "",
      description: career.description || "",
      status: career.status || "Open",
    });

    setEditingId(career.id);
    setShowForm(true);
    setError("");
    setSuccessMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Kya tum is career job ko delete karna chahte ho?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccessMessage("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Career job delete nahi hui.");
      }

      setCareers((previousCareers) =>
        previousCareers.filter((career) => career.id !== id)
      );

      setSuccessMessage("Career job successfully delete ho gayi.");
    } catch (err) {
      console.error("Delete career error:", err);
      setError(
        "Career job delete nahi hui. Backend API check karo."
      );
    }
  };

  const handleStatusToggle = async (career) => {
    try {
      setError("");
      setSuccessMessage("");

      const updatedCareer = {
        jobTitle: career.jobTitle || "",
        department: career.department || "",
        location: career.location || "",
        employmentType: career.employmentType || "Full Time",
        experience: career.experience || "",
        description: career.description || "",
        status: career.status === "Open" ? "Closed" : "Open",
      };

      const response = await fetch(`${API_URL}/${career.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCareer),
      });

      if (!response.ok) {
        throw new Error("Career status update nahi hua.");
      }

      setSuccessMessage(
        updatedCareer.status === "Open"
          ? "Career position open kar di gayi."
          : "Career position close kar di gayi."
      );

      await fetchCareers();
    } catch (err) {
      console.error("Status update error:", err);
      setError(
        "Career status update nahi hua. Backend service check karo."
      );
    }
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
              Manage Careers
            </h1>

            <p className="mt-2 text-slate-500">
              Job openings ko add, edit, open, close aur delete karo.
            </p>
          </div>

          <button
            type="button"
            onClick={showForm ? closeForm : openAddForm}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            {showForm ? <FiX /> : <FiPlus />}

            {showForm ? "Close Form" : "Add New Job"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
            {error}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
            {successMessage}
          </div>
        )}

        {/* Add/Edit Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {editingId ? "Edit Job Opening" : "Add New Job Opening"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Job position ki complete details enter karo.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Job Title */}
              <div>
                <label
                  htmlFor="jobTitle"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Job Title *
                </label>

                <input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Example: Telecom Engineer"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Department *
                </label>

                <input
                  id="department"
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="Example: Network Operations"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Location *
                </label>

                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Example: Indore, Madhya Pradesh"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label
                  htmlFor="employmentType"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Employment Type
                </label>

                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Required Experience *
                </label>

                <input
                  id="experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Example: 2-4 Years"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Job Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Job Description *
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Job responsibilities, skills aur requirements enter karo..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Job"
                    : "Save Job"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Careers List */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              All Job Openings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Total job openings: {careers.length}
            </p>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-500">
              Career jobs loading...
            </div>
          ) : careers.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">
              <FiBriefcase className="mx-auto mb-3 text-4xl text-slate-400" />

              <p className="font-semibold text-slate-700">
                Abhi koi job opening available nahi hai.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Add New Job button se pehli job create karo.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-2">
              {careers.map((career) => {
                const isOpen = career.status === "Open";

                return (
                  <article
                    key={career.id}
                    className="flex flex-col rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <FiBriefcase className="text-cyan-600" />

                          <span className="text-sm font-semibold text-cyan-700">
                            {career.department || "General"}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">
                          {career.jobTitle || "Untitled Position"}
                        </h3>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isOpen
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {career.status || "Closed"}
                      </span>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
                        <FiMapPin />
                        {career.location || "Location not available"}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
                        {career.employmentType || "Full Time"}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
                        {career.experience || "Experience not specified"}
                      </span>
                    </div>

                    <p className="mb-6 flex-1 whitespace-pre-line leading-7 text-slate-600">
                      {career.description || "No job description available."}
                    </p>

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
                      <button
                        type="button"
                        onClick={() => handleStatusToggle(career)}
                        className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                          isOpen
                            ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        {isOpen ? "Close Job" : "Open Job"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEdit(career)}
                        className="flex items-center justify-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                      >
                        <FiEdit2 />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(career.id)}
                        className="flex items-center justify-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        <FiTrash2 />
                        Delete
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCareers;