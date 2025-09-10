"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition rounded-2xl">
      {/* Thumbnail */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {course.title}
        </CardTitle>
        <p className="text-sm text-gray-500">{course.instructor}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <Star size={16} fill="currentColor" />
          <span>{course.rating}</span>
          <span className="text-gray-400 ml-1">({course.students} students)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ${course.price - (course.price * course.discount) / 100}
          </span>
          {course.discount > 0 && (
            <span className="line-through text-gray-400">${course.price}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
