import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Learning</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Learn From Your
              <span className="text-gradient-primary block">Local Community</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover courses taught by local experts. Get personalized help from our AI tutor 
              and stay connected via WhatsApp. Learning has never been this accessible.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gradient-primary border-0 group">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Local Courses</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - AI Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="gradient-ai p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-ai-foreground" />
                </div>
                <div>
                  <div className="text-ai-foreground font-semibold">AI Learning Assistant</div>
                  <div className="text-ai-foreground/80 text-sm">Always here to help</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full gradient-ai flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-ai-foreground" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-secondary-foreground text-sm">
                      Hi! 👋 I'm your AI tutor. What would you like to learn today?
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="gradient-primary rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-primary-foreground text-sm">
                      I want to learn web development. Any local courses?
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full gradient-ai flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-ai-foreground" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-secondary-foreground text-sm">
                      Great choice! I found 12 web development courses near you. 
                      I'll send the top 3 to your WhatsApp! 📱
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent text-secondary-foreground placeholder:text-muted-foreground text-sm outline-none"
                    disabled
                  />
                  <Button size="sm" className="gradient-primary border-0">
                    Send
                  </Button>
                </div>
              </div>
            </div>

            {/* WhatsApp Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-whatsapp rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
                <div>
                  <div className="text-whatsapp-foreground font-semibold text-sm">WhatsApp Ready</div>
                  <div className="text-whatsapp-foreground/80 text-xs">Instant notifications</div>
                </div>
              </div>
            </motion.div>

            {/* Users Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-card"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">+2.5k</span>
                  <span className="text-muted-foreground"> online</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
