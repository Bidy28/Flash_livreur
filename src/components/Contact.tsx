import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const deliveryTypes = [
  'Livraison Express',
  'Livraison de Repas',
  'Documents',
  'Courses',
  'Retrait Boutique',
  'Livraison Entreprise',
];

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryType: '',
    pickupAddress: '',
    deliveryAddress: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) newErrors.phone = 'Numéro invalide';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.deliveryType) newErrors.deliveryType = 'Sélectionnez un type de livraison';
    if (!formData.pickupAddress.trim()) newErrors.pickupAddress = 'Adresse de récupération requise';
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = 'Adresse de livraison requise';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          delivery_type: formData.deliveryType,
          pickup_address: formData.pickupAddress,
          delivery_address: formData.deliveryAddress,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        deliveryType: '',
        pickupAddress: '',
        deliveryAddress: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 gradient-bg">
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
            Contact
          </span>
          <h2 className="section-title">
            Demandez votre{' '}
            <span className="text-flash-yellow-dark">livraison</span>
          </h2>
          <p className="section-subtitle">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-flash-black text-white rounded-3xl p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <p className="text-gray-400 mb-8">
                N'hésitez pas à nous contacter pour toute demande de livraison ou question.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-flash-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-flash-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                    <a href="tel:+33123456789" className="text-white font-medium hover:text-flash-yellow transition-colors">
                      +261 38 71 093 41
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-flash-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-flash-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:contact@flashlivreurs.fr" className="text-white font-medium hover:text-flash-yellow transition-colors">
                      tsitohainamiantsa@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-flash-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-flash-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Adresse</p>
                    <p className="text-white font-medium">
                      123 Avenue des livraisons<br />
                      75000 Paris, France
                    </p>
                  </div>
                </motion.div> */}

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-flash-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-flash-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Horaires</p>
                    <p className="text-white font-medium">
                      Lun - Sam: 8h - 22h<br />
                      {/* Dimanche: 10h - 20h */}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-flash-black mb-4">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Envoyer une autre demande
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all`}
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-500' : 'border-gray-200'
                        } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all`}
                        placeholder="Votre numéro"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Delivery Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de livraison *
                    </label>
                    <select
                      name="deliveryType"
                      value={formData.deliveryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.deliveryType ? 'border-red-500' : 'border-gray-200'
                      } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all bg-white`}
                    >
                      <option value="">Sélectionnez un type</option>
                      {deliveryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.deliveryType && (
                      <p className="text-red-500 text-sm mt-1">{errors.deliveryType}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pickup Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de récupération *
                      </label>
                      <input
                        type="text"
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.pickupAddress ? 'border-red-500' : 'border-gray-200'
                        } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all`}
                        placeholder="Où récupérer ?"
                      />
                      {errors.pickupAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.pickupAddress}</p>
                      )}
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de livraison *
                      </label>
                      <input
                        type="text"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.deliveryAddress ? 'border-red-500' : 'border-gray-200'
                        } focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all`}
                        placeholder="Où livrer ?"
                      />
                      {errors.deliveryAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-flash-yellow focus:ring-2 focus:ring-flash-yellow/20 outline-none transition-all resize-none"
                      placeholder="Instructions spéciales, détails du colis..."
                    />
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-50 text-red-600 p-4 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>Une erreur s'est produite. Veuillez réessayer.</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Envoyer la demande
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
