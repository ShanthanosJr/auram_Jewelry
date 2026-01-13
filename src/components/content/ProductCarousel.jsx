import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const IMAGES = {
    pantheon: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    eclipse: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    halo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    oblique: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
    lintel: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    shadowline: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    hover1: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    hover2: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80",
};

const products = [
    { id: 1, name: "Aurelia", category: "Earrings", price: "€2,850", image: IMAGES.pantheon },
    { id: 2, name: "Celestia", category: "Bracelets", price: "€3,200", image: IMAGES.eclipse },
    { id: 3, name: "Lumina", category: "Earrings", price: "€1,950", image: IMAGES.halo },
    { id: 4, name: "Solara", category: "Earrings", price: "€1,650", image: IMAGES.oblique },
    { id: 5, name: "Orionis", category: "Earrings", price: "€2,250", image: IMAGES.lintel },
    { id: 6, name: "Vesper", category: "Bracelets", price: "€3,950", image: IMAGES.shadowline },
];

const ProductCarousel = () => {
    return (
        <section className="w-full mb-16 px-6">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
                <CarouselContent className="">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4">
                            <Link to={`/product/${product.id}`}>
                                <Card className="border-none shadow-none bg-transparent group">
                                    <CardContent className="p-0">
                                        <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0" />
                                            <img src={product.category === "Earrings" ? IMAGES.hover1 : IMAGES.hover2} alt={`${product.name} lifestyle`} className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                            {(product.id === 1 || product.id === 3) && (
                                                <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-primary">NEW</div>
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-light text-foreground">{product.category}</p>
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                                                <p className="text-sm font-light text-foreground">{product.price}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default ProductCarousel;
