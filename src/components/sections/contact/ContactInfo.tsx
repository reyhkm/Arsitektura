"use client";

import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 text-gray-700 dark:text-gray-300">
      <div className="flex items-start">
        <MapPin size={24} className="text-accent dark:text-dark-accent mr-4 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Alamat Kantor</h4>
          <p>Jl. Arsitektur No. 123, Kota Imajinasi,</n          <br />Indonesia, 40100</p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail size={24} className="text-accent dark:text-dark-accent mr-4 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Email</h4>
          <a href="mailto:info@arkitekturadigital.com" className="hover:text-accent dark:hover:text-dark-accent transition-colors">
            info@arkitekturadigital.com
          </a>
        </div>
      </div>
      <div className="flex items-start">
        <Phone size={24} className="text-accent dark:text-dark-accent mr-4 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-lg text-foreground dark:text-dark-foreground">Telepon</h4>
          <a href="tel:+622123456789" className="hover:text-accent dark:hover:text-dark-accent transition-colors">
            +62 21 2345 6789
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
