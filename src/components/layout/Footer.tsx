import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Admissions", href: "/admissions" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: Facebook,
        },
        {
            name: "Twitter",
            href: "#",
            icon: Twitter,
        },
        {
            name: "Instagram",
            href: "#",
            icon: Instagram,
        },
    ],
};

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="container-custom py-12 md:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-white">SC Home Health</span>
                        <p className="text-sm leading-6 text-slate-400">
                            Compassionate, skilled care in the comfort of your home. Serving Maryland with dedication and excellence.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-slate-400 hover:text-white">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.main.slice(0, 4).map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-400 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.main.slice(4).map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-400 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                                        <span>2001 Conley Court<br />Silver Spring, Maryland 20904</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-slate-400">
                                        <Phone className="h-4 w-4 shrink-0" />
                                        <a href="tel:+12026796177" className="hover:text-white transition-colors">
                                            (202) 679-6177
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-slate-400">
                                        <Mail className="h-4 w-4 shrink-0" />
                                        <a href="mailto:info@schomehealthcare.com" className="hover:text-white transition-colors">
                                            info@schomehealthcare.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-slate-400">
                        &copy; {new Date().getFullYear()} SC Home Health Care Service Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
