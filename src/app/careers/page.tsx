import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Heart, Users, Clock, GraduationCap, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "Careers – SC Home Health Care Service Agency",
    description:
        "Explore nursing and caregiver job opportunities with SC Home Health Care Service Agency in Maryland. Join a supportive team providing compassionate home health services.",
};

const positions = [
    "Registered Nurses (RN)",
    "Licensed Practical Nurses (LPN)",
    "Certified Nursing Assistants (CNA)",
    "Home Health Aides (HHA)",
    "Personal Care Aides",
    "Office and Administrative Support",
];

const benefits = [
    {
        title: "Meaningful Work",
        description:
            "Make a real impact by helping clients remain safe and supported at home.",
        icon: Heart,
    },
    {
        title: "Supportive Leadership",
        description:
            "Our clinical and administrative leaders are accessible, respectful, and focused on helping you succeed.",
        icon: Users,
    },
    {
        title: "Flexible Scheduling",
        description:
            "We offer a variety of schedules, including full-time, part-time, and per-visit opportunities.",
        icon: Clock,
    },
    {
        title: "Ongoing Training",
        description:
            "Orientation, skills refreshers, and education on safety, infection control, and best practices in home health.",
        icon: GraduationCap,
    },
];

export default function CareersPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Join the SC Home Health Care Team
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                            At SC Home Health Care Service Agency, we believe that great care
                            begins with great people. We’re always looking for compassionate,
                            reliable professionals who want to make a difference in the lives of
                            clients and families across Maryland.
                        </p>
                    </div>
                </div>
            </div>

            {/* Positions & Why Work With Us */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                        {/* Positions We Hire */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Positions We Commonly Hire
                            </h2>
                            <div className="mt-6 space-y-4">
                                {positions.map((position) => (
                                    <div
                                        key={position}
                                        className="flex items-center gap-x-3 rounded-lg border border-gray-200 p-4 hover:bg-muted/50 transition-colors"
                                    >
                                        <Briefcase
                                            className="h-5 w-5 text-secondary"
                                            aria-hidden="true"
                                        />
                                        <span className="text-base font-medium leading-7 text-foreground">
                                            {position}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Work With Us */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Why Work With Us?
                            </h2>
                            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="flex flex-col">
                                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                                            <benefit.icon
                                                className="h-5 w-5 flex-none text-primary"
                                                aria-hidden="true"
                                            />
                                            {benefit.title}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                            <p className="flex-auto">{benefit.description}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Form Section */}
            <div className="bg-muted/30 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            How to Apply
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-muted-foreground">
                            To apply for a position with SC Home Health Care Service Agency,
                            please use the application form below or contact our office for more
                            information.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Full Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Phone Number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="position"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Position of Interest
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="position"
                                        name="position"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                                    >
                                        <option>Registered Nurse (RN)</option>
                                        <option>Licensed Practical Nurse (LPN)</option>
                                        <option>Certified Nursing Assistant (CNA)</option>
                                        <option>Home Health Aide (HHA)</option>
                                        <option>Personal Care Aide</option>
                                        <option>Office/Admin Support</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="resume"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Upload Resume
                                </label>
                                <div className="mt-2.5">
                                    <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary/10 file:text-primary
                        hover:file:bg-primary/20
                    "/>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold leading-6 text-foreground"
                                >
                                    Message / Additional Information
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 mt-4">
                                <Button type="submit" size="lg" className="w-full">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

