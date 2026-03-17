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
    <footer className="bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Logo className="font-normal text-black" />
        </div>

        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-normal">Products</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/inventory"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="mb-3 text-sm font-normal">About Us</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="mb-3 text-sm font-normal">More</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/my-account"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  My account
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  Track my order
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-3 text-sm font-normal">Follow Us</h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 transition-colors hover:text-black"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 transition-colors hover:text-black"
              >
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 transition-colors hover:text-black"
              >
                <TwitterIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 transition-colors hover:text-black"
              >
                <PinterestIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-normal">Contact Us</h3>
          <a
            href="mailto:kyobokglob@gmail.com "
            className="text-[13px] text-gray-600 transition-colors hover:text-gray-900"
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
        <div className="mb-6 flex items-center justify-end gap-3 text-gray-800">
          <ApplePayIcon className="h-3.5" />
          <AmexIcon className="h-3.5" />
          <VisaIcon className="h-3.5" />
          <MastercardIcon className="h-3.5" />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-xs text-gray-500">
            © 2025 K-YOBOK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
