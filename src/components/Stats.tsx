import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Truck, ThumbsUp, Clock, Timer } from 'lucide-react';

const stats = [
  {
    icon: Truck,
    value: 100,
    suffix: '+',
    label: 'Livraisons effectuées',
    color: 'from-yellow-400 to-flash-yellow-dark',
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Clients satisfaits',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Disponibilité',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Timer,
    value: 30,
    suffix: ' min',
    label: 'Temps moyen',
    color: 'from-purple-400 to-purple-600',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-flash-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-flash-yellow/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-flash-yellow/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            Nos Statistiques
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-4">
            Les chiffres parlent{' '}
            <span className="text-flash-yellow">d'eux-mêmes</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-flash-yellow/50 transition-all duration-300 text-center">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="text-5xl font-display font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
