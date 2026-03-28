import type { Metadata } from "next";
import { services } from "@/app/servicios/data";
import { ServicePage } from "@/components/ServicePage";

const service = services.find((s) => s.id === "perinatal")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: "/terapia-perinatal" },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: "https://www.camilajurfest.com/terapia-perinatal",
  },
};

export default function TerapiaPerinentalPage() {
  return <ServicePage service={service} />;
}
