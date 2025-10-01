import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const RestaurantFooter = () => {
  const googleMapsUrl = "https://maps.google.com/?q=Everest+Cuisine+Restaurant";

  return (
    <footer className="bg-muted/30 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  (123) 456-7890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@everestcuisine.com" className="text-muted-foreground hover:text-primary">
                  info@everestcuisine.com
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
                <p className="text-muted-foreground">123 Mountain View Road</p>
                <p className="text-muted-foreground">City, State 12345</p>
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
                <p className="text-muted-foreground">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                <p className="text-muted-foreground">Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Everest Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
