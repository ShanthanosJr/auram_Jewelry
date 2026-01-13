import { Link } from "react-router-dom";

const circularCollection = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80";
const organicEarring = "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80";

const OneThirdTwoThirdsSection = () => {
    return (
        <section className="w-full mb-16 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <Link to="/category/rings" className="block">
                        <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
                            <img
                                src={organicEarring}
                                alt="Artisan crafted jewelry"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                    <div className="">
                        <h3 className="text-sm font-normal text-foreground mb-1">
                            Artisan Craft
                        </h3>
                        <p className="text-sm font-light text-foreground">
                            Handcrafted pieces with meticulous attention to detail
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <Link to="/category/necklaces" className="block">
                        <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
                            <img
                                src={circularCollection}
                                alt="Circular jewelry collection"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                    <div className="">
                        <h3 className="text-sm font-normal text-foreground mb-1">
                            Circular Elements
                        </h3>
                        <p className="text-sm font-light text-foreground">
                            Geometric perfection meets contemporary minimalism
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneThirdTwoThirdsSection;
