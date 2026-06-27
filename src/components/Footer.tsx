import { motion } from 'framer-motion';
import { Zap, Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Pourquoi nous', href: '#pourquoi-nous' },
  { name: 'Tarifs', href: '#tarifs' },
  // { name: 'Témoignages', href: '#temoignages' },
  { name: 'Contact', href: '#contact' },
];

const scrollTo = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-flash-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-flash-yellow rounded-xl flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-flash-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white leading-tight">
                  FLASH
                </span>
                <span className="text-xs font-semibold text-flash-yellow -mt-1">
                  LIVREURS
                </span>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              FLASH LIVREURS - Livraison rapide et fiable. Vos colis livrés en un éclair !
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://web.facebook.com/flashlivreurs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-flash-yellow hover:text-flash-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              {/* <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-flash-yellow hover:text-flash-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a> */}
              {/* <motion.a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.255-.462-1.524-.55-.27-.087-.466-.131-.663.131-.197.3-.764.963-.938 1.163-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.79.372-.271.29-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.405 0 0 5.405 0 12.052c0 2.117.552 4.188 1.6 6.022L0 24l6.116-1.606a11.855 11.855 0 005.64 1.43h.005c6.643 0 12.05-5.406 12.05-12.053 0-3.227-1.257-6.26-3.537-8.536" />
                </svg>
              </motion.a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-gray-400 hover:text-flash-yellow transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg
                      className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                'Livraison Express',
                'Livraison de Repas',
                'Documents',
                'Courses',
                'Retrait Boutique',
                'Livraison Entreprise',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                    className="text-gray-400 hover:text-flash-yellow transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Coordonnées</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-flash-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a href="tel:+33123456789" className="text-white hover:text-flash-yellow transition-colors">
                    +261 38 71 093 41
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-flash-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contact@flashlivreurs.fr" className="text-white hover:text-flash-yellow transition-colors">
                    tsitohainamiantsa@gmail.com
                  </a>
                </div>
              </div>
              {/* <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-flash-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Adresse</p>
                  <p className="text-white">123 Avenue des livraisons<br />75000 Paris, France</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} FLASH LIVREURS. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> à Madagascar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
