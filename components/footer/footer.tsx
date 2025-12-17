import { AmexIcon } from "@/components/icons/amex";
import { ApplePayIcon } from "@/components/icons/applepay";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { MastercardIcon } from "@/components/icons/mastercard";
import { PinterestIcon } from "@/components/icons/pinterest";
import { TwitterIcon } from "@/components/icons/twitter";
import { VisaIcon } from "@/components/icons/visa";
import Link from "next/link";
import { Logo } from "../logo/logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Logo className="text-white" />
        </div>

        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-base font-normal">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/inventory"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="mb-4 text-base font-normal">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="mb-4 text-base font-normal">More</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/my-account"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  My account
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Track my order
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-4 text-base font-normal">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <PinterestIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mb-8">
          <h3 className="mb-2 text-base font-normal">Contact Us</h3>
          <a
            href="mailto:kyobokglob@gmail.com "
            className="text-sm text-gray-300 transition-colors hover:text-white"
          >
            kyobokglob@gmail.com
          </a>
        </div>

        {/* Newsletter Section */}
        {/**
        <div className="mb-12">
          <p className="mb-4 text-sm text-gray-300">
            Looking for new offers? Subscribe to our newsletter
          </p>
          <form className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="email@getnewoffers.com"
              className="flex-1 rounded-md bg-neutral-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
        */}

        {/* Payment Methods */}
        <div className="mb-8 flex items-center justify-end gap-4">
          <ApplePayIcon className="h-4" />
          <AmexIcon className="h-4" />
          <VisaIcon className="h-4" />
          <MastercardIcon className="h-4" />
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-gray-400">
            © 2025 K-YOBOK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
