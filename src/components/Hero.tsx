import { motion } from 'framer-motion';
import { Zap, Phone, ArrowRight, Truck, ShieldCheck, Clock } from 'lucide-react';
import deliveryImage from '../img/flivreur.jpeg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-flash-gray via-white to-flash-yellow/5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-flash-yellow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-flash-yellow/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Speed lines */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10"
          viewBox="0 0 200 600"
        >
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="200"
              y1={i * 75 + 50}
              x2="0"
              y2={i * 75 + 50 + 30}
              stroke="#FFC107"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-flash-yellow/20 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-flash-yellow-dark" />
              <span className="text-sm font-medium text-flash-black">
                Livraison express disponible 24/6
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-flash-black leading-tight mb-6"
            >
              Vos colis livrés{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-flash-yellow-dark">
                  en un éclair
                </span>
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-3 bg-flash-yellow/50 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{' '}
              <Zap className="inline w-12 h-12 lg:w-14 lg:h-14 text-flash-yellow animate-pulse" />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Livraison rapide, fiable et sécurisée pour vos colis, documents,
              repas et courses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 193, 7, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group text-lg px-8 py-4"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Demander une livraison
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="tel:+33123456789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start"
            >
              {[
                { icon: Truck, label: '100+ Livraisons' },
                { icon: ShieldCheck, label: 'Colis sécurisés' },
                { icon: Clock, label: 'Disponible 24/6' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-flash-yellow/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-flash-yellow-dark" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Card */}
              <motion.div
                className="absolute inset-0 bg-flash-yellow rounded-3xl transform rotate-6"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Delivery Person Illustration */}
              <div className="relative bg-gradient-to-br from-flash-yellow/30 to-flash-yellow/10 rounded-3xl p-8 backdrop-blur-sm">
                <motion.img
                  src={deliveryImage}
                  alt="Livreur FLASH LIVREURS"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Cards */}
                <motion.div
                  className="absolute -right-4 top-10 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Sécurisé</span>
                </motion.div>

                <motion.div
                  className="absolute -left-4 bottom-20 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-flash-yellow/20 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-flash-yellow-dark" />
                  </div>
                  <span className="text-sm font-medium">60 min</span>
                </motion.div>

                <motion.div
                  className="absolute right-10 -bottom-4 bg-flash-black text-white rounded-xl shadow-xl p-3 flex items-center gap-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5 text-flash-yellow" />
                  <span className="text-sm font-bold">Express</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-flash-black/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-flash-yellow rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
