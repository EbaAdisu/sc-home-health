import type { Metadata } from "next";
import { CheckCircle2, Phone, FileText, UserCheck, ClipboardList, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Admissions – SC Home Health Care Service Agency",
    description:
        "Learn how to begin skilled nursing and home health services with SC Home Health Care Service Agency in Maryland—from referral and eligibility verification to nursing assessment and service start.",
};

const steps = [
    {
        title: "Referral or Inquiry",
        description:
            "You can contact us directly, or a physician, hospital, case manager, or Medicaid waiver coordinator can send a referral on your behalf.",
        icon: Phone,
    },
    {
        title: "Eligibility & Coverage Review",
        description:
            "We verify insurance and Medicaid eligibility, and—when applicable—review waiver program details. We also confirm whether skilled nursing, personal care, or both are appropriate.",
        icon: FileText,
    },
    {
        title: "Nursing Assessment",
        description:
            "A Registered Nurse conducts an in-home or virtual assessment to understand medical needs, daily living challenges, home safety, and personal preferences.",
        icon: UserCheck,
    },
    {
        title: "Plan of Care Development",
        description:
            "Based on the assessment, we develop a written Plan of Care that includes specific services, visit frequency, goals, and safety recommendations.",
        icon: ClipboardList,
    },
    {
        title: "Service Start & Ongoing Follow-Up",
        description:
            "We match you with caregivers and nurses, coordinate schedules, and begin services. Our team checks in regularly to ensure that the care plan continues to meet your needs.",
        icon: PlayCircle,
    },
];

const referralSources = [
    "Hospitals and discharge planners",
    "Primary care and specialty providers",
    "Medicaid waiver case managers",
    "Rehabilitation facilities and nursing homes",
    "Families and self-referrals",
];

const firstVisitExpectations = [
    "A review of your medical history and current medications",
    "Questions about your daily activities and what you find challenging",
    "A basic physical and home safety assessment",
    "Time to ask questions about services, schedules, and what home health includes",
    "Discussion about goals—such as staying independent, avoiding hospital visits, or improving strength and comfort",
];

export default function AdmissionsPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            How to Get Started with Home Health Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                            Beginning services with SC Home Health Care Service Agency is a
                            simple, guided process. We walk you through every step so you know
                            what to expect.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5-Step Admission Process */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our 5-Step Admission Process
                        </h2>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
                            {steps.map((step, index) => (
                                <div key={step.title} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-foreground">
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                            <step.icon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <span className="text-primary text-sm font-bold mb-2 block">STEP {index + 1}</span>
                                        {step.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                        <p className="flex-auto">{step.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Two Column Section: Referrals & First Visit */}
            <div className="bg-muted/30 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">

                        {/* Who Can Refer */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Who Can Refer to SC Home Health Care?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                We accept referrals and inquiries from:
                            </p>
                            <ul className="mt-8 space-y-3 text-base leading-7 text-foreground">
                                {referralSources.map((source) => (
                                    <li key={source} className="flex gap-x-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 flex-none text-secondary"
                                            aria-hidden="true"
                                        />
                                        {source}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <p className="text-base leading-7 text-foreground font-medium">
                                    If you’re not sure whether home health is appropriate, simply contact us and we’ll help you explore options.
                                </p>
                            </div>
                        </div>

                        {/* What to Expect */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                What to Expect at Your First Visit
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                During the initial nursing assessment, you can expect:
                            </p>
                            <ul className="mt-8 space-y-3 text-base leading-7 text-foreground">
                                {firstVisitExpectations.map((item) => (
                                    <li key={item} className="flex gap-x-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 flex-none text-primary"
                                            aria-hidden="true"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-base font-semibold leading-7 text-primary">
                                Our nurse will explain recommended services and next steps.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

