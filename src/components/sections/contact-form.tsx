"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  children: React.ReactNode;
  puppy?: {
    name: string;
    breed: string;
    price: string;
  };
}

const ContactForm = ({ children, puppy }: ContactFormProps) => {
  const [state, handleSubmit] = useForm("xeqvnlve");
  const [open, setOpen] = React.useState(false);

  // Reset form when dialog closes
  const [formKey, setFormKey] = React.useState(Date.now());
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setFormKey(Date.now());
    }
    setOpen(isOpen);
  };
  
 return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent key={formKey} className="sm:max-w-[500px] bg-card text-card-foreground p-8 rounded-lg max-h-[90vh] overflow-y-auto">
        {state.succeeded ? (
          <div className="flex flex-col items-center text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
            <h3 className="font-bold text-2xl text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground text-lg">
              You will be contacted shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center mb-6">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Take {puppy?.name || "This Puppy"} Home
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                {puppy && (
                  <div className="text-sm space-y-1">
                    <div><span className="font-medium">{puppy.breed}</span> • {puppy.name}</div>
                    <div className="text-primary font-semibold">{puppy.price}</div>
                  </div>
                )}
                Complete the form below and a Puppy Concierge will contact you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden field for puppy information */}
              {puppy && (
                <input
                  type="hidden"
                  name="puppy_info"
                  value={`${puppy.name} - ${puppy.breed} - ${puppy.price}`}
                />
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="mt-1 bg-background border-input"
                  />
                  <ValidationError 
                    prefix="First Name" 
                    field="firstName"
                    errors={state.errors}
                    className="text-destructive text-xs mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="mt-1 bg-background border-input"
                  />
                  <ValidationError 
                    prefix="Last Name" 
                    field="lastName"
                    errors={state.errors}
                    className="text-destructive text-xs mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 bg-background border-input"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-destructive text-xs mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  required
                  className="mt-1 bg-background border-input"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                  className="text-destructive text-xs mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-sm font-medium text-foreground">
                  Shipping Address *
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="123 Main Street&#10;Anytown, ST 12345"
                  required
                  className="mt-1 bg-background border-input min-h-[80px]"
                />
                 <ValidationError 
                  prefix="Address" 
                  field="address"
                  errors={state.errors}
                  className="text-destructive text-xs mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your family, experience with pets, or any questions..."
                  className="mt-1 bg-background border-input"
                />
              </div>

              <DialogFooter className="!mt-6">
                <Button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-auto py-3 rounded-md">
                  {state.submitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;