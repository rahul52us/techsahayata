"use client";
import { useState } from "react";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#fafcfd] font-sans selection:bg-[#097899]/20">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#097899]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-sky-200/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#097899]/10 text-[#097899] text-sm font-bold mb-6 animate-bounce-subtle">
            <Sparkles size={16} />
            <span>We'd love to hear from you</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Contact <span className="text-[#097899]">Us</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI-powered automation? Get in
            touch with our experts today.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-6 lg:px-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Information Cards (The Bento Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="group bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-[#097899]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#097899] rounded-full"></span>
                Get in Touch
              </h3>
              
              <div className="space-y-8">
                {[
                  { icon: <MapPin size={20} />, label: "Address", val: "123 Business District, Tech City, TC 12345" },
                  { icon: <Phone size={20} />, label: "Phone", val: "9977053447" },
                  { icon: <Mail size={20} />, label: "Email", val: "support@techsahayata.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group/item">
                    <div className="w-12 h-12 bg-gray-50 text-[#097899] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#097899] group-hover/item:text-white group-hover/item:scale-110 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-gray-700 font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#097899] rounded-[2.5rem] p-8 text-white shadow-[0_20px_50px_rgba(9,120,153,0.2)] relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Clock size={200} />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock size={24} />
                Business Hours
              </h3>
              <div className="space-y-4 relative z-10">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80 font-medium">{item.day}</span>
                    <span className="font-bold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.04)] p-8 md:p-12 border border-gray-50 relative">
              <div className="absolute top-0 right-0 p-8 text-[#097899]/10">
                <Send size={120} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-10">We usually respond within 2-4 business hours.</p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#097899] transition duration-300 placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#097899] transition duration-300 placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Business Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#097899] transition duration-300 placeholder:text-gray-300"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#097899] transition duration-300 placeholder:text-gray-300 resize-none"
                      required
                    />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="group w-full bg-[#097899] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(9,120,153,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(9,120,153,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95"
                    >
                      Send Message
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bottom Accent */}
      <div className="relative h-2 w-full flex">
        <div className="h-full flex-1 bg-[#097899]"></div>
        <div className="h-full flex-1 bg-sky-400"></div>
        <div className="h-full flex-1 bg-sky-200"></div>
        <div className="h-full flex-1 bg-[#097899]"></div>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}