"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-background pt-14 pb-16 sm:pb-20">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero.png"
                    alt="Compassionate home care"
                    fill
                    className="object-cover object-center opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40" />
            </div>

            <div className="container-custom relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Warm, Compassionate Care—<br />
                            <span className="text-primary">Right at Home.</span>
                        </h1>
                        <p className="mt-4 text-xl font-semibold text-muted-foreground">
                            Skilled Nursing & Home Health Services Across Maryland.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            SC Home Health Care Service Agency provides professional, person-centered home health services designed to help you or your loved one live safely and independently at home. Our RN-supervised team delivers Medicaid-friendly skilled nursing and personal care with warmth, dignity, and respect.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/contact">
                                <Button size="lg" className="text-base">
                                    Request Services
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="text-base">
                                    View Our Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
