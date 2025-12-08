"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CarePhilosophy() {
    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="container-custom">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:max-w-lg"
                        >
                            <h2 className="text-base font-semibold leading-7 text-primary">Our Care Philosophy</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                A Warm, Person-Centered Approach to Home Health Care
                            </p>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                We understand that inviting caregivers into your home is a deeply personal decision. At SC Home Health Care Service Agency, we take that trust seriously.
                            </p>
                            <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">
                                <p>
                                    Our approach begins with listening—to clients, family members, and healthcare providers. We design each Plan of Care around the person, not just the diagnosis, and regularly review services to ensure they remain safe, effective, and aligned with each client’s goals and preferences.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-gray-900/10">
                            {/* Placeholder for a care philosophy image. Using a colored div for now if no image available, or I can generate one.
                    I'll use a gradient placeholder for speed as requested, or I can generate another image later.
                    Let's generate one quickly to make it look good.
                */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Care Philosophy Image</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
