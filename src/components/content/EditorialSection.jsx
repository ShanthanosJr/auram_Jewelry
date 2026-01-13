import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const founders = "https://images.pexels.com/photos/3419687/pexels-photo-3419687.jpeg";

const EditorialSection = () => {
    return (
        <section className="w-full mb-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 max-w-[630px]">
                    <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
                        Jewelry Crafted From Light and Gold
                    </h2>
                    <p className="text-sm font-light text-foreground leading-relaxed">
                        Auram was born from a passion for timeless elegance and exceptional craftsmanship. Our artisans blend traditional goldsmithing techniques with contemporary design, creating pieces that transcend fleeting trends and become cherished heirlooms.
                    </p>
                    <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-primary transition-colors duration-200">
                        <span>Read our full story</span>
                        <ArrowRight size={12} />
                    </Link>
                </div>

                <div className="order-first md:order-last">
                    <div className="w-full aspect-square overflow-hidden">
                        <img src={founders} alt="Auram artisans at work" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditorialSection;
