function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Medical Records Stored",
    },
    {
      value: "99.9%",
      label: "Secure Cloud Storage",
    },
    {
      value: "24/7",
      label: "Emergency Access",
    },
    {
      value: "AI",
      label: "Smart Health Insights",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white p-8 text-center shadow-sm"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              {stat.value}
            </h3>

            <p className="mt-3 text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;