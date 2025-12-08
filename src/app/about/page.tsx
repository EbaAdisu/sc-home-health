import type { Metadata } from "next";
import { Heart, Shield, Award, UserCheck, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "About – SC Home Health Care Service Agency",
    description:
        "Learn about SC Home Health Care Service Agency, a warm, Maryland-based home health provider offering skilled nursing, personal care, and Medicaid-friendly services focused on dignity and independence.",
};

const values = [
    {
        name: "Compassion",
        description: "We treat every client and family as we would our own loved ones.",
        icon: Heart,
    },
    {
        name: "Integrity",
        description: "We do the right thing, even when no one is looking.",
        icon: Shield,
    },
    {
        name: "Clinical Excellence",
        description: "We follow evidence-based practices and maintain high standards of care.",
        icon: Award,
    },
    {
        name: "Respect & Dignity",
        description: "We honor each person’s culture, preferences, and privacy.",
        icon: UserCheck,
    },
    {
        name: "Accountability",
        description: "We take responsibility for our actions and continuously seek improvement.",
        icon: ClipboardCheck,
    },
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            About SC Home Health Care Service Agency
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                            Our Promise: Compassionate, Professional Home Health Care You Can
                            Trust.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our Story
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="text-lg leading-8 text-muted-foreground">
                                <p>
                                    SC Home Health Care Service Agency was founded with a clear
                                    purpose: to make high-quality, compassionate care available to
                                    people where they feel safest—at home. We recognized that many
                                    individuals need clinical support but prefer to remain in their
                                    own environment, surrounded by familiar routines, family, and
                                    community.
                                </p>
                                <p className="mt-6">
                                    From day one, our focus has been to combine strong clinical
                                    standards with genuine human connection. We work closely with
                                    clients, families, physicians, and case managers to build care
                                    plans that support long-term health, safety, and independence.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl bg-muted/50 overflow-hidden">
                                {/* Placeholder for About Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-muted-foreground">
                                    About Us Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Values Section */}
            <div className="bg-muted/30 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Our Mission & Vision
                            </h2>
                            <div className="mt-6 space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-primary">
                                        Our Mission
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                                        Our mission is to enrich the lives of individuals across
                                        Maryland by delivering exceptional skilled nursing and home
                                        health services that honor each person’s dignity, preferences,
                                        and goals.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary">
                                        Our Vision
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                                        Our vision is to be one of Maryland’s most trusted and
                                        respected home health providers—known for clinical excellence,
                                        compassionate caregivers, and reliable service that families
                                        can count on.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                                Our Core Values
                            </h2>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                {values.map((value) => (
                                    <div key={value.name} className="flex flex-col">
                                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                                            <value.icon
                                                className="h-5 w-5 flex-none text-secondary"
                                                aria-hidden="true"
                                            />
                                            {value.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                            <p className="flex-auto">{value.description}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approach to Care */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            How We Deliver Care
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Our approach to home health care is collaborative and structured.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Assessment & Planning
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        We begin with a thorough nursing assessment and develop a
                                        written Plan of Care tailored to each client’s medical,
                                        functional, and personal needs.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Matching & Communication
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        We match clients with caregivers and nurses whose skills and
                                        personalities fit the situation, while maintaining regular
                                        communication with physicians, case managers, and families.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Review & Adjust
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        We review and adjust services as needs change over time. Our
                                        clients are always at the center of the decision-making
                                        process.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="bg-primary/5 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Leadership & Clinical Oversight
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            SC Home Health Care Service Agency is led by experienced healthcare
                            professionals dedicated to clinical quality and regulatory
                            compliance. Our leadership team supports caregivers and clinicians
                            with training, tools, and guidance to ensure that each visit meets
                            our standards of excellence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

