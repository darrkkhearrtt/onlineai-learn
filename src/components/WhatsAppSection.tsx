import { motion } from "framer-motion";
import { MessageCircle, Bell, Calendar, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Get class reminders and updates directly on WhatsApp",
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Manage your course schedule with quick replies",
  },
  {
    icon: Users,
    title: "Community Groups",
    description: "Join course-specific groups to connect with peers",
  },
  {
    icon: CheckCircle,
    title: "Progress Updates",
    description: "Receive weekly progress reports and achievements",
  },
];

const WhatsAppSection = () => {
  return (
    <section id="whatsapp" className="py-24 bg-whatsapp/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-whatsapp/20" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-2 border-whatsapp/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-whatsapp p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-whatsapp-foreground" />
                    </div>
                    <div>
                      <div className="text-whatsapp-foreground font-semibold">LearnLocal Bot</div>
                      <div className="text-whatsapp-foreground/80 text-xs">online</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-[#ece5dd] min-h-[400px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-start"
                    >
                      <div className="bg-card rounded-xl rounded-tl-none p-3 max-w-[80%] shadow-sm">
                        <p className="text-sm text-card-foreground">
                          🎓 Hey! Your "Web Development" class starts in 30 minutes at Downtown Tech Hub.
                        </p>
                        <span className="text-xs text-muted-foreground mt-1 block text-right">9:30 AM</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#dcf8c6] rounded-xl rounded-tr-none p-3 max-w-[80%] shadow-sm">
                        <p className="text-sm text-card-foreground">Thanks! I'll be there 👍</p>
                        <span className="text-xs text-muted-foreground mt-1 block text-right">9:31 AM ✓✓</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="flex justify-start"
                    >
                      <div className="bg-card rounded-xl rounded-tl-none p-3 max-w-[80%] shadow-sm">
                        <p className="text-sm text-card-foreground">
                          📊 Weekly Update: You've completed 3 lessons this week! 🌟
                        </p>
                        <p className="text-sm text-card-foreground mt-2">
                          Progress: ████████░░ 80%
                        </p>
                        <span className="text-xs text-muted-foreground mt-1 block text-right">9:32 AM</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="flex justify-start"
                    >
                      <div className="bg-card rounded-xl rounded-tl-none p-3 max-w-[80%] shadow-sm">
                        <p className="text-sm text-card-foreground">
                          💡 Tip: Type "schedule" to see your upcoming classes.
                        </p>
                        <span className="text-xs text-muted-foreground mt-1 block text-right">9:32 AM</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, type: "spring" }}
                className="absolute -top-4 -right-8 bg-card rounded-xl p-3 shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-whatsapp" />
                  <span className="text-sm font-medium">3 new messages</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 text-whatsapp mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp Integration</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Connected
              <span className="text-whatsapp block">Via WhatsApp</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Never miss a class or update. Our WhatsApp integration keeps you connected 
              with your courses, instructors, and fellow learners—right in the app you use every day.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Connect WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
