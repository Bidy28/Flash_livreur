import { motion } from 'framer-motion';
import { Zap, UtensilsCrossed, FileText, ShoppingCart, Package, Building2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Livraison Express',
    description: 'Livraison ultra rapide pour vos colis urgents. Nous livrons en moins de 30 minutes.',
    color: 'bg-yellow-100',
    iconColor: 'text-flash-yellow-dark',
  },
  {
    icon: UtensilsCrossed,
    title: 'Livraison de Repas',
    description: 'Recevez vos repas chauds en quelques minutes, directement de vos restaurants préférés.',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: FileText,
    title: 'Documents',
    description: 'Transport sécurisé de documents importants avec suivi en temps réel.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: ShoppingCart,
    title: 'Courses',
    description: 'Nous faisons vos courses à votre place et vous les livrons où vous voulez.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Package,
    title: 'Retrait Boutique',
    description: 'Récupération et livraison de vos achats en boutique, sans vous déplacer.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Building2,
    title: 'Livraison Entreprise',
    description: 'Solutions de livraison sur mesure pour les professionnels et entreprises.',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-flash-yellow/20 rounded-full text-flash-yellow-dark text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="section-title">
            Des solutions de livraison{' '}
            <span className="text-flash-yellow-dark">adaptées à vos besoins</span>
          </h2>
          <p className="section-subtitle">
            Découvrez notre gamme complète de services de livraison pour particuliers et professionnels.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card p-6 lg:p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6">
                <motion.div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-flash-black mb-3 group-hover:text-flash-yellow-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="mt-6 flex items-center gap-2 text-flash-yellow-dark opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span className="text-sm font-medium">En savoir plus</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
