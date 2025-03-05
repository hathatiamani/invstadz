"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export function HoverLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false)
  const linkRef = useRef(null)

  useEffect(() => {
    const link = linkRef.current
    if (!link) return

    const handleMouseMove = (e) => {
      const rect = link.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      link.style.setProperty("--mouse-x", `${x}px`)
      link.style.setProperty("--mouse-y", `${y}px`)
    }

    link.addEventListener("mousemove", handleMouseMove)
    return () => link.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <Link
      href={href}
      ref={linkRef}
      className={`relative inline-block overflow-hidden ${isHovered ? "text-white" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`absolute inset-0 bg-[#00bf63] transition-transform duration-300 ease-out ${
          isHovered ? "scale-100" : "scale-0"
        }`}
        style={{
          transformOrigin: "var(--mouse-x) var(--mouse-y)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

