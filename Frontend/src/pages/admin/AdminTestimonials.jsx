import { useEffect, useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const API_URL = "http://localhost:8080/api/testimonials";

const initialFormData = {
  name: "",
  designation: "",
  company: "",
  message: "",
  rating: 5,
  imageUrl: "",
  approved: true,
};

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Testimonials load nahi hue.");
      }

      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      console.error("Fetch testimonials error:", err);
      setError(
        "Testimonials load nahi hue. Backend server aur API check karo."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rating"
            ? Number(value)
            : value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId(null);
    setShowForm(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setError("Client name enter karo.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Testimonial message enter karo.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Testimonial save nahi hua.");
      }

      setSuccessMessage(
        editingId
          ? "Testimonial successfully update ho gaya."
          : "Testimonial successfully add ho gaya."
      );

      resetForm();
      await fetchTestimonials();
    } catch (err) {
      console.error("Save testimonial error:", err);
      setError(
        "Testimonial save nahi hua. Backend entity aur service check karo."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name || testimonial.clientName || "",
      designation: testimonial.designation || "",
      company: testimonial.company || "",
      message: testimonial.message || testimonial.feedback || "",
      rating: testimonial.rating || 5,
      imageUrl: testimonial.imageUrl || "",
      approved:
        testimonial.approved === undefined ? true : testimonial.approved,
    });

    setEditingId(testimonial.id);
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
      "Kya tum is testimonial ko delete karna chahte ho?"
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
        throw new Error("Testimonial delete nahi hua.");
      }

      setTestimonials((previousTestimonials) =>
        previousTestimonials.filter(
          (testimonial) => testimonial.id !== id
        )
      );

      setSuccessMessage("Testimonial successfully delete ho gaya.");
    } catch (err) {
      console.error("Delete testimonial error:", err);
      setError(
        "Testimonial delete nahi hua. Backend API check karo."
      );
    }
  };

  const handleApprovalChange = async (testimonial) => {
    try {
      setError("");
      setSuccessMessage("");

      const updatedTestimonial = {
        name: testimonial.name || testimonial.clientName || "",
        designation: testimonial.designation || "",
        company: testimonial.company || "",
        message: testimonial.message || testimonial.feedback || "",
        rating: testimonial.rating || 5,
        imageUrl: testimonial.imageUrl || "",
        approved: !testimonial.approved,
      };

      const response = await fetch(
        `${API_URL}/${testimonial.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTestimonial),
        }
      );

      if (!response.ok) {
        throw new Error("Approval status update nahi hua.");
      }

      setSuccessMessage(
        updatedTestimonial.approved
          ? "Testimonial public website ke liye approve ho gaya."
          : "Testimonial public website se hide ho gaya."
      );

      await fetchTestimonials();
    } catch (err) {
      console.error("Approval update error:", err);
      setError(
        "Approval status update nahi hua. TestimonialService check karo."
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
              Manage Testimonials
            </h1>

            <p className="mt-2 text-slate-500">
              Client testimonials ko add, edit, approve aur delete karo.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (showForm) {
                resetForm();
              } else {
                setShowForm(true);
                setEditingId(null);
                setFormData(initialFormData);
                setError("");
                setSuccessMessage("");
              }
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            {showForm ? <FiX /> : <FiPlus />}

            {showForm ? "Close Form" : "Add Testimonial"}
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

        {/* Add/Edit Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {editingId
                  ? "Edit Testimonial"
                  : "Add New Testimonial"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Client testimonial की details enter करो।
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Client Name *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Example: Rahul Sharma"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Designation
                </label>

                <input
                  id="designation"
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="Example: Project Manager"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Example: ABC Telecom"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Rating
                </label>

                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="imageUrl"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Client Image URL
                </label>

                <input
                  id="imageUrl"
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/client-image.jpg"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Testimonial Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Client का feedback यहाँ enter करो..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    name="approved"
                    checked={formData.approved}
                    onChange={handleInputChange}
                    className="h-5 w-5 accent-cyan-600"
                  />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Approved
                    </p>

                    <p className="text-sm text-slate-500">
                      Approved testimonial public website पर दिखाया जा
                      सकता है।
                    </p>
                  </div>
                </label>
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
                    ? "Update Testimonial"
                    : "Save Testimonial"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Testimonials List */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                All Testimonials
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Total testimonials: {testimonials.length}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-500">
              Testimonials loading...
            </div>
          ) : testimonials.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">
              <p className="font-semibold text-slate-700">
                Abhi koi testimonial available nahi hai.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Add Testimonial button से पहला testimonial add करो।
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial) => {
                const testimonialName =
                  testimonial.name ||
                  testimonial.clientName ||
                  "Unknown Client";

                const testimonialMessage =
                  testimonial.message ||
                  testimonial.feedback ||
                  "No feedback available";

                const isApproved =
                  testimonial.approved === undefined
                    ? true
                    : testimonial.approved;

                return (
                  <article
                    key={testimonial.id}
                    className="flex flex-col rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {testimonial.imageUrl ? (
                          <img
                            src={testimonial.imageUrl}
                            alt={testimonialName}
                            className="h-14 w-14 rounded-full object-cover"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-700">
                            {testimonialName.charAt(0).toUpperCase()}
                          </div>
                        )}

                        <div>
                          <h3 className="font-bold text-slate-900">
                            {testimonialName}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {testimonial.designation || "Client"}
                            {testimonial.company
                              ? `, ${testimonial.company}`
                              : ""}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isApproved
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {isApproved ? "Approved" : "Hidden"}
                      </span>
                    </div>

                    <div className="mb-4 text-amber-500">
                      {"★".repeat(testimonial.rating || 5)}
                      <span className="text-slate-300">
                        {"★".repeat(
                          Math.max(
                            0,
                            5 - (testimonial.rating || 5)
                          )
                        )}
                      </span>
                    </div>

                    <p className="mb-6 flex-1 leading-7 text-slate-600">
                      “{testimonialMessage}”
                    </p>

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          handleApprovalChange(testimonial)
                        }
                        className="flex items-center justify-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                        title={
                          isApproved
                            ? "Hide testimonial"
                            : "Approve testimonial"
                        }
                      >
                        {isApproved ? <FiEyeOff /> : <FiEye />}
                        {isApproved ? "Hide" : "Show"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEdit(testimonial)}
                        className="flex items-center justify-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                      >
                        <FiEdit2 />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(testimonial.id)
                        }
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

export default AdminTestimonials;