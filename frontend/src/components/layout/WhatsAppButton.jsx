import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../../data/mock';

export const WhatsAppButton = () => {
  const whatsappNumber = siteInfo.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(
    `Hi! I'm interested in booking a stay at ${siteInfo.name}. Please share details.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};
