import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-dark text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-heading text-4xl font-bold tracking-tight">
                                FlowSt<span className="text-secondary">8</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
                            Master the Water. Master Your Mind. <br />
                            Premier kayak coaching combining technical excellence with flow state psychology.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="mailto:hello@flowst8.eu" className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Programs</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-secondary transition-colors">Discover Flow</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-secondary transition-colors">Rapid Progress</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-secondary transition-colors">Master Class</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-secondary transition-colors">Private Coaching</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                                <span>Soca Valley, Slovenia<br />& Apps across Europe</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-secondary shrink-0" />
                                <a href="mailto:hello@flowst8.eu" className="hover:text-white transition-colors">hello@flowst8.eu</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} FlowSt8 Kayaking. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
