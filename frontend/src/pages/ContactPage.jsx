import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, Send, User, 
  AtSign, FileText, Check
} from 'lucide-react';
import { siteInfo } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We will get back to you soon.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">Contact</span>
          </nav>
          
          <h1 className="heading-1 mb-4">Contact Us</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            Have questions or ready to book? Reach out to us via call, WhatsApp, 
            or fill out the form below. We typically respond within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 mb-6">Get in Touch</h2>
              
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl border border-black/5 hover:border-[#8FEC78]/50 hover:bg-[rgba(148,242,127,0.05)] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[rgb(13,121,22)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[rgb(0,55,32)] mb-1">Call Us</h4>
                    <p className="text-[rgb(131,146,140)] text-sm">{siteInfo.phone}</p>
                    <span className="text-xs text-[rgb(13,121,22)] font-medium">Click to call</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I have a query about Casa Garden.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-black/5 hover:border-[#8FEC78]/50 hover:bg-[rgba(148,242,127,0.05)] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[rgb(0,55,32)] mb-1">WhatsApp</h4>
                    <p className="text-[rgb(131,146,140)] text-sm">{siteInfo.whatsapp}</p>
                    <span className="text-xs text-[#25D366] font-medium">Quick response</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl border border-black/5 hover:border-[#8FEC78]/50 hover:bg-[rgba(148,242,127,0.05)] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[rgb(13,121,22)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[rgb(0,55,32)] mb-1">Email</h4>
                    <p className="text-[rgb(131,146,140)] text-sm">{siteInfo.email}</p>
                    <span className="text-xs text-[rgb(13,121,22)] font-medium">Send an email</span>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <Card className="border-black/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[rgb(13,121,22)]" />
                    </div>
                    <h4 className="font-medium text-[rgb(0,55,32)]">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[rgb(131,146,140)]">Monday - Saturday</span>
                      <span className="text-[rgb(0,55,32)] font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[rgb(131,146,140)]">Sunday</span>
                      <span className="text-[rgb(0,55,32)] font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-black/5">
                <CardContent className="p-6 md:p-8">
                  <h2 className="heading-3 mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[rgba(148,242,127,0.15)] flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-[rgb(13,121,22)]" />
                      </div>
                      <h3 className="heading-3 mb-2">Message Sent!</h3>
                      <p className="text-[rgb(131,146,140)]">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-[rgb(0,55,32)] mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(131,146,140)]" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Your name"
                              className="w-full pl-11 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#8FEC78] focus:ring-2 focus:ring-[#8FEC78]/20 outline-none transition-all duration-200 text-[rgb(14,15,12)] placeholder:text-[rgb(175,183,180)]"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-[rgb(0,55,32)] mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(131,146,140)]" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+91 98765 43210"
                              className="w-full pl-11 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#8FEC78] focus:ring-2 focus:ring-[#8FEC78]/20 outline-none transition-all duration-200 text-[rgb(14,15,12)] placeholder:text-[rgb(175,183,180)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-[rgb(0,55,32)] mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(131,146,140)]" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#8FEC78] focus:ring-2 focus:ring-[#8FEC78]/20 outline-none transition-all duration-200 text-[rgb(14,15,12)] placeholder:text-[rgb(175,183,180)]"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-medium text-[rgb(0,55,32)] mb-2">
                          Subject *
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(131,146,140)]" />
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#8FEC78] focus:ring-2 focus:ring-[#8FEC78]/20 outline-none transition-all duration-200 text-[rgb(14,15,12)] bg-white appearance-none cursor-pointer"
                          >
                            <option value="">Select a subject</option>
                            <option value="booking">Room Booking Inquiry</option>
                            <option value="pg">PG Accommodation Inquiry</option>
                            <option value="pricing">Pricing Information</option>
                            <option value="availability">Check Availability</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-[rgb(0,55,32)] mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your requirements, preferred dates, number of guests, etc."
                          className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#8FEC78] focus:ring-2 focus:ring-[#8FEC78]/20 outline-none transition-all duration-200 text-[rgb(14,15,12)] placeholder:text-[rgb(175,183,180)] resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Find Us</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dehradun Map */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[rgb(13,121,22)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[rgb(0,55,32)]">{siteInfo.locations.dehradun.name}</h3>
                  <p className="text-sm text-[rgb(131,146,140)]">{siteInfo.locations.dehradun.address}</p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-black/5">
                <iframe
                  src={siteInfo.locations.dehradun.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Casa Garden Dehradun"
                />
              </div>
            </div>

            {/* Gurgaon Map */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[rgb(13,121,22)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[rgb(0,55,32)]">{siteInfo.locations.gurgaon.name}</h3>
                  <p className="text-sm text-[rgb(131,146,140)]">{siteInfo.locations.gurgaon.address}</p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-black/5">
                <iframe
                  src={siteInfo.locations.gurgaon.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Casa Garden Gurgaon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
