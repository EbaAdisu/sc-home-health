"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <div className="bg-primary py-16 sm:py-24">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                        Ready to Talk About Home Health Care in Maryland?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
                        Whether you are a family member, case manager, or healthcare provider,
                        we’re here to help you explore options for skilled nursing and home
                        health services at home.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-background text-foreground hover:bg-muted"
                            >
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

