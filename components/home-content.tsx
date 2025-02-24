'use client';

import React, { useState } from 'react';
import { Sparkles, Archive, BarChart, HelpCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import * as Collapsible from '@radix-ui/react-collapsible';

const FAQItem = ({ question, children }: { question: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="border-b border-emerald-100">
      <Collapsible.Trigger className="flex w-full items-center justify-between py-4 text-left hover:bg-emerald-50/50 transition-colors px-2 rounded-lg">
        <h3 className="text-lg font-semibold text-emerald-700">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-emerald-600 transform transition-transform ${open ? 'rotate-180' : ''}`} />
      </Collapsible.Trigger>

      <Collapsible.Content className="CollapsibleContent">
        <div className="pb-6 pt-2 px-2 text-gray-700">
          {children}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default function HomeContent() {
  const faqItems = [
    {
      question: "How do I play the Irish Lotto?",
      answer: "It's easy! Pick 6 numbers from 1 to 47—choose yourself or go with a Quick Pick. Draws happen every Wednesday and Saturday. Add Lotto Plus 1 and 2 for more chances to win. Check back here for results after each draw!"
    },
    {
      question: "What are the Irish Lotto draw times?",
      answer: (
        <div>
          <p className="text-gray-700 mb-3">Draws are twice a week:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Wednesday: Around 8:00 PM Irish time</li>
            <li>Saturday: Around 8:00 PM Irish time</li>
          </ul>
          <p className="text-gray-700 mt-3">Results hit our site as soon as they're official—stay tuned!</p>
        </div>
      )
    },
    {
      question: "How do I check if I've won?",
      answer: "Just enter your numbers into our ticket checker or match them to the latest results for the main draw, Lotto Plus 1, and Lotto Plus 2. Check past draws in our archive too. Numbers match? You're a winner!"
    },
    {
      question: "What's the Bonus Ball?",
      answer: "The Bonus Ball is an extra number drawn in the main Lotto draw. It doesn't win the jackpot but boosts secondary prizes—like matching 5 numbers plus the Bonus Ball for a bigger payout. A lucky little extra!"
    },
    {
      question: "What are Lotto Plus 1 and Lotto Plus 2?",
      answer: "These are bonus draws using your main ticket numbers. Lotto Plus 1 has a €1,000,000 top prize, and Lotto Plus 2 offers €250,000. Just add the Lotto Plus option when you play—more shots at winning!"
    },
    {
      question: "How do I claim my prize?",
      answer: (
        <div>
          <p className="text-gray-700 mb-3">Depends on the amount:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Up to €100: Any authorized retailer.</li>
            <li>Up to €2,500: Select retailers or by mail.</li>
            <li>Over €2,500: Contact the National Lottery directly.</li>
          </ul>
          <p className="text-gray-700 mt-3">Claim within 90 days—don't let that win slip away!</p>
        </div>
      )
    },
    {
      question: "What are the jackpot odds?",
      answer: "About 1 in 10.7 million for the big one. But with secondary prizes and Lotto Plus, your odds get better. Plus, every ticket supports Irish causes—win or lose, you're helping out!"
    },
    {
      question: "Can I play online?",
      answer: "Absolutely! Buy tickets via the official National Lottery site or app. It's quick and easy, and you can check your numbers here after the draw."
    },
    {
      question: "Does the Lotto support good causes?",
      answer: "You bet! Every ticket funds projects across Ireland—sports, health, arts, and more. Playing means you're part of something great."
    }
  ];

  return (
    <div className="prose prose-emerald max-w-none">
      <div className="space-y-16">
        {/* Welcome Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-6">
              Welcome to Irish Lotto Results
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Hey there! If you're looking for The  Irish Lotto Results, you're in the right place. Whether you want to check the latest Irish Lotto results, 
              dive into past draw history, or explore Irish Lotto all 3 draws results—main, Lotto Plus 1, and Lotto Plus 2—we've got you covered. 
              Our site is simple, fun, and helpful, like a friend who's rooting for your next big win. Let's jump in and see if Tonight's your lucky day!
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Latest Results */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-800">Tonight Latest Results</h3>
            </div>
            <ul className="space-y-2 pl-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                All three draws in one spot—main, Plus 1, and Plus 2
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Fresh results updated as soon as they're drawn
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Covers every Wednesday and Saturday draw
              </li>
            </ul>
          </section>

          {/* Past Results */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Archive className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-purple-800">Past Results</h3>
            </div>
            <ul className="space-y-2 pl-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                Results for all three draws at your fingertips
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                Pick any date to see past results
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                Detailed breakdowns to relive the excitement
              </li>
            </ul>
          </section>
        </div>

        {/* Full Width Sections */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">Draw Breakdowns</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Want more than just numbers? Our single-date posts unpack each draw—prize tiers, winner stories, and fun facts. 
            Whether it's Wednesday's draw or Saturday's, you'll get the full scoop.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Full story behind Saturday's results</li>
            <li>Wednesday's draw, broken down</li>
            <li>Fresh content updated daily</li>
          </ul>
        </section>

        {/* Gradient Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-emerald-100/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-4">Why We're Mad About the Irish Lotto</h2>
            <p className="text-gray-700 leading-relaxed">
              Since 1988, the Irish Lotto has been a national favorite. Jackpots start at €2 million and roll over until someone wins big. 
              Plus, every ticket supports amazing causes—sports, health, arts, and heritage. It's more than a game; it's a tradition worth celebrating!
            </p>
          </section>
          
          <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-yellow-100/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-4">Ready to Jump In?</h2>
            <p className="text-gray-700 leading-relaxed">
              Feeling lucky? Grab a ticket online or at your local shop for the next draw. You've got to play to win, right? 
              Imagine being the next Irish Lotto millionaire—we'll be here to celebrate with you. Good luck!
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <HelpCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question}>
                {item.answer}
              </FAQItem>
            ))}
          </div>
          <p className="text-gray-700 mt-8 font-medium">
            Still got questions? Explore the site or reach out—we're here to help!
          </p>
        </section>
      </div>
    </div>
  );
}
