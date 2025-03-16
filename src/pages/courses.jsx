import React from 'react'
import { Button } from '../components/ui/button'
import { Play, Star } from 'lucide-react'
import { Studentnav } from './student/studentnav'
import noteimg from '../components/images/notesimg.png'

export function Courses() {
  return (
    <div>
      <Studentnav />
      <section className="py-12 md:py-24 px-8">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Complete Web Development Bootcamp",
                instructor: "Jane Smith",
                rating: 4.8,
                reviews: 12453,
                price: "₹89.99",
                image: noteimg,
              },
              {
                title: "Complete Web Development Bootcamp",
                instructor: "Jane Smith",
                rating: 4.8,
                reviews: 12453,
                price: "₹89.99",
                image: noteimg,
              },
              {
                title: "Complete Web Development Bootcamp",
                instructor: "Jane Smith",
                rating: 4.8,
                reviews: 12453,
                price: "₹89.99",
                image: noteimg,
              },
              {
                title: "Data Science and Machine Learning",
                instructor: "John Doe",
                rating: 4.7,
                reviews: 8932,
                price: "₹89.99",
                image: noteimg,
              },
              {
                title: "UI/UX Design Masterclass",
                instructor: "Alex Johnson",
                rating: 4.9,
                reviews: 5621,
                price: "₹79.99",
                image: noteimg,
              },
              {
                title: "Digital Marketing Fundamentals",
                instructor: "Sarah Williams",
                rating: 4.6,
                reviews: 7845,
                price: "₹69.99",
                image: noteimg,
              },
            ].map((course, index) => (
              <div
                key={index}
                className="group border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Button variant="secondary" size="sm" className="gap-1">
                      <Play className="h-4 w-4" /> Preview
                    </Button>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold line-clamp-2 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="font-bold text-amber-500">{course.rating}</span>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(course.rating) ? "fill-amber-500 text-amber-500" : "text-gray-400"}`}
                          />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="mt-auto">
                    <p className="font-bold">{course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
