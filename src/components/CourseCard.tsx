import { motion } from "framer-motion";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  location: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  category: string;
  index: number;
}

const CourseCard = ({
  title,
  instructor,
  location,
  duration,
  students,
  rating,
  price,
  image,
  category,
  index,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-card/90 text-card-foreground hover:bg-card">
          {category}
        </Badge>
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-lg font-bold text-foreground">${price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-card-foreground">{rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
