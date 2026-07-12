function StatsCard({ title, value, color, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-gray-500 text-sm">
            {title}
          </h3>

          <h1 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h1>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;