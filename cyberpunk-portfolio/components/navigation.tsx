"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { User, Code, Briefcase, FileText, Mail, Menu, X } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "about", label: "About", icon: <User className="size-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="size-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="size-4" /> },
    { id: "blog", label: "Blog", icon: <FileText className="size-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="size-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = navItems.map((item) => document.getElementById(item.id))

      let current = ""
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight

          if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
            current = section.getAttribute("id") || ""
          }
        }
      })

      if (current && current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, navItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={cn(
          "sticky top-4 z-50 max-w-fit mx-auto hidden md:block transition-all duration-500",
          scrolled ? "top-2" : "top-4",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-1 p-1 rounded-full backdrop-blur-md border transition-all duration-500",
            scrolled ? "bg-gray-900/90 border-gray-800 shadow-lg shadow-cyan-500/5" : "bg-gray-900/80 border-gray-800",
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-center size-14 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300",
            isOpen
              ? "bg-purple-900/90 border-purple-600 text-white shadow-purple-500/20"
              : "bg-gray-900/90 border-cyan-800 text-cyan-400 shadow-cyan-500/20",
          )}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 p-3 rounded-lg bg-gray-900/90 backdrop-blur-md border border-gray-800 w-56 shadow-xl shadow-purple-500/5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 text-left mb-1 last:mb-0",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/70",
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

