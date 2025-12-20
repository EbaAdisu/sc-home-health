import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact – SC Home Health Care Service Agency",
  description:
    "Contact SC Home Health Care Service Agency to ask about skilled nursing and home health services in Maryland. Call, email, or send us a message to request services or make a referral.",
};

const serviceAreas = [
  "Montgomery County",
  "Prince George’s County",
  "Baltimore County",
  "Howard County",
  "Anne Arundel County",
  "Charles County",
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact SC Home Health Care Service Agency
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              We’re here to answer questions, discuss care options, and help you
              determine whether home health services are right for you or your
              loved one.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">

          {/* Contact Info & Service Areas */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Reach out to us via phone, email, or visit our office.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <Phone className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-primary text-foreground" href="tel:+12026796177">
                    (202) 679-6177
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd className="text-foreground">
                  2001 Conley Court<br />
                  Silver Spring, Maryland 20904
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-primary text-foreground" href="mailto:info@schomehealthcare.com">
                    info@schomehealthcare.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Office Hours</span>
                  <Clock className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
                </dt>
                <dd className="text-foreground">
                  Monday – Friday, 8:00 AM to 6:00 PM
                  <br />
                  <span className="text-sm text-muted-foreground">
                    On-Call Nurse: Available for urgent clinical concerns outside
                    of business hours.
                  </span>
                </dd>
              </div>
            </dl>

            <div className="mt-16">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Service Areas in Maryland
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                We proudly serve communities across Maryland, including:
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex gap-x-3">
                    <MapPin className="h-6 w-5 flex-none text-secondary" aria-hidden="true" />
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Contact us to confirm availability in your specific area.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-muted/30 p-8 ring-1 ring-gray-900/10 sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Send Us a Message or Referral
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Use this secure form to ask questions, request services, or submit a
              referral. A member of our team will follow up as soon as possible.
            </p>
            <form action="#" method="POST" className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-foreground"
                >
                  Name
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
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-foreground"
                >
                  Phone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                  />
                </div>
              </div>
              <div>
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
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold leading-6 text-foreground"
                >
                  Are you a:
                </label>
                <div className="mt-2.5">
                  <select
                    id="role"
                    name="role"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                  >
                    <option>Client</option>
                    <option>Family Member</option>
                    <option>Case Manager</option>
                    <option>Healthcare Provider</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-method"
                  className="block text-sm font-semibold leading-6 text-foreground"
                >
                  Preferred Contact Method
                </label>
                <div className="mt-2.5 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <input type="radio" id="contact-phone" name="contact-method" value="phone" className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" />
                    <label htmlFor="contact-phone" className="text-sm leading-6 text-foreground">Phone</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" id="contact-email" name="contact-method" value="email" className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" />
                    <label htmlFor="contact-email" className="text-sm leading-6 text-foreground">Email</label>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-foreground"
                >
                  Message / Details
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                    placeholder="Include basic information about the client, needs, and preferred schedule"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


