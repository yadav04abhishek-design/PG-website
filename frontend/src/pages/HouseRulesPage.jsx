import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CigaretteOff, Wine, VolumeX, PartyPopper, IdCard, Clock, 
  LogOut, Users, PawPrint, Moon, AlertTriangle, Check, X
} from 'lucide-react';
import { houseRules } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const iconMap = {
  CigaretteOff, Wine, VolumeX, PartyPopper, IdCard, Clock, 
  LogOut, Users, PawPrint, Moon
};

export default function HouseRulesPage() {
  const importantRules = houseRules.filter(r => r.important);
  const otherRules = houseRules.filter(r => !r.important);

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">House Rules</span>
          </nav>
          
          <h1 className="heading-1 mb-4">House Rules</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            To ensure a peaceful and comfortable stay for all our guests, 
            we kindly request everyone to follow these guidelines.
          </p>
        </div>
      </section>

      {/* Important Rules */}
      <section className="section-padding bg-[rgb(0,55,32)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#8FEC78]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Important Guidelines</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantRules.map((rule) => {
              const IconComponent = iconMap[rule.icon] || AlertTriangle;
              return (
                <div key={rule.id} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-[#8FEC78]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{rule.rule}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Rules */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8">Additional Guidelines</h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            {otherRules.map((rule) => {
              const IconComponent = iconMap[rule.icon] || Clock;
              return (
                <AccordionItem 
                  key={rule.id} 
                  value={`rule-${rule.id}`}
                  className="border border-black/5 rounded-xl px-6 data-[state=open]:bg-[rgba(148,242,127,0.05)]"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[rgb(13,121,22)]" />
                      </div>
                      <span className="font-semibold text-[rgb(0,55,32)] text-left">{rule.rule}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-14">
                    <p className="text-[rgb(131,146,140)] leading-relaxed">{rule.description}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Quick Reference</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Do's */}
            <Card className="border-black/5 bg-white overflow-hidden">
              <div className="p-4 bg-[rgba(148,242,127,0.15)] border-b border-black/5">
                <h3 className="font-semibold text-[rgb(0,55,32)] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[rgb(13,121,22)] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  Please Do
                </h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    'Carry valid government ID',
                    'Maintain cleanliness in rooms',
                    'Respect quiet hours (10 PM - 7 AM)',
                    'Report any maintenance issues',
                    'Inform us about your check-out time',
                    'Ask before inviting visitors'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(13,121,22)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[rgb(14,15,12)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-black/5 bg-white overflow-hidden">
              <div className="p-4 bg-red-50 border-b border-black/5">
                <h3 className="font-semibold text-[rgb(0,55,32)] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  Please Avoid
                </h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    'Smoking inside rooms or common areas',
                    'Consuming alcohol on premises',
                    'Playing loud music at any time',
                    'Hosting parties or gatherings',
                    'Bringing pets without permission',
                    'Making noise after 10 PM'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[rgb(14,15,12)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-3 mb-4">Have Questions About Our Policies?</h2>
          <p className="text-[rgb(131,146,140)] mb-6">
            If you need any clarification about our house rules or have special requirements, 
            please don't hesitate to contact us before booking.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
