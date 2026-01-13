const Footer = () => {
    return (
        <footer className="w-full bg-background text-foreground pt-8 pb-2 px-6 border-t border-border mt-48">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                    {/* Brand - Left side */}
                    <div>
                        <h2 className="text-2xl font-medium tracking-wider mb-4 text-primary">AURAM</h2>
                        <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-6">
                            Exquisite gold jewelry crafted with timeless elegance
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-2 text-sm font-light text-muted-foreground">
                            <div>
                                <p className="font-normal text-foreground mb-1">Visit Us</p>
                                <p>123 Fifth Avenue</p>
                                <p>New York, NY 10016</p>
                            </div>
                            <div>
                                <p className="font-normal text-foreground mb-1 mt-3">Contact</p>
                                <p>+1 (212) 555-0123</p>
                                <p>hello@auramjewelry.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Link lists - Right side */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Shop */}
                        <div>
                            <h4 className="text-sm font-normal mb-4">Shop</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">New In</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Rings</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Earrings</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Bracelets</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Necklaces</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-sm font-normal mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Care Instructions</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="text-sm font-normal mb-4">Connect</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Pinterest</a></li>
                                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section - edge to edge separator */}
            <div className="border-t border-border -mx-6 px-6 pt-2">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm font-light text-muted-foreground mb-1 md:mb-0">
                        © 2024 Auram. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="/privacy-policy" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
