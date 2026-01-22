import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    location: "Downtown Tech Hub",
    duration: "12 weeks",
    students: 245,
    rating: 4.9,
    price: 299,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    category: "Web Dev",
  },
  {
    title: "Digital Marketing Masterclass",
    instructor: "Michael Chen",
    location: "Business Center",
    duration: "8 weeks",
    students: 189,
    rating: 4.8,
    price: 199,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "Marketing",
  },
  {
    title: "Photography for Beginners",
    instructor: "Emma Williams",
    location: "Art District Studio",
    duration: "6 weeks",
    students: 156,
    rating: 4.9,
    price: 149,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop",
    category: "Creative",
  },
  {
    title: "Data Science Fundamentals",
    instructor: "David Kumar",
    location: "University Campus",
    duration: "10 weeks",
    students: 312,
    rating: 4.7,
    price: 349,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    category: "Data",
  },
  {
    title: "Spanish Language Intensive",
    instructor: "Maria Rodriguez",
    location: "Language Center",
    duration: "8 weeks",
    students: 178,
    rating: 4.9,
    price: 179,
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&auto=format&fit=crop",
    category: "Language",
  },
  {
    title: "Culinary Arts Workshop",
    instructor: "Chef Antonio",
    location: "Culinary Academy",
    duration: "4 weeks",
    students: 89,
    rating: 5.0,
    price: 249,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop",
    category: "Cooking",
  },
];

const categories = ["All", "Web Dev", "Marketing", "Creative", "Data", "Language", "Cooking"];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-primary">Local Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the best courses taught by experts in your community. 
            Learn new skills and connect with local instructors.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "gradient-primary border-0" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={course.title} {...course} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group">
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
