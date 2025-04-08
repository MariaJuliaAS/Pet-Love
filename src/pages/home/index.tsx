import { StartSection } from "../../components/start";
import { FeaturedProducts } from "../../components/featuredProducts";
import { OurServices } from "../../components/ourServices";
import { AboutSection } from "../../components/about";
import { ClientsSection } from "../../components/clients";
import { ContactSection } from "../../components/contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
    const location = useLocation();

    useEffect(() => {

        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const section = document.getElementById(sectionId)

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }

    }, [])

    return (
        <main className="w-full flex items-center justify-center flex-col">
            <StartSection />
            <FeaturedProducts />
            <OurServices />
            <AboutSection />
            <ClientsSection />
            <ContactSection />
        </main>
    )
}