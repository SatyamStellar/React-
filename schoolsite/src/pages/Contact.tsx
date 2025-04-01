// src/pages/Contact.tsx
import { motion } from "framer-motion";
import { ContactForm } from "@/components/shared/ContactForm";
import { containerVariants, itemVariants } from "@/lib/motionVariants";

export const Contact = () => {
  return (
    <div className="pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12"
            >
              Contact Us
            </motion.h1>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Education Street
                    <br />
                    Learning City, LC 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@brightfuture.edu</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 4:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="h-[400px]">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71277937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3b5a93a445%3A0xa9e33ab3ad361a44!2sBroadway%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1591234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12"
            >
              Send us a Message
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};