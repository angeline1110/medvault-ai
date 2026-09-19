
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Download,
  Eye,
  FileText,
  Search,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type MedicalRecord = {
  id: number;
  title: string;
  record_type: string;
  record_date: string | null;
  status: string;
  user_id: number;
  file_name: string | null;
};

function MedicalRecordsPage() {
  const navigate = useNavigate();

  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadType, setUploadType] = useState("Blood Test");
  const [uploadDate, setUploadDate] = useState("");

  const [uploading, setUploading] = useState(false);

  // -----------------------------------------
  // Fetch medical records
  // -----------------------------------------

  const fetchRecords = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/medical-records/"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch medical records");
      }

      const data = await response.json();

      setRecords(data);
    } catch (error) {
      console.error("Error fetching medical records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // -----------------------------------------
  // Select file
  // -----------------------------------------

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select a PDF, JPG or PNG file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10 MB.");
      return;
    }

    setSelectedFile(file);

    // Automatically use filename as title if title is empty
    if (!uploadTitle) {
      setUploadTitle(
        file.name.replace(/\.[^/.]+$/, "")
      );
    }
  };

  // -----------------------------------------
  // Upload medical record
  // -----------------------------------------

  const uploadRecord = async () => {
    if (!uploadTitle.trim()) {
      alert("Please enter a record title.");
      return;
    }

    if (!uploadDate) {
      alert("Please select a record date.");
      return;
    }

    if (!selectedFile) {
      alert("Please choose a file first.");
      return;
    }

    const formData = new FormData();

    formData.append("title", uploadTitle);

    formData.append(
      "record_type",
      uploadType
    );

    formData.append(
      "record_date",
      uploadDate
    );

    formData.append(
      "file",
      selectedFile
    );

    try {
      setUploading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/medical-records/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      await response.json();

      alert("Medical record uploaded successfully!");

      // Reset form
      setSelectedFile(null);
      setUploadTitle("");
      setUploadType("Blood Test");
      setUploadDate("");

      await fetchRecords();
    } catch (error) {
      console.error("Upload error:", error);

      alert("Failed to upload medical record.");
    } finally {
      setUploading(false);
    }
  };

  // -----------------------------------------
  // Download
  // -----------------------------------------

  const downloadRecord = async (
    record: MedicalRecord
  ) => {
    if (!record.file_name) {
      alert("No file is attached to this record.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/medical-records/${record.id}/download`
      );

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        record.file_name;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(
        "Download error:",
        error
      );

      alert(
        "Failed to download medical record."
      );
    }
  };

  // -----------------------------------------
  // Search
  // -----------------------------------------

  const filteredRecords =
    records.filter((record) =>
      record.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100"
            >
              <ArrowLeft size={20} />
            </button>

            <div>

              <h1 className="text-2xl font-bold text-slate-900">
                Medical Records
              </h1>

              <p className="text-sm text-slate-500">
                Manage and access your medical documents
              </p>

            </div>

          </div>

        </div>

      </header>


      {/* Main */}

      <main className="mx-auto max-w-7xl px-6 py-8">


        {/* Search */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search medical records..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
            />

          </div>

        </div>


        {/* Summary */}

        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <FileText size={22} />

            </div>

            <p className="mt-4 text-sm text-slate-500">
              Total Records
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">
              {records.length}
            </p>

          </div>


          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

              <FileText size={22} />

            </div>

            <p className="mt-4 text-sm text-slate-500">
              Blood Tests
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">

              {
                records.filter(
                  (record) =>
                    record.record_type
                      .toLowerCase() ===
                    "blood test"
                ).length
              }

            </p>

          </div>


          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">

              <Upload size={22} />

            </div>

            <p className="mt-4 text-sm text-slate-500">
              Available
            </p>

            <p className="mt-1 text-3xl font-bold text-slate-900">

              {
                records.filter(
                  (record) =>
                    record.status ===
                    "Available"
                ).length
              }

            </p>

          </div>

        </div>


        {/* Records */}

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

          <div className="border-b border-slate-100 px-6 py-5">

            <h2 className="font-semibold text-slate-900">
              Your Medical Records
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              All your health documents in one secure place.
            </p>

          </div>


          {loading ? (

            <div className="px-6 py-12 text-center text-slate-500">
              Loading medical records...
            </div>

          ) : filteredRecords.length === 0 ? (

            <div className="px-6 py-12 text-center">

              <FileText
                size={40}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 font-medium text-slate-700">
                No medical records found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Upload your first medical record to get started.
              </p>

            </div>

          ) : (

            <div className="divide-y divide-slate-100">

              {filteredRecords.map(
                (record) => (

                  <div
                    key={record.id}
                    className="flex flex-col gap-4 px-6 py-5 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                        <FileText size={22} />

                      </div>

                      <div>

                        <h3 className="font-medium text-slate-900">
                          {record.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">

                          {record.record_type} -{" "}

                          {record.record_date ||
                            "No date"}

                        </p>

                        {record.file_name && (

                          <p className="mt-1 text-xs text-slate-400">
                            {record.file_name}
                          </p>

                        )}

                      </div>

                    </div>


                    <div className="flex items-center gap-4">

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                        {record.status}
                      </span>


                      {/* View */}

                      <button
                        title="View record"
                        onClick={() => {

                          if (
                            !record.file_name
                          ) {

                            alert(
                              "No file is attached to this record."
                            );

                            return;

                          }

                          window.open(
                            `http://127.0.0.1:8000/medical-records/${record.id}/view`,
                            "_blank"
                          );

                        }}
                        disabled={
                          !record.file_name
                        }
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >

                        <Eye size={19} />

                      </button>


                      {/* Download */}

                      <button
                        title="Download record"
                        onClick={() =>
                          downloadRecord(
                            record
                          )
                        }
                        disabled={
                          !record.file_name
                        }
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >

                        <Download size={19} />

                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>


        {/* Upload Form */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <Upload size={22} />

            </div>

            <div>

              <h2 className="text-lg font-semibold text-slate-900">
                Upload a medical record
              </h2>

              <p className="text-sm text-slate-500">
                Add a document to your secure medical records.
              </p>

            </div>

          </div>


          {/* Form */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">


            {/* Title */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Record Title
              </label>

              <input
                type="text"
                placeholder="e.g. Complete Blood Count"
                value={uploadTitle}
                onChange={(e) =>
                  setUploadTitle(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>


            {/* Type */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Record Type
              </label>

              <select
                value={uploadType}
                onChange={(e) =>
                  setUploadType(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
              >

                <option>
                  Blood Test
                </option>

                <option>
                  Consultation
                </option>

                <option>
                  Imaging
                </option>

                <option>
                  Prescription
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            {/* Date */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Record Date
              </label>

              <input
                type="date"
                value={uploadDate}
                onChange={(e) =>
                  setUploadDate(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>


            {/* File */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Medical File
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-slate-300 px-4 py-3 transition hover:border-blue-400 hover:bg-blue-50">

                <span className="truncate text-sm text-slate-600">

                  {selectedFile
                    ? selectedFile.name
                    : "Choose a PDF, JPG or PNG"}

                </span>

                <span className="ml-4 shrink-0 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                  Browse
                </span>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={
                    handleFileUpload
                  }
                />

              </label>

            </div>

          </div>


          {/* Upload Button */}

          <div className="mt-6 flex justify-end">

            <button
              onClick={uploadRecord}
              disabled={
                uploading ||
                !selectedFile
              }
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {uploading
                ? "Uploading..."
                : "Upload Record"}

            </button>

          </div>


          <p className="mt-3 text-right text-xs text-slate-400">
            PDF, JPG, PNG - Maximum 10 MB
          </p>

        </div>

      </main>

    </div>
  );
}

export default MedicalRecordsPage;

