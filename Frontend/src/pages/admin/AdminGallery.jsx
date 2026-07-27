import { useEffect, useState } from "react";
import {
  FiCamera,
  FiEdit2,
  FiImage,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";

const API_URL = "http://localhost:8080/api/gallery";

const initialFormData = {
  title: "",
  imageUrl: "",
  category: "",
  description: "",
};

const AdminGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch gallery. Status: ${response.status}`);
      }

      const data = await response.json();
      setGalleryItems(data);
    } catch (fetchError) {
      console.error(fetchError);
      setError("Gallery images load nahi ho paayi. Backend API check karo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const handleOpenModal = () => {
    setEditingId(null);
    setFormData(initialFormData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingId(null);
    setFormData(initialFormData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.imageUrl.trim() ||
      !formData.category.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill in all gallery details.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const requestUrl =
        editingId !== null ? `${API_URL}/${editingId}` : API_URL;

      const requestMethod = editingId !== null ? "PUT" : "POST";

      const response = await fetch(requestUrl, {
        method: requestMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed. Status: ${response.status}`);
      }

      await fetchGalleryItems();
      handleCloseModal();
    } catch (submitError) {
      console.error(submitError);
      setError("Gallery item save nahi hua. Backend API check karo.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setFormData({
      title: item.title || "",
      imageUrl: item.imageUrl || "",
      category: item.category || "",
      description: item.description || "",
    });

    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this gallery item?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Delete failed. Status: ${response.status}`);
      }

      setGalleryItems((previousItems) =>
        previousItems.filter((item) => item.id !== id)
      );
    } catch (deleteError) {
      console.error(deleteError);
      setError("Gallery item delete nahi hua. Backend API check karo.");
    }
  };

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

          <button
            type="button"
            onClick={handleOpenModal}
            className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-3 rounded-xl transition"
          >
            <FiPlus className="text-lg" />
            Add Gallery Image
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
            {error}
          </div>
        )}

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
              <span className="text-cyan-400 font-semibold">
                {galleryItems.length}
              </span>
            </p>
          </div>

          {loading ? (
            <div className="py-16 text-center text-slate-400">
              Loading gallery...
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="border border-dashed border-slate-700 rounded-2xl py-16 px-5 text-center">
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

              <button
                type="button"
                onClick={handleOpenModal}
                className="mt-6 inline-flex items-center gap-2 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold px-5 py-3 rounded-xl transition"
              >
                <FiCamera />
                Upload First Image
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {galleryItems.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
                >
                  <div className="aspect-video bg-slate-800 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-400 font-semibold">
                      {item.category}
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-3 leading-6">
                      {item.description}
                    </p>

                    <div className="flex justify-end gap-2 mt-5">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition"
                        title="Edit gallery item"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="p-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
                        title="Delete gallery item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl my-6">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
                  Gallery Item
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {editingId !== null
                    ? "Edit Gallery Image"
                    : "Add Gallery Image"}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white text-2xl transition"
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Example: Telecom Tower Installation"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Image URL
                </label>

                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                >
                  <option value="">Select category</option>
                  <option value="Telecom Towers">Telecom Towers</option>
                  <option value="Fiber Networks">Fiber Networks</option>
                  <option value="Site Surveys">Site Surveys</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Team Operations">Team Operations</option>
                  <option value="Smart Infrastructure">
                    Smart Infrastructure
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Describe this project or field activity..."
                  className="w-full resize-none bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={saving}
                  className="px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingId !== null
                    ? "Update Image"
                    : "Add Image"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminGallery;