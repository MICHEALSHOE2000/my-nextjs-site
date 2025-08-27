import type { FC, SVGProps } from 'react';
import { Phone, Instagram, Youtube, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const AnchorLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const footerLinksData = {
  explore: [
    { href: 'https://www.puppyspot.com/puppies-for-sale', label: 'Explore puppies for sale' },
    { href: 'https://www.puppyspot.com/breed', label: 'Explore available breeds' },
    { href: 'https://www.puppyspot.com/collections', label: 'Explore by lifestyle' },
    { href: 'https://www.puppyspot.com/essentials', label: 'Shop essentials' },
  ],
  forPuppyParents: [
    { href: 'https://www.puppyspot.com/login', label: 'Log in or join' },
    { href: 'https://www.puppyspot.com/akc', label: 'AKC registration' },
    { href: 'https://www.puppyspot.com/akc-benefits', label: 'AKC benefits' },
    { href: 'https://www.puppyspot.com/fetch-pet-insurance', label: 'Fetch insurance' },
  ],
  forBreeders: [
    { href: 'https://breeders.puppyspot.com/login', label: 'Breeder log in' },
    { href: 'https://www.puppyspot.com/breeder/sign-up', label: 'New breeder sign up' },
    { href: 'https://www.puppyspot.com/breeder-standards', label: 'Breeder standards' },
    { href: 'https://www.puppyspot.com/breeder/breeder-membership-agreement', label: 'Breeder Membership Agreement' },
  ],
  support: [
    { href: 'https://www.puppyspot.com/contact-us', label: 'Contact us' },
    { href: 'https://www.puppyspot.com/help', label: 'Help center' },
    { href: 'https://www.puppyspot.com/faqs', label: 'FAQs' },
    { href: 'https://www.puppyspot.com/terms-of-commitment', label: 'Terms & Conditions of Commitment' },
  ],
  aboutPuppySpot: [
    { href: 'https://www.puppyspot.com/how-it-works', label: 'How it works' },
    { href: 'https://www.puppyspot.com/about-us', label: 'About us' },
    { href: 'https://www.puppyspot.com/our-promise', label: 'Our promise' },
    { href: 'https://www.puppyspot.com/delivery', label: 'Our delivery programs' },
  ],
};

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="11" height="20" viewBox="0 0 11 20" fill="currentColor" {...props}>
    <path d="M7.84375 3.33333H10.1937V0.14C9.84625 0.0966667 8.76125 0 7.51875 0C4.93875 0 3.12125 1.65667 3.12125 4.69333V7.5H0.19375V11.0933H3.12125V20H6.87125V11.0933H9.72125L10.1588 7.5H6.87125V5.05333C6.87125 4.06333 7.14375 3.33333 7.84375 3.33333Z" />
  </svg>
);

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
     <path d="M15.4418 0.960938H18.5268L12.0238 9.48994L19.6828 19.0389H13.5188L8.76182 12.6369L3.37682 19.0389H0.291825L7.20682 10.0249L-0.317175 0.960938H6.01282L10.3958 6.95094L15.4418 0.960938ZM14.3948 17.2039H16.1088L4.99282 2.70094H3.21282L14.3948 17.2039Z"/>
  </svg>
);

const socialLinks = [
  { href: 'https://www.instagram.com/puppyspot', icon: Instagram, name: 'Instagram', className: 'h-5 w-5' },
  { href: 'https://www.facebook.com/puppyspot', icon: FacebookIcon, name: 'Facebook', className: 'h-5 w-auto' },
  { href: 'https://www.youtube.com/user/PuppySpot', icon: Youtube, name: 'YouTube', className: 'h-5 w-auto' },
  { href: 'https://twitter.com/puppyspot', icon: XIcon, name: 'X', className: 'h-5 w-5' },
];

const paymentMethods = [
  { src: 'https://www.puppyspot.com/assets/img/amex.svg', alt: 'American Express' },
  { src: 'https://www.puppyspot.com/assets/img/discover.svg', alt: 'Discover' },
  { src: 'https://www.puppyspot.com/assets/img/mastercard.svg', alt: 'Mastercard' },
  { src: 'https://www.puppyspot.com/assets/img/visa.svg', alt: 'Visa' },
  { src: 'https://www.puppyspot.com/assets/img/paypal.svg', alt: 'PayPal' },
  { src: 'https://www.puppyspot.com/assets/img/apple-pay.svg', alt: 'Apple Pay' },
  { src: 'https://www.puppyspot.com/assets/img/splitit.svg', alt: 'Splitit' },
  { src: 'https://www.puppyspot.com/assets/img/ach.svg', alt: 'ACH Payments' },
];


const FooterLinkColumn = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
  <div>
    <h3 className="font-bold text-sm text-[#000000] mb-5">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <AnchorLink href={link.href} className="text-sm text-[#383838] hover:text-primary transition-colors">
            {link.label}
          </AnchorLink>
        </li>
      ))}
    </ul>
  </div>
);

const PuppySpotLogo = () => (
   <div>
      <Image src="https://www.puppyspot.com/assets/img/logo-ps.svg" alt="PuppySpot Logo" width={178} height={29} />
      <p className="text-[11px] tracking-[0.2em] text-foreground mt-2">THE PERFECT PUPPY PEOPLE</p>
   </div>
);

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="bg-primary text-primary-foreground text-center py-3">
                <AnchorLink href="https://www.puppyspot.com/delivery" className="font-semibold text-sm">Nationwide Door-To-Door Delivery</AnchorLink>
            </div>

            <div className="bg-secondary py-14">
                <div className="mx-auto px-5 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="lg:w-2/5 mb-10 lg:mb-0">
                            <PuppySpotLogo />
                            <p className="text-sm text-muted-foreground mt-5 max-w-[340px]">
                                We promise to provide your perfect puppy and ensure your experience leaves you with a big smile and a warm heart.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
                            <div>
                                <h3 className="font-bold text-sm text-foreground mb-2">Need guidance?</h3>
                                <AnchorLink href="sms:13022503912" className="flex items-center gap-2 text-lg text-foreground font-semibold hover:text-primary">
                                    <Phone className="h-5 w-5"/>
                                    (302) 250-3912
                                </AnchorLink>
                                <p className="text-xs text-muted-foreground mt-1">Everyday 5AM-9PM PST</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-foreground mb-2">Follow us</h3>
                                <div className="flex space-x-4 items-center">
                                    {socialLinks.map((social) => (
                                        <AnchorLink key={social.name} href={social.href} className="text-foreground hover:text-primary transition-colors">
                                            <social.icon className={social.className}/>
                                        </AnchorLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="mx-auto px-5 max-w-[1200px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8">
                        <FooterLinkColumn title="Explore" links={footerLinksData.explore} />
                        <FooterLinkColumn title="For puppy parents" links={footerLinksData.forPuppyParents} />
                        <FooterLinkColumn title="For breeders" links={footerLinksData.forBreeders} />
                        <FooterLinkColumn title="Support" links={footerLinksData.support} />
                        <FooterLinkColumn title="About PuppySpot" links={footerLinksData.aboutPuppySpot} />
                    </div>
                </div>
            </div>

            <div className="border-t border-border pt-8 pb-6">
                <div className="mx-auto px-5 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex items-center gap-2 font-semibold text-sm flex-shrink-0">
                            <ShieldCheck className="h-6 w-6 text-primary"/>
                            Secure Payments
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                             {paymentMethods.map((method) => (
                                <Image key={method.alt} src={method.src} alt={method.alt} width={38} height={24} className="h-6 w-auto" />
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 max-w-2xl">
                        Your payment details are secured. All the information is protected using Secure Sockets Layer (SSL) technology.
                    </p>
                </div>
            </div>

            <div className="border-t border-border py-6">
                <div className="mx-auto px-5 max-w-[1200px] flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <span>© 2025 PuppySpot</span>
                        <AnchorLink href="https://www.puppyspot.com/terms-of-use" className="hover:text-primary">Terms of Use</AnchorLink>
                        <AnchorLink href="https://www.puppyspot.com/privacy" className="hover:text-primary">Privacy Policy</AnchorLink>
                        <AnchorLink href="https://www.puppyspot.com/sitemap" className="hover:text-primary">Sitemap</AnchorLink>
                        <span>Accredited BBB</span>
                    </div>
                    <div>
                        <Image src="https://www.puppyspot.com/assets/img/footer/usda-certified.svg" alt="USDA Certified" width={75} height={75} />
                    </div>
                </div>
            </div>
            
            <div className="relative h-[85px] w-full">
                <Image src="https://www.puppyspot.com/assets/img/footer-v2-bkgd-img-d.svg" layout="fill" objectFit="cover" alt="Footer decoration" />
            </div>
        </footer>
    );
};

export default Footer;