import dbConnect from "@/lib/dbConnection";
import CourseCard from "./SingleCard";

const AllCourses = async () => {
  const courseCollection = dbConnect("courses");
  const courses = await courseCollection.find({}).toArray();

  // Convert MongoDB ObjectId & Date into plain JSON
  const plainCourses = courses.map((course) => ({
    ...course,
    _id: course._id.toString(),  // ObjectId → string
    createdAt: course.createdAt?.toString() || null,
    updatedAt: course.updatedAt?.toString() || null,
  }));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plainCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
