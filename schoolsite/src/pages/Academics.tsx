// src/pages/Academics.tsx
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { containerVariants, itemVariants } from "@/lib/motionVariants";
import { courses, activities } from "@/lib/data";

export const Academics = () => {
  return (
    <div className="pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {/* Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12"
            >
              Our Courses
            </motion.h1>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {courses.map((course) => (
                <motion.div key={course.title} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12"
            >
              Academic Calendar
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto bg-card p-6 rounded-lg"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Fall Semester</span>
                  <span>September 1 - December 20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Winter Break</span>
                  <span>December 21 - January 5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Spring Semester</span>
                  <span>January 6 - May 31</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Summer Break</span>
                  <span>June 1 - August 31</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12"
            >
              Extracurricular Activities
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activities.map((activity) => (
                <motion.div key={activity.name} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{activity.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};