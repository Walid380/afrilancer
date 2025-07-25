const ProfileStats = ({ stats }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold mb-4">Stats</h3>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold">{stats.completedProjects}</p>
        <p className="text-gray-500 text-sm">Projects</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{stats.clientSatisfaction}%</p>
        <p className="text-gray-500 text-sm">Satisfaction</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{stats.activeClients}</p>
        <p className="text-gray-500 text-sm">Clients</p>
      </div>
    </div>
  </div>
);

export default ProfileStats ;