"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        content:
            "SC Home Health Care helped my mother stay comfortable at home after her hospital stay. The nurses were not only skilled, but incredibly patient and gentle. They always took time to answer our questions.",
        author: "Family Member",
    },
    {
        content:
            "Our caregiver treats my father like family. She keeps him safe, engaged, and respected. We couldn’t ask for better support.",
        author: "Client's Daughter",
    },
];

export function Testimonials() {
    return (
        <div className="bg-muted/50 py-24 sm:py-32">
            <div className="container-custom">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What Families Are Saying
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Hearing from the families we serve is our greatest reward.
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col gap-6 rounded-2xl bg-background p-8 shadow-sm ring-1 ring-gray-900/5 sm:p-10"
                            >
                                <Quote className="h-8 w-8 text-primary opacity-50" />
                                <p className="flex-auto text-lg leading-8 text-foreground">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-x-6">
                                    <div className="text-base font-semibold leading-7 text-foreground">
                                        — {testimonial.author}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

