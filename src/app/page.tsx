"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Rocket, LightbulbIcon as LightBulb, Handshake, DollarSign, Instagram } from "lucide-react"
import { CardReveal } from "@/components/card-reveal"
import Image from "next/image"
import Link from "next/link"
import {  Linkedin } from "lucide-react"


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const networkRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<HTMLDivElement[]>([])
  const parallaxRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Website reveal animation
    const tl = gsap.timeline()

    // Animate the overlay
    tl.to(".overlay", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
      ease: "power4.inOut",
    })

    // Animate the header
    tl.from(
      ".header",
      {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.5",
    )

    // Hero animation
    tl.from(
      heroRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    )

    // Network animation
    const nodes = networkRef.current ? networkRef.current.children : []
    tl.from(
      nodes,
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    )

    // Animate content sections
    contentRefs.current.forEach((ref) => {
      gsap.from(ref, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Mind-Bending Scroll Animations
    parallaxRefs.current.forEach((ref, index) => {
      gsap.to(ref, {
        y: (index + 1) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref,
          scrub: true,
        },
      })
    })
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  const addToParallaxRefs = (el: HTMLDivElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el)
    }
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] relative">
      {/* Overlay for reveal animation */}
      <div className="overlay fixed inset-0 bg-[#00bf63] z-50"></div>

      <Header />
            {/* Hero Section */}
            <section className="pt-20 pb-20">
        <div className="container mx-auto px-4 ">
          <div className="bg-white/50 rounded-[32px] p-8 md:p-12 w-11/12 mx-auto" ref={heroRef}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Social Links */}
                <div className="flex gap-3 mb-8">
                  <Link
                    href="https://www.instagram.com/invsta.dz/"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-gray-600" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/invstadz"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                  
                </div>
                <h1 className="text-xl md:text-2xl lg:text-2xl font-bold leading-[1.1] mb-8">
                Join the 1st Investment Matchmaking Platform in Algeria <br /> Start for Free.</h1>
                
                <p className="text-lg text-gray-600 mb-8">
                  Join a thriving network of innovators and investors shaping Algerias entrepreneurial future. <br />
                  Discover, Connect, and Grow in Algerias Thriving Startup Ecosystem
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#a7ec4f] to-[#00bf63] text-white hover:opacity-90 transition-all transform hover:scale-105"
                  onClick={() => scrollToSection("about")}
                >
                  Read more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                {/* Floating Stats Card */}
                {/* <Card className="absolute top-8 right-8 p-6 z-10 w-[240px] bg-white/30 backdrop-blur-md">
                  <div className="text-4xl font-bold mb-2 text-white">Join</div>
                  <p className="text-sm text-black-600">Showcase ideas, secure funding, and build partnerships.</p>
                  <div className="flex -space-x-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#a7ec4f]" />
                    <div className="w-8 h-8 rounded-full bg-[#7ed957]" />
                    <div className="w-8 h-8 rounded-full bg-[#00bf63]" />
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-600">
                      +more
                    </div>
                  </div>
                </Card> */}

                {/* Main Illustration */}
                <div className="relative h-[450px] rounded-2xl overflow-hidden">
                  <div className="relative h-full">
                    <Image src="/images/heroSectio.jpg" alt="Platform visualization" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Network Animation */}
        <div className="absolute inset-0 pointer-events-none" ref={networkRef}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-[#00bf63] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="py-20 bg-white" ref={addToRefs}>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Making startup connections and investments fast, safe, and easy
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <CardReveal>
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Rocket className="mr-2 h-6 w-6 text-[#00bf63]" />
                  For Startups
                </h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Create a profile</li>
                  <li>Showcase your business</li>
                  <li>Receive investment requests</li>
                </ol>
              </Card>
            </CardReveal>
            <CardReveal>
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-[#00bf63]" />
                  For Investors
                </h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Browse startups</li>
                  <li>Send investment requests</li>
                  <li>Access exclusive deals</li>
                </ol>
              </Card>
            </CardReveal>
          </div>
        </div>
      </section>

      {/* Startups Section */}
      <section id="startups" className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#a7ec4f]/20 via-[#7ed957]/20 to-[#00bf63]/20">
              <Image src="/images/startupSection.jpg" alt="For Startups" fill className="object-cover" />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6">For Startups</h2>
              <p className="text-xl text-gray-600 mb-6">
                invsta provides a launchpad for ambitious entrepreneurs to showcase their innovations, connect with
                potential investors, and access the resources needed to scale their businesses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <LightBulb className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Showcase your innovative ideas to a targeted audience of investors</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Network with industry leaders and potential partners</span>
                </li>
                <li className="flex items-start">
                  <Rocket className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Access resources and mentorship to accelerate your growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 bg-white" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-6">For Investors</h2>
              <p className="text-xl text-gray-600 mb-6">
                Discover the next big thing in the Algerian startup ecosystem. invsta connects you with promising
                ventures across various sectors, offering unique opportunities to be part of Algerias innovation
                journey.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <LightBulb className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Access a curated selection of innovative Algerian startups</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Connect with passionate entrepreneurs and industry disruptors</span>
                </li>
                <li className="flex items-start">
                  <Handshake className="h-6 w-6 text-[#00bf63] mr-2 flex-shrink-0" />
                  <span>Diversify your portfolio with high-potential Algerian ventures</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#a7ec4f]/20 via-[#7ed957]/20 to-[#00bf63]/20">
              <Image src="/images/investorSection.jpg" alt="For Investors" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20" ref={addToRefs}>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="bg-gradient-to-r from-[#a7ec4f] to-[#00bf63] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Funding Journey Today!</h2>
          <p className="text-xl text-white/90 mb-8">Join invsta and be part of Algerias thriving startup ecosystem.</p>
          <div className="flex justify-center">
            <Link href="https://invsta.vercel.app/">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#00bf63] hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      {/* Parallax Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          ref={addToParallaxRefs}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#a7ec4f] rounded-full opacity-20"
        ></div>
        <div
          ref={addToParallaxRefs}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#00bf63] rounded-full opacity-20"
        ></div>
        <div
          ref={addToParallaxRefs}
          className="absolute top-1/2 right-1/2 w-20 h-20 bg-[#7ed957] rounded-full opacity-20"
        ></div>
      </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600">© {new Date().getFullYear()} إنفستا. All rights reserved.</p>
                
              </div>

      <Footer />
    </div>
  )
}

