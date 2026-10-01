import { CourseCategories } from "@/components/home/CourseCategories";
import { NewCta } from "@/components/home/NewCta";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { GrowthFeatures } from "@/components/home/GrowthFeatures";
import { Hero } from "@/components/home/Hero";
import { LearningCategories } from "@/components/home/LearningCategories";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { SiteFooter } from "@/components/home/SiteFooter";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <PartnerLogos />
      <CourseCategories />
      <FeaturedCourses />
      <LearningCategories />
      <GrowthFeatures />
      <NewCta />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
