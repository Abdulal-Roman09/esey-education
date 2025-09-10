

import dbConnect from "@/lib/dbConnection";
import CourseCard from "./SingleCard";

const AllCourses = async () => {
  const courseCollaction = dbConnect("courses");
  const courses = await courseCollaction.find({}).toArray();
  console.log(courses);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
