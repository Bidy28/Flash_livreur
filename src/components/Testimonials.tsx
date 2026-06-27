import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dupont',
    role: 'Gérante de restaurant',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Flash Livreurs est devenu notre partenaire incontournable pour nos livraisons de repas. Réactivité exceptionnelle et service client au top !',
    rating: 5,
  },
  {
    name: 'Thomas Martin',
    role: 'Directeur de startup',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'J\'utilise Flash Livreurs pour tous mes envois de documents importants. La rapidité et la fiabilité sont au rendez-vous à chaque fois.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Particulière',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Plus besoin de me déplacer pour mes courses ! Flash Livreurs me livre tout en moins de 30 minutes. Un vrai game-changer au quotidien.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-20 lg:py-32 bg-white overflow-hidden">
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
            Témoignages
          </span>
          <h2 className="section-title">
            Ce que disent{' '}
            <span className="text-flash-yellow-dark">nos clients</span>
          </h2>
          <p className="section-subtitle">
            Découvrez les retours de nos clients satisfaits.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
            <Quote className="w-20 h-20 text-flash-yellow/20" />
          </div>

          {/* Slider Container */}
          <div className="relative bg-gradient-to-br from-flash-yellow/10 to-flash-yellow/5 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative inline-block mb-6"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-flash-yellow shadow-lg">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-flash-yellow rounded-full flex items-center justify-center shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Star className="w-4 h-4 text-flash-black fill-flash-black" />
                  </motion.div>
                </motion.div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Star className="w-6 h-6 text-flash-yellow fill-flash-yellow" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8"
                >
                  "{testimonials[current].content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg font-bold text-flash-black">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[current].role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-4 md:left-8 flex items-center">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-flash-yellow transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-flash-black" />
              </motion.button>
            </div>
            <div className="absolute inset-y-0 right-4 md:right-8 flex items-center">
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-flash-yellow transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-flash-black" />
              </motion.button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-flash-yellow w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
