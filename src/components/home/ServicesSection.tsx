"use client";

import { Stethoscope, HeartHandshake, Activity, Home, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Skilled Nursing at Home",
        description: "RN and LPN visits for assessments, medication management, wound care, injections, post-hospital care, and chronic disease support.",
        icon: Stethoscope,
    },
    {
        title: "Personal Care & Daily Living Support",
        description: "Hands-on help with bathing, dressing, grooming, toileting, mobility, and safe transfers—plus light housekeeping and nutritious meal preparation.",
        icon: HeartHandshake,
    },
    {
        title: "Chronic Disease Management",
        description: "Tailored support for conditions like diabetes, heart disease, COPD, and hypertension, helping clients manage symptoms and avoid preventable hospital visits.",
        icon: Activity,
    },
    {
        title: "Transitional Care After Hospitalization",
        description: "Coordinated support after surgery or inpatient stays to help clients recover safely at home and keep follow-up appointments.",
        icon: Home,
    },
    {
        title: "Medicaid & Waiver",
        description: "Experienced in working with Maryland Medicaid and home-based waiver programs.",
        icon: FileCheck,
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Home Health Services</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        We offer a blend of skilled nursing and supportive home health services so clients can receive the right level of care in the comfort of their homes.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col rounded-2xl bg-background p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-semibold leading-7 text-foreground">{service.title}</h3>
                            <p className="mt-2 flex-auto text-base leading-7 text-muted-foreground">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/services">
                        <Button variant="outline">Explore All Services</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
