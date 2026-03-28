import type { Metadata } from "next";
import { services } from "@/app/servicios/data";
import { ServicePage } from "@/components/ServicePage";

const service = services.find((s) => s.id === "sexual")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: "/terapia-sexual" },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: "https://www.camilajurfest.com/terapia-sexual",
  },
};

export default function TerapiaSexualPage() {
  return <ServicePage service={service} />;
}
