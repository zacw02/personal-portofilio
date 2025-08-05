import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800 p-8 font-sans">
      <header className="flex justify-between items-center mb-12 border-b pb-4">
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">YourName</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#packages" className="hover:text-blue-600 transition">Packages</a>
          <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-20" data-aos="fade-up">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 tracking-tight"
        >
          Hi, I'm YourName 👋
        </motion.h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Web Designer & Developer specializing in modern UI/UX, full-stack apps, SEO-driven design, and social media content strategy.
        </p>
        <Button className="text-lg px-6 py-3">View My Work</Button>
      </section>

      <section className="text-center mb-16" data-aos="zoom-in">
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto flex items-center justify-center text-gray-700 text-xl font-semibold shadow-md">
          Logo
        </div>
      </section>

      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg text-gray-700 italic">
          "Working with YourName was incredible. The website was better than we imagined and the process was seamless!"
          <p className="text-right mt-4 font-bold not-italic">— Happy Client</p>
        </div>
      </section>

      <section id="contact" className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4 max-w-lg" action="https://formspree.io/f/mayvldll" method="POST">
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <select name="package" required className="w-full border border-gray-300 p-2 rounded">
            <option value="">Select a package</option>
            <option value="Starter">Starter</option>
            <option value="Pro">Pro</option>
            <option value="Premium">Premium</option>
          </select>
          <Textarea name="message" placeholder="Your Message" rows={5} required />
          <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="flex flex-col items-center gap-4 mt-24 text-center border-t pt-6">
        <div className="flex space-x-4">
          <a href="#"><Mail /></a>
          <a href="#"><Github /></a>
          <a href="#"><Linkedin /></a>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} YourName. All rights reserved.</p>
      </footer>
    </div>
  );
}
