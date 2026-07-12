import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await API.get("/auth/profile");
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex bg-gray-100 min-h-screen">
          <Sidebar />
          <div className="flex-1 p-8">
            <div className="bg-white rounded-xl shadow p-6">
              Loading...
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">
            My Profile
          </h1>

          <div className="bg-white rounded-xl shadow p-8 max-w-3xl">

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">
                {user.fullName.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {user.fullName}
                </h2>

                <p className="text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-gray-500 text-sm">
                  Full Name
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50">
                  {user.fullName}
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Email
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50">
                  {user.email}
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Phone
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50">
                  {user.phone}
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Role
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50 capitalize">
                  {user.role}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-gray-500 text-sm">
                  Address
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50">
                  {user.address || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Verified
                </label>

                <div className="mt-1">
                  {user.isVerified ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      Verified
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                      Pending
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-sm">
                  Joined On
                </label>

                <div className="mt-1 border rounded-lg p-3 bg-gray-50">
                  {new Date(user.createdAt).toLocaleDateString()}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;