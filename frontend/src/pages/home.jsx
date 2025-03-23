
import { Search, ChevronRight, Play, Star, Globe, Award } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Navbar } from "./navbar"
import noteimg from "../components/images/notesimg.png"
import laptop from "../components/images/Laptop.jpg"

export function HomePage() {

//   const handlePayment = async (unitId) => {
//     try {
//         const response = await fetch("http://localhost:5000/payment/create", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ unitId }),
//             credentials: "include",
//         });

//         const data = await response.json();
//         if (data.success) {
//             const razorpayOptions = {
//                 key: "YOUR_RAZORPAY_KEY",
//                 amount: 1000 * 100, // Amount in paise
//                 currency: "INR",
//                 name: "Notes Purchase",
//                 description: "Get access to study material",
//                 order_id: data.orderId,
//                 handler: async function (paymentData) {
//                     await verifyPayment(unitId, paymentData);
//                 },
//                 prefill: {
//                     email: "user@example.com",
//                 },
//                 theme: { color: "#3399cc" },
//             };

//             const rzp = new window.Razorpay(razorpayOptions);
//             rzp.open();
//         } else {
//             alert("Payment failed: " + data.message);
//         }
//     } catch (error) {
//         console.error("Error processing payment:", error);
//     }
// };

// const verifyPayment = async (unitId, paymentDetails) => {
//   try {
//       const userId = localStorage.getItem("userId"); // Get user ID from local storage

//       const response = await fetch("http://localhost:5000/payment/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ unitId, userId, ...paymentDetails }),
//           credentials: "include",
//       });

//       const data = await response.json();
//       if (data.success) {
//           alert("Payment successful! You can now access the notes.");
//           fetchPDF(unitId); // Fetch PDF URL
//       } else {
//           alert("Payment verification failed!");
//       }
//   } catch (error) {
//       console.error("Error verifying payment:", error);
//   }
// };

// const fetchPDF = async (unitId) => {
//   try {
//       const userId = localStorage.getItem("userId");

//       const response = await fetch(`http://localhost:5000/units/pdf/${unitId}?userId=${userId}`);
//       const data = await response.blob(); // Convert to PDF file

//       if (response.ok) {
//           const pdfUrl = URL.createObjectURL(data);
//           window.open(pdfUrl, "_blank"); // Open PDF in new tab
//       } else {
//           alert("Access denied: " + data.message);
//       }
//   } catch (error) {
//       console.error("Error fetching PDF:", error);
//   }
// };


  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-12 md:py-8 px-8">
          <div className="container grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn Anything, On Your Schedule</h1>
              <p className="text-xl text-gray-600">
                Access over 210,000 courses taught by real-world experts. Start learning today.
              </p>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input
                  type="search"
                  placeholder="What do you want to learn?"
                  className="w-full pl-10 h-12 rounded-md"
                />
                <Button className="absolute right-1 top-1 h-10 bg-blue-600 hover:bg-blue-700">Search</Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src={laptop}
                alt="Students learning"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-8 bg-white border-y">
          <div className="container">
            <p className="text-center text-gray-600 mb-6">
              Trusted by over 100 Colleges and millions of learners around the world
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {["SCOE", "SKN", "NBN", "COEP", "PICT"].map((company) => (
                <div key={company} className="flex items-center justify-center">
                  <p className="text-lg font-semibold text-gray-500">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-12 md:py-24 px-8">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
              <Button variant="div" className="gap-1 text-blue-600">
                View all courses <ChevronRight className="h-4 w-4" />
              </Button>
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
                    {/* <button
                        onClick={() => handlePayment(course.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                        Buy Notes
                    </button> */}
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

        {/* Features Section */}
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Learn with ScoeN</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join millions of students around the world learning skills for the future
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn at Your Own Pace</h3>
                <p className="text-gray-600">
                  Access courses on-demand, learn on your schedule, and set your own deadlines.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry experts who are passionate about teaching and sharing their knowledge.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certificates</h3>
                <p className="text-gray-600">
                  Earn certificates upon completion to showcase your newly acquired skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-gray-100 px-8">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What Our Students Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Chen",
                  role: "Software Developer",
                  content:
                    "The web development course was exactly what I needed to transition into tech. Within 3 months of completing it, I landed my first developer job.",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Priya Sharma",
                  role: "Marketing Specialist",
                  content:
                    "ScoeN's digital marketing courses helped me stay ahead in my field. The instructors are industry professionals who provide real-world insights.",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "David Wilson",
                  role: "UX Designer",
                  content:
                    "The design courses on ScoeN are comprehensive and practical. I was able to build a portfolio that helped me secure freelance clients.",
                  image: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center gap-4 mb-4">
                    {/* <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    /> */}
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-gray-100 px-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                {/* <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="ScoeN Logo"
                  width={32}
                  height={32}
                  className="rounded"
                /> */}
                ScoeN
              </div>
              <p className="text-sm text-gray-600 mb-4">Learn from anywhere, anytime. Access courses on-demand.</p>
              <div className="flex gap-4">
                <div className="text-gray-500 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="text-gray-500 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                <div className="text-gray-500 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="text-gray-500 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <div className="text-sm text-gray-600 hover:text-gray-900">
                    Popular Courses
                  </div>
                </li>
                <li>
                  <div className="text-sm text-gray-600 hover:text-gray-900">
                    Categories
                  </div>
                </li>
                <li>
                  <div className="text-sm text-gray-600 hover:text-gray-900">
                    Free Courses
                  </div>
                </li>
                <li>
                  <div className="text-sm text-gray-600 hover:text-gray-900">
                    ScoeN Pro
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    About Us
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Careers
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Blog
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Partners
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Help Center
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Contact Us
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Teach</h3>
              <ul className="space-y-2">
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Become an Instructor
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Instructor Resources
                  </div>
                </li>
                <li>
                  <div  className="text-sm text-gray-600 hover:text-gray-900">
                    Affiliate Program
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} ScoeN, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <div  className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </div>
              <div  className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </div>
              <div  className="text-sm text-gray-600 hover:text-gray-900">
                Cookie Settings
              </div>
              <div  className="text-sm text-gray-600 hover:text-gray-900">
                Sitemap
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
