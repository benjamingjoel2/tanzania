import { whatsappLink } from "@/config/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello Uhuru Journeys! I'd love some help planning a trip to Tanzania.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#1f7a4d] p-3.5 text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:right-6 md:bottom-6"
    >
      <SocialIcon name="whatsapp" className="size-6" />
      <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-[max-width,padding] duration-500 group-hover:max-w-40 group-hover:pr-2 group-focus-visible:max-w-40 group-focus-visible:pr-2">
        Chat on WhatsApp
      </span>
    </a>
  );
}
