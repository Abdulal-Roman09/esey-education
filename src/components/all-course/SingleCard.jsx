"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const finalPrice = course.price - (course.price * course.discount) / 100;

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 group">
      {/* Thumbnail */}
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {course.discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            -{course.discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-green-600 transition-colors">
          {course.title}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <User size={14} className="mr-1" />
          <span>{course.instructor}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{course.rating}</span>
          <span className="text-gray-400 ml-1">
            ({course.students} students)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ${finalPrice.toFixed(2)}
          </span>
          {course.discount > 0 && (
            <span className="line-through text-gray-400">${course.price}</span>
          )}
        </div>

        {/* Action Button */}
        <Link href={`/all-couse/${course._id}`}>
          <Button
            variant="outline"
            className="w-full justify-between rounded-xl font-medium group-hover:border-green-500 group-hover:text-green-600 transition-colors"
          >
            View Details
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
