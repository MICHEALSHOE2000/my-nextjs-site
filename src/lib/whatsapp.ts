export const PHONE = "+18032905650";
export const PHONE_DISPLAY = "+1 (803) 290-5650";

export const whatsappMessages = {
  headerBanner:
    "Hi! I saw your website banner and I’d like help choosing the right puppy.",
  headerPrimary:
    "Hi! I’m interested in getting a puppy. Can you guide me through available options?",
  heroPrimary:
    "Hi! I’m ready to find a puppy today. Can you share available puppies and next steps?",
  footerSupport:
    "Hi! I need guidance picking the best puppy for my family.",
  floatingGeneral:
    "Hi! I’m browsing your site and would like to chat about available puppies.",
  floatingBreedRequest:
    "Hi! I want to tell you exactly the type of dog I want:",
} as const;

const toWhatsAppNumber = (phone: string) => {
  return phone.replace(/\D/g, "");
};

export const createWhatsAppUrl = (message: string) => {
  const whatsappNumber = toWhatsAppNumber(PHONE);

  if (!whatsappNumber) {
    return "#";
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
