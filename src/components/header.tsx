"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-[#f2f2f2]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#a7ec4f] to-[#00bf63]">
              <img src="/images/invstaLogos.png" alt="" />
            </div>
                        <span className="font-medium">invsta</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-[#00bf63] transition-colors">{t('home')}</Link>
            <Link href="#about" className="text-sm hover:text-[#00bf63] transition-colors">{t('about')}</Link>
            <Link href="#startups" className="text-sm hover:text-[#00bf63] transition-colors">{t('startup')}</Link>
            <Link href="#investors" className="text-sm hover:text-[#00bf63] transition-colors">{t('investor')}</Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <button onClick={() => changeLanguage('en')} className="text-sm">EN</button>
            <button onClick={() => changeLanguage('fr')} className="text-sm">FR</button>
            <button onClick={() => changeLanguage('ar')} className="text-sm">AR</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-5 w-5" />
          </button>

          {/* CTA Button */}
          <Button asChild className="bg-[#00bf63] text-white hover:bg-[#00bf63]/90 transition-colors">
            <Link href="#get-started">{t('joinUs')}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
        <Link href="/" className="block py-2">{t('home')}</Link>
        <Link href="#about" className="block py-2">{t('about')}</Link>
        <Link href="#startup" className="block py-2">{t('startup')}</Link>
        <Link href="#investor" className="block py-2">{t('investor')}</Link>
      </div>
      )}
    </header>
  )
}

