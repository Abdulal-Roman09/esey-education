export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">320</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Courses</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">24</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Assignments</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">58</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Instructors</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">12</p>
        </div>
      </div>

      {/* Recent activity */}
      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li>✅ New student registered</li>
          <li>📚 New course “React for Beginners” added</li>
          <li>📝 Assignment submitted by Alice</li>
          <li>👨‍🏫 Instructor John updated course syllabus</li>
        </ul>
      </div>
    </div>
  );
}
