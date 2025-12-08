import type { Metadata } from "next";
import {
    Stethoscope,
    HeartHandshake,
    Activity,
    Home,
    FileCheck,
    CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Services – SC Home Health Care Service Agency",
    description:
        "Explore SC Home Health Care Service Agency’s skilled nursing, personal care, chronic disease management, and transitional care services available across Maryland.",
};

const services = [
    {
        id: "skilled-nursing",
        title: "Skilled Nursing Services",
        description:
            "Our Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) bring clinical expertise directly into the home. Skilled nursing services may include:",
        icon: Stethoscope,
        items: [
            "Comprehensive nursing assessments",
            "Medication management and administration",
            "Wound and ostomy care",
            "Injections and IV-related support (where applicable)",
            "Chronic disease monitoring (e.g., heart failure, COPD, diabetes, hypertension)",
            "Post-operative and post-hospitalization follow-up",
            "Pain and symptom management",
            "Patient and family education on medications, disease processes, and home safety",
        ],
        footer:
            "Our goal is to help clients remain stable, safe, and out of the hospital whenever possible.",
    },
    {
        id: "personal-care",
        title: "Home Health Aide & Personal Care",
        description:
            "Our home health aides and personal care staff provide essential assistance with daily activities, including:",
        icon: HeartHandshake,
        items: [
            "Bathing and personal hygiene",
            "Dressing and grooming",
            "Toileting and incontinence care",
            "Safe transfers and mobility",
            "Simple exercise and range-of-motion support as directed",
            "Meal preparation and feeding assistance",
            "Light housekeeping related to the client’s care",
            "Companionship and safety monitoring",
        ],
        footer:
            "These services are designed to support comfort, dignity, and independence at home.",
    },
    {
        id: "chronic-disease",
        title: "Chronic Disease Management",
        description:
            "For clients living with chronic conditions, we offer structured support to help manage symptoms and prevent avoidable complications. Our nurses and caregivers collaborate to:",
        icon: Activity,
        items: [
            "Monitor vital signs and symptoms",
            "Encourage adherence to medication schedules",
            "Watch for early warning signs of worsening conditions",
            "Educate clients and families on diet, lifestyle, and self-care strategies",
            "Coordinate with the primary care provider or specialist as needed",
        ],
        footer:
            "We commonly support clients with heart disease, diabetes, COPD, hypertension, and other long-term conditions.",
    },
    {
        id: "transitional-care",
        title: "Transitional Care from Hospital to Home",
        description:
            "Going home after a hospital stay or surgery can feel overwhelming. Our transitional care services aim to make that process safer and smoother by:",
        icon: Home,
        items: [
            "Reviewing discharge instructions",
            "Reconciling medications",
            "Coordinating follow-up appointments",
            "Providing nursing visits as needed",
            "Monitoring for early signs of complications",
        ],
        footer:
            "By staying closely involved during the first days and weeks after discharge, we help reduce the risk of readmission and support recovery at home.",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Skilled Nursing & Home Health Services in Maryland
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                            We provide a full range of home health services to support clients
                            with medical, functional, and daily living needs. Every service is
                            guided by a Plan of Care developed and supervised by our nursing
                            team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                id={service.id}
                                className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                    }`}
                            >
                                <div
                                    className={`mx-auto max-w-2xl lg:mx-0 lg:max-w-lg ${index % 2 === 1 ? "lg:col-start-2" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-x-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                            <service.icon
                                                className="h-6 w-6 text-primary"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <ul
                                        role="list"
                                        className="mt-8 space-y-3 text-base leading-7 text-foreground"
                                    >
                                        {service.items.map((item) => (
                                            <li key={item} className="flex gap-x-3">
                                                <CheckCircle2
                                                    className="mt-1 h-5 w-5 flex-none text-secondary"
                                                    aria-hidden="true"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-base font-semibold leading-7 text-primary">
                                        {service.footer}
                                    </p>
                                </div>
                                <div
                                    className={`relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl ${index % 2 === 1 ? "lg:col-start-1" : ""
                                        }`}
                                >
                                    {/* Placeholder for service images */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-muted-foreground">
                                        {service.title} Image
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Medicaid Section */}
            <div className="bg-muted/30 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                                <FileCheck className="h-8 w-8 text-secondary" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Medicaid-Friendly & Waiver Experience
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            SC Home Health Care Service Agency is enrolled with Maryland
                            Medicaid and experienced in working with home- and community-based
                            programs. We coordinate closely with case managers and service
                            coordinators to align services with each client’s plan and program
                            requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

