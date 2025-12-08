"use client";

import { ShieldCheck, UserCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        name: "Licensed & Medicaid-Enrolled",
        description:
            "We are a fully licensed home health agency in Maryland and enrolled with Medicaid, with experience supporting home- and community-based programs and waiver participants.",
        icon: ShieldCheck,
    },
    {
        name: "RN-Supervised Skilled Care",
        description:
            "Our care is guided by Registered Nurses who develop personalized care plans, oversee caregivers, and communicate with physicians, case managers, and families.",
        icon: UserCheck,
    },
    {
        name: "Compassionate, Screened Caregivers",
        description:
            "Every caregiver is carefully screened, trained, and supervised. We look for clinical competence—but also kindness, patience, and respect for each person we serve.",
        icon: Heart,
    },
];

export function WhyChooseUs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="container-custom">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Why Families Across Maryland Trust SC Home Health Care
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="flex flex-col"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
