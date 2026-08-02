import {
  FileText,
  Brain,
  Pill,
  QrCode,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A complete digital healthcare platform powered by AI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon={<FileText size={28} />}
            title="Medical Records"
            description="Store all your prescriptions, reports and documents securely."
          />

          <FeatureCard
            icon={<Brain size={28} />}
            title="AI Summaries"
            description="Understand complex medical reports in simple language."
          />

          <FeatureCard
            icon={<Pill size={28} />}
            title="Medicine Reminder"
            description="Never miss your medicines with smart reminders."
          />

          <FeatureCard
            icon={<QrCode size={28} />}
            title="Emergency QR"
            description="Share critical health information instantly during emergencies."
          />

        </div>

      </div>
    </section>
  );
}

export default Features;