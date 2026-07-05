import { useState } from "react";
import axios from "axios";
import { FiX, FiUpload, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleResumeChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setMessage("Please upload only a PDF resume.");
      setMessageType("error");
      setResume(null);
      event.target.value = "";
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setMessage("Resume file must be less than 5 MB.");
      setMessageType("error");
      setResume(null);
      event.target.value = "";
      return;
    }

    setResume(selectedFile);
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!resume) {
      setMessage("Please upload your PDF resume.");
      setMessageType("error");
      return;
    }

    if (formData.phone.trim().length < 10) {
      setMessage("Please enter a valid phone number.");
      setMessageType("error");
      return;
    }

    const applicationData = new FormData();

    applicationData.append("fullName", formData.fullName);
    applicationData.append("email", formData.email);
    applicationData.append("phone", formData.phone);
    applicationData.append("experience", formData.experience);
    applicationData.append("currentCompany", formData.currentCompany);
    applicationData.append("expectedSalary", formData.expectedSalary);
    applicationData.append(
      "coverLetter",
      `Applying for: ${jobTitle}\n\n${formData.coverLetter}`
    );
    applicationData.append("resume", resume);

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post(
        "http://localhost:8080/api/careers/apply",
        applicationData
      );

      setMessage(response.data.message || "Application submitted successfully.");
      setMessageType("success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        currentCompany: "",
        expectedSalary: "",
        coverLetter: "",
      });

      setResume(null);

      setTimeout(() => {
        onClose();
        setMessage("");
      }, 1800);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Application submission failed. Please try again.";

      setMessage(errorMessage);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
          aria-label="Close application form"
        >
          <FiX size={20} />
        </button>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
          Career Application
        </p>

        <h2 className="mb-2 pr-10 text-2xl font-bold text-white md:text-3xl">
          Apply for {jobTitle}
        </h2>

        <p className="mb-7 text-sm leading-6 text-slate-400">
          Fill in your details and upload your latest resume in PDF format.
        </p>

        {message && (
          <div
            className={`mb-5 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
              messageType === "success"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                : "border-red-500/40 bg-red-500/10 text-red-300"
            }`}
          >
            {messageType === "success" ? (
              <FiCheckCircle size={18} />
            ) : (
              <FiAlertCircle size={18} />
            )}

            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name <span className="text-cyan-400">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email Address <span className="text-cyan-400">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Phone Number <span className="text-cyan-400">*</span>
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Experience <span className="text-cyan-400">*</span>
              </label>

              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                placeholder="Example: 2 Years"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Current Company
              </label>

              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleChange}
                placeholder="Current company name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Expected Salary
              </label>

              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                placeholder="Example: ₹4.5 LPA"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Upload Resume <span className="text-cyan-400">*</span>
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-cyan-400/50 bg-cyan-400/5 px-4 py-5 text-sm text-slate-300 transition hover:bg-cyan-400/10">
              <FiUpload className="text-cyan-400" size={20} />

              <span>
                {resume
                  ? resume.name
                  : "Choose PDF resume (maximum 5 MB)"}
              </span>

              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleResumeChange}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Cover Letter
            </label>

            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us briefly why you are a good fit for this role..."
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting Application..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;