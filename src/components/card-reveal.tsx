"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function CardReveal({ children }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    gsap.from(card, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  return <div ref={cardRef}>{children}</div>
}

