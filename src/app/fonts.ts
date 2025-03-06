import { Tajawal, Cairo, Amiri } from 'next/font/google'

// Define the Tajawal font with Arabic subset
export const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-tajawal',
})

// Define the Cairo font with Arabic subset
export const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cairo',
})

// Define the Amiri font with Arabic subset
export const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-amiri',
})
