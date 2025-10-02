import { MapPin, Phone, Clock, Mail, CreditCard, Truck } from 'lucide-react';

const RestaurantFooter = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=2092+Concourse+Drive,+San+Jose,+CA+95131";

  return (
    <footer className="bg-muted/30 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+14087552125" className="text-muted-foreground hover:text-primary">
                  (408) 755-2125
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@neweverestcuisine.com" className="text-muted-foreground hover:text-primary">
                  info@neweverestcuisine.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">2092 Concourse Dr, Ste 17</p>
                <p className="text-muted-foreground">San Jose, CA 95131</p>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-1">
                <p className="text-muted-foreground">Mon-Thu: 11:00 AM - 9:30 PM</p>
                <p className="text-muted-foreground">Fri-Sat: 11:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Sunday: 11:00 AM - 9:30 PM</p>
              </div>
            </div>
          </div>

          {/* Delivery & Payment */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Order Info</h3>
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Delivery</p>
                <p className="text-muted-foreground">Free on orders $40+</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Payment</p>
                <p className="text-muted-foreground">Card & Cash</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Everest Cuisine San Jose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
