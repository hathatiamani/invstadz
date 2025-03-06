"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    console.log(`تغيير اللغة إلى: ${lng}`);
    i18n.changeLanguage(lng)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-[#f2f2f2]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* الشعار */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#a7ec4f] to-[#00bf63]">
              <Image src="/images/invstaLogos.png" alt="إنفستا" width={24} height={24} />
            </div>
            <span className="font-medium">إنفستا</span>
          </Link>

          {/* التنقل */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-[#00bf63] transition-colors">{t('الرئيسية')}</Link>
            <Link href="#about" className="text-sm hover:text-[#00bf63] transition-colors">{t('من نحن')}</Link>
            <Link href="#startups" className="text-sm hover:text-[#00bf63] transition-colors">{t('الشركات الناشئة')}</Link>
            <Link href="#investors" className="text-sm hover:text-[#00bf63] transition-colors">{t('المستثمرون')}</Link>
          </nav>

          {/* مبدل اللغة */}
          <div className="flex items-center gap-2">
            <button onClick={() => changeLanguage('en')} className="text-sm">EN</button>
            <button onClick={() => changeLanguage('fr')} className="text-sm">FR</button>
            <button onClick={() => changeLanguage('ar')} className="text-sm">AR</button>
          </div>

          {/* زر القائمة للجوال */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-5 w-5" />
          </button>

          {/* زر الانضمام */}
          <Button asChild className="bg-[#00bf63] text-white hover:bg-[#00bf63]/90 transition-colors">
            <Link href="#get-started">{t('انضم إلينا')}</Link>
          </Button>
        </div>
      </div>

      {/* قائمة الجوال */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <Link href="/" className="block py-2">{t('الرئيسية')}</Link>
          <Link href="#about" className="block py-2">{t('من نحن')}</Link>
          <Link href="#startup" className="block py-2">{t('الشركات الناشئة')}</Link>
          <Link href="#investor" className="block py-2">{t('المستثمرون')}</Link>
        </div>
      )}
    </header>
  )
}
