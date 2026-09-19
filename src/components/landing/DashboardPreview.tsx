import {
  Activity,
  Calendar,
  FileText,
  Pill,
} from "lucide-react";
import { motion } from "framer-motion";

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Dashboard
          </h2>

          <p className="text-sm text-slate-500">
            Welcome back, Sarah
          </p>
        </div>

        <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Healthy
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Card
          icon={<Activity className="text-blue-600" />}
          title="Health Score"
          value="92%"
        />

        <Card
          icon={<FileText className="text-blue-600" />}
          title="Reports"
          value="18"
        />

        <Card
          icon={<Pill className="text-blue-600" />}
          title="Medicines"
          value="3 Active"
        />

        <Card
          icon={<Calendar className="text-blue-600" />}
          title="Appointment"
          value="12 Aug"
        />
      </div>
    </motion.div>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function Card({ icon, title, value }: CardProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50">
      <div className="mb-4">{icon}</div>

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-xl font-bold text-blue-600">
        {value}
      </p>
    </div>
  );
}

export default DashboardPreview;