import { ArrowLeft, MapPin, Phone, Clock, CreditCard, Truck, Globe, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Info = () => {
  const navigate = useNavigate();
  const googleMapsUrl = "https://maps.google.com/?q=2092+Concourse+Drive,+San+Jose,+CA+95131";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Restaurant Information</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Address */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Address</h2>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  2092 Concourse Drive, San Jose, CA 95131
                  <span className="block text-sm text-primary mt-1">View on Google Maps →</span>
                </a>
              </div>
            </div>
          </section>

          {/* Phone */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Phone</h2>
                <a 
                  href="tel:+14087552125"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  +1 (408) 755-2125
                </a>
              </div>
            </div>
          </section>

          {/* Opening Hours */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Restaurant Hours</p>
                    <p className="text-muted-foreground">Tuesday - Sunday: 11:00 AM - 1:00 AM</p>
                    <p className="text-muted-foreground text-sm mt-1">Closed on Mondays</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="font-medium">Delivery</p>
                    <p className="text-muted-foreground">Same as opening hours</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="font-medium">Pickup</p>
                    <p className="text-muted-foreground">Same as opening hours</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="font-medium">On Premise</p>
                    <p className="text-muted-foreground">Same as opening hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Fees */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Delivery Fees</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Standard Fee</span>
                    <span className="font-medium">$3.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Extended Area Fee</span>
                    <span className="font-medium">$8.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Far Distance Fee</span>
                    <span className="font-medium">$10.99</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-md">
                    <p className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Free delivery on orders $40+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <CreditCard className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Apple Pay</p>
                      <p className="text-sm text-muted-foreground">Available for Pickup & Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Card Online (G-Pay / via Browser)</p>
                      <p className="text-sm text-muted-foreground">Available for Pickup & Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Pay Online</p>
                      <p className="text-sm text-muted-foreground">Available for Pickup & Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Languages</h2>
                <p className="text-muted-foreground">English</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info;
