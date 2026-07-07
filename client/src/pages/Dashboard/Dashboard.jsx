import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500 text-lg">
                Total Donations
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-3">
                12
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500 text-lg">
                Food Requests
              </h2>

              <p className="text-4xl font-bold text-blue-600 mt-3">
                5
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500 text-lg">
                Completed Donations
              </h2>

              <p className="text-4xl font-bold text-orange-500 mt-3">
                8
              </p>
            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow-lg rounded-xl mt-10 p-6">

            <h2 className="text-2xl font-semibold mb-5">
              Recent Activity
            </h2>

            <ul className="space-y-4">

              <li className="border-b pb-3">
                🍱 Rice & Curry donated
              </li>

              <li className="border-b pb-3">
                🥗 NGO accepted donation
              </li>

              <li className="border-b pb-3">
                🚚 Food delivered successfully
              </li>

            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;