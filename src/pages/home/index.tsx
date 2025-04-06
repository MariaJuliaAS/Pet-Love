import { StartSection } from "../../components/start";
import { FeaturedProducts } from "../../components/featuredProducts";
import { OurServices } from "../../components/ourServices";
import { AboutSection } from "../../components/about";
import { ContactSection } from "../../components/contact";

export function Home() {
    return (
        <main className="w-full flex items-center justify-center flex-col">
            <StartSection />
            <FeaturedProducts />
            <OurServices />
            <AboutSection />
            <ContactSection />
        </main>
    )
}