import type { Metadata } from "next";
import { services } from "@/app/servicios/data";
import { ServicePage } from "@/components/ServicePage";

const service = services.find((s) => s.id === "pareja")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: "/terapia-de-pareja" },
  openGraph: {
    title: service.seoTitle,
    description: service.seoDescription,
    url: "https://www.camilajurfest.com/terapia-de-pareja",
  },
};

export default function TerapiaDeParejaPage() {
  return <ServicePage service={service} />;
}
