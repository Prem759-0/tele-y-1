"use client";

import Header from "@/components/Header";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import { MessageCircle, Video, Shield, Users, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center px-3 py-8 sm:px-6 sm:py-16 text-center gap-8 sm:gap-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-500 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20   rounded-3xl blur-3xl scale-150 opacity-60"></div>

        {/* Hero Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-6 relative px-2">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            Connect instantly.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 block">
              Chat smarter.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            The modern messaging platform that combines lightning-fast chat and
            crystal-clear video calls in one seamless experience.
          </p>

          <div className="pt-1 sm:pt-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="px-4 sm:px-8 h-10 sm:h-12 text-sm sm:text-base font-medium bg-black text-white hover:bg-gray-800 rounded-md">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* ✅ Social Proof Section */}
        <div className="pt-6 sm:pt-12 w-full max-w-4xl mx-auto px-2">
          <p className="text-xs sm:text-sm text-gray-500 text-center mb-4 sm:mb-6">
            Trusted by thousands of users worldwide
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-gray-800">
            {/* Stat 1 */}
            <div className="text-center px-2 sm:px-4 py-1 sm:py-2">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">50K+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                Active Users
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

            {/* Stat 2 */}
            <div className="text-center px-2 sm:px-4 py-1 sm:py-2">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">1M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                Messages Sent
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

            {/* Stat 3 */}
            <div className="text-center px-2 sm:px-4 py-1 sm:py-2">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">99.9%</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">Uptime</div>
            </div>
          </div>

          {/* Divider with dot */}
          <div className="w-full flex items-center justify-center mt-6 sm:mt-10">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="px-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-white py-8 sm:py-14 px-2">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-3 text-black">
                Everything you need to stay connected
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto px-2">
                Powerful features designed for seamless communication, whether
                you&apos;re chatting with friends or collaborating with teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center px-2">
              <FeatureCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Lightning-fast messages with real-time delivery. Chat with friends and colleagues seamlessly."
              />
              <FeatureCard
                icon={Video}
                title="HD Video Calls"
                description="Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings."
              />
              <FeatureCard
                icon={Shield}
                title="Privacy First"
                description="End-to-end encryption keeps your conversations private. Your data belongs to you, always."
              />
              <FeatureCard
                icon={Users}
                title="Group Chats"
                description="Create groups with friends, family, or colleagues. Manage conversations with advanced controls."
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance. Works seamlessly across all your devices with instant sync."
              />
            </div>
          </div>
        </div>

{/* ✅ CTA Section */}
<div className="w-full flex justify-center px-2 sm:px-4 mt-12 sm:mt-20">
  <div className="w-full max-w-2xl rounded-xl sm:rounded-2xl bg-gray-100 shadow-md p-6 sm:p-12 lg:p-14 text-center">
    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
      Ready to transform your conversations?
    </h2>

    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
      Join thousands of users who&apos;ve already discovered a better way to communicate. 
      Start your journey with Beam today — it&apos;s completely free.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mb-8">
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="px-4 sm:px-8 h-10 sm:h-12 text-sm sm:text-base font-medium bg-black text-white hover:bg-gray-800 rounded-md">
            Get Started Free
          </Button>
        </SignInButton>
      </SignedOut>
    </div>

    {/* Bullet Points with green dots */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
        No credit card required
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Free forever plan
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Setup in 30 seconds
      </div>
    </div>
  </div>
</div>


      </main>

  <footer className="border-t bg-gray-100 mt-16"> <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12"> <div className="flex flex-col sm:flex-row justify-between items-center gap-6"> {/* Brand */} <div> <span className="text-lg font-bold tracking-tight text-gray-900">Beam</span> <p className="text-sm text-gray-500 mt-1"> The future of communication </p> </div> {/* Links */} <div className="flex items-center gap-8"> <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors"> Privacy Policy </a> <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors"> Terms of Service </a> <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors"> Support </a> </div> </div> {/* Bottom Note */} <div className="border-t mt-8 pt-6 text-center"> <p className="text-xs text-gray-400"> 2025 Beam. This is a Demo. We have no affiliation with any of the brands mentioned in the video including Beam, any usage is purely educational. In the event of any infringement, please contact us and we will remove/alter the content immediately. </p>  <p>❤️ Made By Prem . Gaikwad ❤️ </p> </div> </div> </footer>

    </div>
  );
}
