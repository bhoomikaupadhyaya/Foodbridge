import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function RestaurantRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await API.get("/request/restaurant");

      setRequests(res.data.requests || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/request/${id}`, { status });

      fetchRequests();
    } catch (err) {
      console.log(err);
    }
  };

  const badgeColor = (status) => {
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
          <h1 className="text-3xl font-bold mb-8">
            Food Requests
          </h1>

          {loading ? (
            <div className="bg-white p-6 rounded-xl shadow">
              Loading...
            </div>
          ) : requests.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow">
              No requests found.
            </div>
          ) : (
            <div className="space-y-5">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="bg-white rounded-xl shadow p-6"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {request.food.foodName}
                      </h2>

                      <p className="text-gray-500">
                        Requested by {request.ngo.name}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${badgeColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mt-5">
                    <p>
                      <strong>NGO:</strong>{" "}
                      {request.ngo.name}
                    </p>

                    <p>
                      <strong>Email:</strong>{" "}
                      {request.ngo.email}
                    </p>

                    <p>
                      <strong>Food Quantity:</strong>{" "}
                      {request.food.quantity}
                    </p>

                    <p>
                      <strong>Pickup:</strong>{" "}
                      {request.food.pickupLocation}
                    </p>

                    <p>
                      <strong>Requested On:</strong>{" "}
                      {new Date(
                        request.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>

                  {request.status === "Pending" && (
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={() =>
                          updateStatus(
                            request._id,
                            "Accepted"
                          )
                        }
                        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            request._id,
                            "Rejected"
                          )
                        }
                        className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                      >
                        Reject
                      </button>
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

export default RestaurantRequests;