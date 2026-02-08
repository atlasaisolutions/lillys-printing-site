import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FadeIn from "@/components/FadeIn";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();

  // Check if we navigated here with a specific service in mind
  const serviceInterest = location.state?.service;
  const defaultMessage = serviceInterest
    ? `Hi, I'm interested in a quote for ${serviceInterest}...`
    : "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: defaultMessage },
  });

  /* 
   * EmailJS Configuration
   */
  const SERVICE_ID = "service_j6d655m";
  const TEMPLATE_ID = "template_pawj9qa";
  const PUBLIC_KEY = "ryi9hd_G3BWD0AvE0";

  /*
   * Google Sheets Configuration
   */
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVwKduGA-zG0qF7bxsFhoWDeAhqRFAASTb_o1iYEm4XaRGCa2-BhKQzZIT6qzlzxuM/exec";

  const submitToGoogleSheets = async (data: ContactFormValues) => {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Submitted to Google Sheets");
    } catch (error) {
      console.error("Google Sheets Error:", error);
      // We don't block the user flow if Sheets fails, just log it
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    // Show loading state could be good here, but for now we'll just send
    try {
      console.log("Sending data...", data);

      // 1. Send to EmailJS (Instant Notification)
      const emailPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
        },
        PUBLIC_KEY
      );

      // 2. Send to Google Sheets (Database)
      const sheetsPromise = submitToGoogleSheets(data);

      // Wait for both (or at least EmailJS since that's user-facing)
      await Promise.all([emailPromise, sheetsPromise]);

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you shortly.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or call us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with our team.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(443) 454-2210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </Form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">(443) 454-2210</p>
                      <p className="text-muted-foreground text-xs">(410) 988-4422</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        info@lillysprinting.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">
                        Business Hours
                      </p>
                      <p className="text-muted-foreground">Mon–Fri: 8AM – 6PM</p>
                      <p className="text-muted-foreground">Sat: 9AM – 2PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle size={20} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">
                    24/7 AI Chat Available
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Need help outside business hours? Our AI assistant is available
                  24/7 via the chat widget in the bottom-right corner.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-foreground">Baltimore Office</p>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-square border border-border/50 shadow-sm">
                    <iframe
                      src="https://maps.google.com/maps?q=5528+Belair+Rd,+Baltimore,+MD+21206&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Baltimore Location"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-foreground">Arnold Office</p>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-square border border-border/50 shadow-sm">
                    <iframe
                      src="https://maps.google.com/maps?cid=7365640885426244173&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Arnold Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
