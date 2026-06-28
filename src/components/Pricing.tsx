import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star, X } from 'lucide-react';

const plans = [
  {
    name: 'CLASSIQUE',
    price: '2500',
    icon: Star,
    color: 'border-blue-100',
    headerBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    iconBg: 'bg-blue-100 shadow-lg shadow-blue-200/30',
    iconText: 'text-blue-600',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg',
    features: [
      // 'Livraison en 30-45 min',
      'Suivi en temps réel',
      'Frais de recupération plafonné à 4 000ar',
      // 'Plafonné à 6 000 Ar',
      // 'Paiement flexible',
      // 'Notification SMS',
      'Disponible en ville uniquement',
      'Livraison repas indisponible',
      'Livraison en transport commun',
    ],
    popular: false,
  },
  {
    name: 'LITE',
    price: '3000',
    icon: Zap,
    color: 'border-flash-yellow',
    headerBg: 'bg-gradient-to-br from-flash-yellow/20 to-flash-yellow/5',
    iconBg: 'bg-flash-yellow shadow-lg shadow-flash-yellow/30',
    iconText: 'text-flash-black',
    buttonClass: 'bg-flash-yellow text-flash-black hover:bg-flash-yellow-dark hover:shadow-lg',
    features: [
      'Frais de recupération plafonné à 6 000 Ar',
      'Durée de livraison 1-2 heures',
      'Suivi en temps réel',
      'Assurance incluse',
      // 'Support par email',
      // 'Paiement à la livraison',
      'Livraison en byciclette',
    ],
    popular: true,
  },
  {
    name: 'PREMIUM',
    price: '7000',
    icon: Crown,
    color: 'border-purple-200',
    headerBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
    iconBg: 'bg-purple-100 shadow-lg shadow-purple-200/30',
    iconText: 'text-purple-600',
    buttonClass: 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg',
    features: [
      'Frais de recupération plafonné à 7 000 Ar',
      'Assurance totale',
      'Durée de livraison 30-45 min',
      'Peut transporter des objets lourds plus de 40kg',
      // 'Partenaire dédié',
      'Livraison en moto',
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tarifs" className="py-20 lg:py-32 gradient-bg">
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
            Nos Tarifs
          </span>
          <h2 className="section-title">
            Des tarifs{' '}
            <span className="text-flash-yellow-dark">transparents</span>
          </h2>
          <p className="section-subtitle">
            Choisissez l'option de livraison qui correspond à vos besoins et votre budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl border-2 ${plan.color} bg-white overflow-hidden ${
                plan.popular ? 'shadow-2xl scale-105 z-10' : 'shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-flash-yellow text-flash-black text-xs font-bold px-4 py-1 rounded-bl-xl">
                    POPULAIRE
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className={`${plan.headerBg} p-8 text-center`}>
                <motion.div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-6 ${plan.iconBg} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <plan.icon className={`w-8 h-8 ${plan.iconText}`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-flash-black mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-gray-500">à partir de</span>
                  <span className="text-4xl font-display font-bold text-flash-black">
                    {plan.price}Ar
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => {
                    const lowerFeature = feature.toLowerCase();
                    const isUnavailable = lowerFeature.includes('indisponible');
                    const isDelivery = lowerFeature.startsWith('livraison en');
                    return (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full ${
                        isUnavailable
                          ? 'bg-red-100'
                          : isDelivery
                          ? 'bg-blue-100'
                          : plan.popular
                          ? 'bg-flash-yellow/20'
                          : 'bg-gray-100'
                      } flex items-center justify-center flex-shrink-0`}>
                        {isUnavailable ? (
                          <X className="w-3 h-3 text-red-500" />
                        ) : (
                          <Check className={`w-3 h-3 ${
                            isDelivery
                              ? 'text-blue-600'
                              : plan.popular
                              ? 'text-flash-yellow-dark'
                              : 'text-gray-500'
                          }`} />
                        )}
                      </div>
                      <span className={`text-sm ${isUnavailable ? 'text-red-600 line-through' : isDelivery ? 'text-blue-600' : 'text-gray-600'}`}>{feature}</span>
                    </motion.li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-flash-yellow text-flash-black hover:bg-flash-yellow-dark hover:shadow-lg'
                      : 'bg-blue-100 text-flash-black hover:bg-gray-200'
                  }`}
                >
                  Commander
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Les tarifs peuvent varier selon la distance et le poids. Contactez-nous pour un devis personnalisé.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
