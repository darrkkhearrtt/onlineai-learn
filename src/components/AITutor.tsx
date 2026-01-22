import { motion } from "framer-motion";
import { Sparkles, Brain, Clock, Target, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "AI adapts to your learning style and pace for optimal results.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get help anytime, day or night. Never wait for office hours.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set learning goals and track your progress with smart insights.",
  },
  {
    icon: Zap,
    title: "Instant Answers",
    description: "Get immediate responses to your questions and doubts.",
  },
];

const AITutor = () => {
  return (
    <section id="ai-tutor" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai/10 text-ai mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Personal
              <span className="text-gradient-ai block">AI Learning Companion</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Meet your intelligent tutor that understands your learning journey. 
              Get personalized recommendations, instant help, and guidance tailored just for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gradient-ai flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-ai-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="gradient-ai border-0">
              <Sparkles className="w-5 h-5 mr-2" />
              Try AI Tutor Free
            </Button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl border border-border p-8 shadow-2xl">
              {/* AI Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-ai flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-ai-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">LearnBot AI</h3>
                  <p className="text-muted-foreground">Your personal learning assistant</p>
                </div>
              </div>

              {/* Sample Interactions */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-secondary rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground mb-1">Course Recommendation</p>
                      <p className="text-sm text-muted-foreground">
                        Based on your interest in web development, I recommend starting with "Complete Web Development Bootcamp" at Downtown Tech Hub.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-secondary rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground mb-1">Progress Update</p>
                      <p className="text-sm text-muted-foreground">
                        You've completed 75% of your current module! Keep going, you're doing great! 🎉
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="bg-secondary rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground mb-1">Quick Tip</p>
                      <p className="text-sm text-muted-foreground">
                        Practice coding for 30 minutes daily to build muscle memory. Consistency beats intensity!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-xl gradient-primary opacity-50 blur-lg" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-xl gradient-ai opacity-50 blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AITutor;
