import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CheckoutHeader = () => {
    return (
        <header className="w-full bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="relative flex items-center justify-between">
                    {/* Left side - Continue Shopping */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="text-sm font-light hidden sm:inline">Continue Shopping</span>
                    </Link>

                    {/* Center - Logo */}
                    <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-2xl font-medium tracking-wider text-primary">AURAM</span>
                    </Link>

                    {/* Right side - Support */}
                    <div className="text-sm font-light text-foreground">
                        Support
                    </div>
                </div>
            </div>
        </header>
    );
};

export default CheckoutHeader;
