"use client"

import { useState } from "react"
import { Heart, ChevronDown, ChevronUp, X } from "lucide-react"
import { useRouter } from "next/navigation"
import CourseGenerator from "@/components/course-generator" 
export default function CoursesPage() {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("Most Popular")
  const [showBanner, setShowBanner] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedFilters, setExpandedFilters] = useState<{ [key: string]: boolean }>({
    programs: true,
    price: true,
    school: false,
    skill: false,
    level: false,
    duration: false,
    type: false,
  })
  const [showGenerator, setShowGenerator] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState<string[]>([])

  // Update the handleCourseClick function to properly navigate to the DSA course
  const handleCourseClick = (courseId: number) => {
    // Navigate to the specific course pages when clicking on the courses
    if (courseId === 4) {
      router.push("/dashboard/courses/dsa-course")
    } else if (courseId === 13) {
      router.push("/dashboard/courses/marketing-data-course")
    } else if (courseId === 14) {
      router.push("/dashboard/courses/digital-advertising-course")
    }
  }

  const toggleFilter = (filter: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  const handlePriceChange = (price: string) => {
    setSelectedPrice((prev) => {
      if (prev.includes(price)) {
        return prev.filter((p) => p !== price)
      } else {
        return [...prev, price]
      }
    })
  }

  const slides = [
    {
      title: "Exceptional Course Quality",
      description: "Industry leading programs designed with the world's most innovative tech companies.",
      icon: "📚",
    },
    {
      title: "Expert Feedback and Advice",
      description: "24/7 access to industry experts who are there to support you every step of the way.",
      icon: "💬",
    },
  ]

  const firstRowCourses = [
    {
        id: 21,
        title: "Cooking Business",
        image: "/Cooking.jpeg",
        rating: 4.5,
        reviews: 420,
        hours: 30,
        level: "Advanced",
      },
    {
        id: 22,
        title: "Handmade Jwellery Business",
        image: "/handmade-jwellery.jpeg",
        rating: 4.1,
        reviews: 461,
        hours: 10,
        level: "Intermediate",
      },
    {
        id: 23,
        title: "English Speaking Course",
        image: "/english-speaking.jpeg",
        rating: 3.5,
        reviews: 550,
        hours: 70,
        level: "Beginner",
      },
    {
        id: 24,
        title: "Call Centre Training",
        image: "/call-centre.jpeg",
        rating: 5,
        reviews: 421,
        hours: 30,
        level: "Intermediate",
      },
    {
      id: 13,
      title: "Marketing Data and Technology",
      image: "/marketing-data-technology.jpg",
      rating: 4.5,
      reviews: 1017,
      hours: 15,
      level: "Beginner",
    },
    {
      id: 14,
      title: "Digital Advertising",
      image: "/digital-advertising.jpg",
      rating: 4.5,
      reviews: 1246,
      hours: 13,
      level: "Beginner",
    },
    {
      id: 15,
      title: "Data Preparation with Alteryx",
      image: "/data-preparation-alteryx.jpg",
      rating: 4.5,
      reviews: 1240,
      hours: 11,
      level: "Beginner",
    },
    {
      id: 16,
      title: "Email Marketing",
      image: "/email-marketing.jpg",
      rating: 4.5,
      reviews: 251,
      hours: 9,
      level: "Beginner",
    },
  ]

  const designCourses = [
    {
      id: 21,
      title: "2D Game Design and Development with Unity",
      image: "/game-design-unity.jpg",
      rating: 4.5,
      reviews: 876,
      hours: 40,
      level: "Beginner",
    },
    {
      id: 22,
      title: "Photo Editing and Web Design",
      image: "/photo-editing-web-design.jpg",
      rating: 4.5,
      reviews: 743,
      hours: 33,
      level: "Beginner",
    },
    {
      id: 23,
      title: "Video Editing",
      image: "/video-editing.jpg",
      rating: 4.5,
      reviews: 612,
      hours: 7,
      level: "Beginner",
    },
    {
      id: 24,
      title: "Web Design",
      image: "/web-design.jpg",
      rating: 4.5,
      reviews: 589,
      hours: 6,
      level: "Beginner",
    },
  ]

  const secondRowCourses = [
    {
      id: 9,
      title: "Data Analyst",
      image: "/abcd.jpg",
      rating: 4.5,
      reviews: 1231,
      hours: 43,
      level: "Intermediate",
    },
    {
      id: 10,
      title: "Introduction to Programming",
      image: "/intro-programming.jpg",
      rating: 4.5,
      reviews: 1333,
      hours: 109,
      level: "Beginner",
    },
    {
      id: 11,
      title: "Deep Learning",
      image: "/deep-learning.jpg",
      rating: 4.5,
      reviews: 962,
      hours: 61,
      level: "Intermediate",
    },
    {
      id: 12,
      title: "AI Programming with Python",
      image: "/ai.jpg",
      rating: 4.5,
      reviews: 620,
      hours: 73,
      level: "Beginner",
    },
  ]

  const thirdRowCourses = [
    {
      id: 1,
      title: "Discovering Artificial Intelligence and Machine Learning",
      image: "/ai-python.jpg",
      rating: 4.5,
      reviews: 805,
      hours: 1,
      level: "Discovery",
    },
    {
      id: 2,
      title: "C++",
      image: "/cpp-course.jpg",
      rating: 4.5,
      reviews: 804,
      hours: 62,
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Full Stack Web Developer",
      image: "/fullstack-course.jpg",
      rating: 4.5,
      reviews: 495,
      hours: 67,
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      image: "/dsa-course.jpg",
      rating: 4.5,
      reviews: 528,
      hours: 47,
      level: "Intermediate",
    },
  ]

  const fourthRowCourses = [
    {
      id: 17,
      title: "Discovering Ethical AI",
      image: "/ethical-ai.jpg",
      rating: 4.5,
      reviews: null,
      hours: 1,
      level: "Discovery",
    },
    {
      id: 18,
      title: "Computer Vision",
      image: "/computer-vision.jpg",
      rating: 4.5,
      reviews: 476,
      hours: 37,
      level: "Advanced",
    },
    {
      id: 19,
      title: "Cloud DevOps Engineer",
      image: "/cloud-devops.jpg",
      rating: 4.5,
      reviews: 461,
      hours: 53,
      level: "Intermediate",
    },
    {
      id: 20,
      title: "Cloud Developer",
      image: "/cloud-developer.jpg",
      rating: 4.5,
      reviews: 461,
      hours: 60,
      level: "Intermediate",
    },
    
  ]

//   const noImageCourses = [
//     {
//       id: 5,
//       title: "Developer",
//       image: "/abcd.jpg",
//       rating: 4.5,
//       reviews: 858,
//       hours: 37,
//       level: "Intermediate",
//     },
//     {
//       id: 6,
//       title: "Advanced Programming",
//       rating: 4.5,
//       reviews: 540,
//       hours: 97,
//       level: "Advanced",
//     },
//     {
//       id: 7,
//       title: "Web Fundamentals",
//       rating: 4.5,
//       reviews: 708,
//       hours: 51,
//       level: "Beginner",
//     },
//     {
//       id: 8,
//       title: "Processing",
//       rating: 4.5,
//       reviews: 308,
//       hours: 53,
//       level: "Advanced",
//     },
//   ]

  const filters = [
    {
      name: "Programs",
      type: "radio",
      options: [
        { value: "all", label: "All" },
        { value: "favorite", label: "Favorite" },
        { value: "enrolled", label: "Enrolled" },
      ],
    },
    {
      name: "Price",
      type: "checkbox",
      options: [
        { value: "free", label: "Free" },
        { value: "paid", label: "Paid" },
      ],
    },
    {
      name: "School",
      type: "checkbox",
      options: [
        { value: "all", label: "All" },
        { value: "university", label: "University" },
        { value: "industry", label: "Industry" },
        { value: "independent", label: "Independent" },
      ],
    },
    {
      name: "Skill",
      type: "checkbox",
      options: [
        { value: "all", label: "All" },
        { value: "programming", label: "Programming" },
        { value: "data-science", label: "Data Science" },
        { value: "design", label: "Design" },
        { value: "business", label: "Business" },
      ],
    },
    {
      name: "Level",
      type: "checkbox",
      options: [
        { value: "all", label: "All" },
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
      ],
    },
    {
      name: "Duration",
      type: "checkbox",
      options: [
        { value: "all", label: "All" },
        { value: "short", label: "< 20 hours" },
        { value: "medium", label: "20-50 hours" },
        { value: "long", label: "> 50 hours" },
      ],
    },
    {
      name: "Type",
      type: "checkbox",
      options: [
        { value: "all", label: "All" },
        { value: "self-paced", label: "Self-paced" },
        { value: "instructor-led", label: "Instructor-led" },
        { value: "hybrid", label: "Hybrid" },
      ],
    },
  ]

  const sortOptions = ["Most Popular", "Highest Rated", "Recently Updated"]

  const handleSortSelect = (option: string) => {
    setSelectedSort(option)
    setIsDropdownOpen(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const renderCourseCard = (course: any) => (
    <div
      key={course.id}
      className="border rounded-md overflow-hidden bg-white cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => handleCourseClick(course.id)}
    >
      {course.image && (
        <div className="relative">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-40 object-cover" />
          <button
            className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 min-h-[48px]">{course.title}</h3>

        {course.reviews !== null && (
          <div className="flex items-center mb-3">
            <div className="flex text-amber-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-gray-500 text-sm ml-2">
              {course.rating} ({course.reviews})
            </span>
          </div>
        )}

        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm text-gray-700">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>
              {course.hours} {course.hours === 1 ? "Hour" : "Hours"}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-700">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" />
              <path d="M4 9H20" stroke="currentColor" strokeWidth="2" />
              <path d="M8 5V9" stroke="currentColor" strokeWidth="2" />
              <path d="M16 5V9" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{course.level}</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNoImageCard = (course: any) => (
    <div key={course.id} className="border rounded-md overflow-hidden bg-white p-4">
      <h3 className="font-medium text-gray-900 mb-2">{course.title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex text-amber-400">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
        </div>
        <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 gap-4">
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>{course.hours} Hours</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 9H20" stroke="currentColor" strokeWidth="2" />
            <path d="M8 5V9" stroke="currentColor" strokeWidth="2" />
            <path d="M16 5V9" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>{course.level}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Promotional Banner */}
      {showBanner && (
        <div className="relative bg-teal-800 text-white p-4 text-center">
          <span className="font-medium">Limited-Time Offer: Save Big with a Personalized Discount – </span>
          <button className="font-bold underline">Claim Now</button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowBanner(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    
      {/* Feature Carousel */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-800 text-white p-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-2">
                Bootcamp level quality, <br />
                on your own time, <span className="text-lime-400">at a fraction of the cost.</span>
              </h2>
            </div>
            <div className="w-1/2 bg-white text-black p-4 rounded-lg">
              <div className="flex gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="text-2xl">{slides[currentSlide].icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{slides[currentSlide].title}</h3>
                  <p className="text-sm">{slides[currentSlide].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          onClick={prevSlide}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          onClick={nextSlide}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold ">All Programs</h1>
          
          
            <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
       <div>
      <button 
        onClick={() => setShowGenerator(true)}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Generate Course
      </button>
      
      
        
        
      </div>
      </div>
      {showGenerator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6  w-full h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Generate New Course</h2>
              <button 
                onClick={() => setShowGenerator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <CourseGenerator 
              onComplete={() => {
                setShowGenerator(false);
                // Add any additional logic after course generation is complete
              }} 
            />
          </div>
        </div>
      )}
      
    </div>
          <div className="w-64 relative">
            <button
              className="w-full p-2 pr-8 border-2 border-indigo-600 rounded-md bg-white flex justify-between items-center text-gray-800"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Sort by {selectedSort}</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className={`p-3 cursor-pointer ${option === selectedSort ? "bg-indigo-100" : "hover:bg-gray-50"}`}
                    onClick={() => handleSortSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
           
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters - Now with expanded filter options */}
          <div className="w-64 space-y-4 self-start sticky top-6">
            {filters.map((filter) => (
              <div key={filter.name} className="border rounded-md overflow-hidden bg-white">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-50"
                  onClick={() => toggleFilter(filter.name.toLowerCase())}
                >
                  <h3 className="font-medium text-gray-800">{filter.name}</h3>
                  {expandedFilters[filter.name.toLowerCase() as keyof typeof expandedFilters] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>

                {expandedFilters[filter.name.toLowerCase() as keyof typeof expandedFilters] && (
                  <div className="p-4">
                    {filter.type === "radio" ? (
                      <div className="space-y-2">
                        {filter.options.map((option) => (
                          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                            <div className="relative flex items-center justify-center">
                              <input
                                type="radio"
                                className="h-4 w-4 cursor-pointer"
                                checked={selectedProgram === option.value}
                                onChange={() => setSelectedProgram(option.value)}
                              />
                            </div>
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {filter.options.map((option) => (
                          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                            <div className="relative flex items-center justify-center">
                              <input
                                type="checkbox"
                                className="h-4 w-4 cursor-pointer"
                                checked={selectedPrice.includes(option.value)}
                                onChange={() => handlePriceChange(option.value)}
                              />
                            </div>
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            {/* First Row Courses - With Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {firstRowCourses.map(renderCourseCard)}
            </div>

            {/* Design Courses Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {designCourses.map(renderCourseCard)}
            </div>

            {/* Second Row Courses - Data Analyst, Intro to Programming, etc. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {secondRowCourses.map(renderCourseCard)}
            </div>

            {/* Third Row Courses - Digital Marketing, Data Engineering, etc. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {thirdRowCourses.map(renderCourseCard)}
            </div>

            {/* Fourth Row Courses - Ethical AI, Computer Vision, etc. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {fourthRowCourses.map(renderCourseCard)}
            </div>

            {/* No Image Courses - Developer, Advanced Programming, etc.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {noImageCourses.map(renderNoImageCard)}
            </div> */}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 mb-4">
              <button className="w-10 h-10 rounded-full border flex items-center justify-center mr-2 text-gray-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="w-8 h-8 rounded-md bg-teal-800 text-white flex items-center justify-center mx-1">
                1
              </button>

              {[2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="w-8 h-8 rounded-md text-teal-800 flex items-center justify-center mx-1 hover:bg-gray-100"
                >
                  {page}
                </button>
              ))}

              <span className="mx-1">...</span>

              <button className="w-8 h-8 rounded-md text-teal-800 flex items-center justify-center mx-1 hover:bg-gray-100">
                26
              </button>

              <button className="w-10 h-10 rounded-full border border-teal-800 bg-teal-800 flex items-center justify-center ml-2 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

