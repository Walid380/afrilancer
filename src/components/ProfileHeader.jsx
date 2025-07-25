const ProfileHeader = ({ user }) => (
  <div className="relative">
    <img 
      src={user.coverImage} 
      alt="Cover" 
      className="w-full h-48 object-cover"
    />
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-end relative -top-16">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="w-32 h-32 rounded-full border-4 border-white"
        />
        <div className="ml-6 mb-4">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.title}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>{user.location}</span>
            <span className="mx-2">•</span>
            <span>{user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader ;