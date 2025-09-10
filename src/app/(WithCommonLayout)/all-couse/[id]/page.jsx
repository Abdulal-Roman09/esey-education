import dbConnect from "@/lib/dbConnection";
import { ObjectId } from "mongodb";

export default async function CourseDetails({ params }) {
  const { id } = params;

  // DB connect
  const collection = dbConnect("courses");
  const course = await collection.findOne({ _id: new ObjectId(id) });

  if (!course) {
    return <p className="text-center text-red-500">❌ Course not found!</p>;
  }

  // Final price with discount
  const finalPrice =
    course.price - (course.price * (course.discount || 0)) / 100;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-card shadow-lg rounded-lg p-6 space-y-4">
        {/* Thumbnail */}
        {course.thumbnail && (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}

        {/* Title & Description */}
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>

        {/* Meta Info */}
        <p className="text-sm text-gray-500">👨‍🏫 Instructor: {course.instructor}</p>
        <p className="text-sm text-gray-500">📂 Category: {course.category}</p>
        <p className="text-sm text-gray-500">⏳ Duration: {course.duration}</p>
        <p className="text-sm text-gray-500">📘 Lessons: {course.lessons}</p>
        <p className="text-sm text-gray-500">🎯 Level: {course.level}</p>
        <p className="text-sm text-gray-500">🌍 Language: {course.language}</p>

        {/* Price */}
        <p className="text-lg font-semibold text-green-600">
          ${finalPrice.toFixed(2)}{" "}
          {course.discount > 0 && (
            <span className="line-through text-gray-400 ml-2">
              ${course.price}
            </span>
          )}
        </p>

        {/* Certificate */}
        {course.certificate && (
          <p className="text-sm text-blue-500">✔ Certificate included</p>
        )}
      </div>
    </div>
  );
}
