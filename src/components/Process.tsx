import { motion } from 'framer-motion';
import { Phone, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Vous nous contactez',
    description: 'Par téléphone, WhatsApp ou formulaire, décrivez votre besoin de livraison.',
    color: 'bg-yellow-100',
    iconColor: 'text-flash-yellow-dark',
    step: '01',
  },
  {
    icon: Package,
    title: 'Nous récupérons le colis',
    description: 'Un livreur arrive sur place pour récupérer votre colis en toute sécurité.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    step: '02',
  },
  {
    icon: Truck,
    title: 'Livraison rapide',
    description: 'Votre colis est livré Express à destination dans les meilleurs délais.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Confirmation de réception',
    description: 'Vous recevez une confirmation dès que le colis est livré avec succès.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    step: '04',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-flash-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-flash-yellow/20 rounded-full text-flash-yellow text-sm font-medium mb-4">
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-4">
            Comment ça marche ?{' '}
            <span className="text-flash-yellow">Simple et rapide</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mx-auto">
            En 4 étapes simples, votre colis est livré. Rapide, sécurisé et efficace.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-flash-yellow via-flash-yellow-dark to-flash-yellow transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-flash-yellow/50 transition-all duration-300 group hover:bg-white/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="bg-flash-yellow text-flash-black text-sm font-bold px-3 py-1 rounded-full">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flash-yellow transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      className="w-6 h-6 bg-flash-yellow rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <svg
                        className="w-3 h-3 text-flash-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
