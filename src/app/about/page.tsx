import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Ticket App</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Making ticket purchasing seamless and secure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We strive to provide a hassle-free platform for buying and selling tickets to your favorite events. 
              Our secure platform ensures that every transaction is protected, giving you peace of mind.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What makes us different</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Secure transactions</li>
              <li>Real-time ticket availability</li>
              <li>Mobile-friendly interface</li>
              <li>24/7 customer support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-muted-foreground">
                  Email: support@ticketapp.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Business Inquiries</h3>
                <p className="text-muted-foreground">
                  Email: business@ticketapp.com<br />
                  Phone: (555) 987-6543
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}