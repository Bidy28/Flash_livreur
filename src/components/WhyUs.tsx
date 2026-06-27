import { motion } from 'framer-motion';
import { Zap, Package, Clock, Star } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Rapidité',
    description: 'Livraison express',
    color: 'from-flash-yellow to-flash-yellow-dark',
    bgColor: 'bg-yellow-50',
    details: 'Vos colis livrés en moins de 30 minutes dans toute la ville.',
  },
  {
    icon: Package,
    title: 'Fiabilité',
    description: 'Colis sécurisés',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    details: 'Suivi en temps réel et assurance pour toutes vos livraisons.',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description: 'Service flexible',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    details: 'Disponibles 7j/7 de 8h à 22h pour répondre à vos besoins.',
  },
  {
    icon: Star,
    title: 'Professionnalisme',
    description: 'Équipe qualifiée',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    details: 'Des livreurs expérimentés et formés au service client.',
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-20 lg:py-32 bg-white overflow-hidden">
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
            Pourquoi nous choisir
          </span>
          <h2 className="section-title">
            FLASH LIVREURS, votre partenaire de{' '}
            <span className="text-flash-yellow-dark">confiance</span>
          </h2>
          <p className="section-subtitle">
            Découvrez pourquoi des milliers de clients nous font confiance pour leurs livraisons.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className={`${reason.bgColor} rounded-3xl p-8 h-full transition-all duration-300 group-hover:shadow-xl`}>
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-flash-black text-center mb-2">
                  {reason.title}
                </h3>
                <p className="text-center text-flash-yellow-dark font-medium mb-4">
                  {reason.description}
                </p>
                <p className="text-center text-gray-600 text-sm">
                  {reason.details}
                </p>
              </div>

              {/* Hover Effect Line */}
              <motion.div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                initial={{ width: 0 }}
                whileHover={{ width: '60%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-flash-yellow/10 rounded-full px-8 py-4">
            <Zap className="w-6 h-6 text-flash-yellow-dark" />
            <span className="text-flash-black font-medium">
              Rejoignez plus de 5000 clients satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
