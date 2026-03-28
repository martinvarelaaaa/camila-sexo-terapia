import type { Metadata } from "next";
import { services } from "@/app/servicios/data";
import { ServicePage } from "@/components/ServicePage";

const service = services.find((s) => s.id === "individual")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: "/psicoterapia-individual" },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: "https://www.camilajurfest.com/psicoterapia-individual",
  },
};

export default function PsicoterapiaIndividualPage() {
  return <ServicePage service={service} />;
}
