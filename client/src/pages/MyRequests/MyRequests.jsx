import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      const res = await API.get("/request/my");

      setRequests(res.data.requests || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getBadge = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">My Requests</h1>

          {loading ? (
            <div className="bg-white rounded-xl shadow p-6">
              Loading...
            </div>
          ) : requests.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-6">
              You haven't requested any food yet.
            </div>
          ) : (
            <div className="space-y-5">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="bg-white rounded-xl shadow p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {request.food?.foodName}
                      </h2>

                      <p className="text-gray-500">
                        Quantity : {request.food?.quantity}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${getBadge(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <p>
                      <strong>Restaurant:</strong>{" "}
                      {request.food?.donor?.name}
                    </p>

                    <p>
                      <strong>Pickup:</strong>{" "}
                      {request.food?.pickupLocation}
                    </p>

                    <p>
                      <strong>Expiry:</strong>{" "}
                      {new Date(
                        request.food?.expiryTime
                      ).toLocaleString()}
                    </p>

                    <p>
                      <strong>Requested On:</strong>{" "}
                      {new Date(
                        request.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>

                  {request.food?.description && (
                    <div className="mt-4">
                      <p className="font-semibold mb-1">
                        Description
                      </p>

                      <p className="text-gray-600">
                        {request.food.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyRequests;