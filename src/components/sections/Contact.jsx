import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Phone, MapPin } from 'lucide-react';
import ShinyText from '../animations/ShinyText';
import Magnet from '../animations/Magnet';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        // Extract pure number. Fallback to the one seen in Hero.jsx if needed.
        const phoneRaw = personalInfo.phone || '916383456066';
        let phoneNum = phoneRaw.replace(/[^0-9]/g, '');

        // Formating the WhatsApp message beautifully
        const whatsappMessage = `Hi Surya! 👋\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Ensure the phone number starts with country code, assuming 91 if it's 10 digits
        if (phoneNum.length === 10) {
            phoneNum = `91${phoneNum}`;
        }

        // Open WhatsApp in a new tab
        window.open(`https://wa.me/${phoneNum}?text=${encodedMessage}`, '_blank');

        // Reset the form fields after opening WhatsApp
        setFormData({ name: '', subject: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-body-bg text-evergreen relative">
            {/* Premium Gradients and Glows - Light */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-light/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-mint-dark/50 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <SectionHeading title="Work with Me" subtitle={true} />

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch mt-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-evergreen mb-6 tracking-tighter">Let's build something <ShinyText text="legendary." className="text-emerald drop-shadow-sm" /></h3>
                            <p className="text-royal/90 text-base md:text-lg font-medium leading-relaxed mb-12">
                                I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-5 bg-white border border-white shadow-premium rounded-3xl group-hover:bg-emerald group-hover:border-emerald transition-all duration-300">
                                    <Mail className="text-emerald group-hover:text-white w-7 h-7 transition-colors drop-shadow-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-royal/60 font-black uppercase tracking-[0.2em] mb-1">Email Me</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-xl font-bold text-evergreen hover:text-emerald transition-colors">{personalInfo.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-5 bg-white border border-white shadow-premium rounded-3xl group-hover:bg-emerald group-hover:border-emerald transition-all duration-300">
                                    <Phone className="text-emerald group-hover:text-white w-7 h-7 transition-colors drop-shadow-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-royal/60 font-black uppercase tracking-[0.2em] mb-1">Call Me</p>
                                    <a href={`tel:${personalInfo.phone}`} className="text-xl font-bold text-evergreen hover:text-emerald transition-colors">{personalInfo.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-5 bg-white border border-white shadow-premium rounded-3xl group-hover:bg-emerald group-hover:border-emerald transition-all duration-300">
                                    <MapPin className="text-emerald group-hover:text-white w-7 h-7 transition-colors drop-shadow-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-royal/60 font-black uppercase tracking-[0.2em] mb-1">Location</p>
                                    <p className="text-xl font-bold text-evergreen">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-16 pt-12 border-t border-mint-dark/50">
                            {personalInfo.social.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Magnet key={index} padding={50} disabled={false} magnetStrength={3} className="inline-block relative z-20">
                                        <motion.a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="p-5 bg-white text-royal border border-white shadow-sm rounded-2xl hover:bg-evergreen hover:text-white hover:border-evergreen transition-all hover:shadow-premium block cursor-pointer"
                                        >
                                            <Icon size={24} />
                                        </motion.a>
                                    </Magnet>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Form dynamically wired to WhatsApp */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true, margin: "-50px" }}
                        onSubmit={handleWhatsAppSubmit}
                        className="space-y-6 bg-white/70 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-premium relative"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-royal/60 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-mint rounded-2xl px-6 py-4 text-evergreen font-semibold focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all shadow-sm placeholder:text-royal/40" placeholder="John Doe" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-royal/60 uppercase tracking-[0.2em] ml-2">Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-white border border-mint rounded-2xl px-6 py-4 text-evergreen font-semibold focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all shadow-sm placeholder:text-royal/40" placeholder="Project Inquiry" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-royal/60 uppercase tracking-[0.2em] ml-2">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-mint rounded-2xl px-6 py-4 text-evergreen font-semibold focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all shadow-sm placeholder:text-royal/40" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-royal/60 uppercase tracking-[0.2em] ml-2">Your Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-white border border-mint rounded-2xl px-6 py-4 text-evergreen font-semibold focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all shadow-sm placeholder:text-royal/40 resize-none" placeholder="Tell me about your amazing project ideas..."></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-6 bg-emerald hover:bg-evergreen text-white font-black py-5 rounded-2xl shadow-button hover:shadow-premium transition-all text-[15px] uppercase tracking-[0.2em]"
                        >
                            Send via WhatsApp
                        </motion.button>
                    </motion.form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
