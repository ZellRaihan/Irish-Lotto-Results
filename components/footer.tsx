import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { siteConfig } from "@/app/seo.config"

const Footer = () => {
  return (
    <footer className="relative border-t border-emerald-500/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/irish-lotto-results.webp"
              alt="Irish Lotto Results"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <a 
              href="https://irishlottoonline.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              irishlottoonline.com
            </a>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/about" 
              className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/terms-and-conditions" 
              className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
              { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 transition-colors"
                aria-label={`Follow us on ${social.label}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
