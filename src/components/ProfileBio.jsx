import Profile from "../pages/profile";

const ProfileBio = ({ bio }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold mb-3">About</h3>
    <p className="text-gray-700">{bio}</p>
  </div>
);

export default ProfileBio ;