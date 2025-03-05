"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AnimatedText({ children }) {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    const chars = text.innerText.split("")
    text.innerHTML = ""
    chars.forEach((char) => {
      const span = document.createElement("span")
      span.textContent = char
      span.style.display = "inline-block"
      text.appendChild(span)
    })

    gsap.from(text.children, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  return <div ref={textRef}>{children}</div>
}

