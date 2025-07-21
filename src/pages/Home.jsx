import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { categories } from '../data/products';
import f1Logo from '../assets/f1-logo.png';
import f1BrandsBanner from '../assets/f1-brands-banner.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full">
          <motion.div variants={itemVariants} className="w-full">
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*iN93ZO_yOdRyt296.gif" alt="F1 Logo" className="w-full h-85 object-cover" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative">
              <Zap className="h-16 w-16 text-red-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-transparent border-t-red-500/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6">
            Race. Style. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Legacy.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Fuel your streetwear game with the spirit of the track. Designed for speed fanatics, engineered for everyday champions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-red-500 text-white rounded-full font-semibold text-lg hover:bg-red-600 transition-all shadow-md hover:shadow-xl"
              >
                Shop the Grid
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <img src={f1BrandsBanner} alt="F1 Teams Banner" className="w-full object-cover" />

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </section>

      {/* Categories Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Race-Inspired Collections</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Gear up with the bold, fast, and iconic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg dark:shadow-none bg-gray-100 dark:bg-gray-800 aspect-[4/5] cursor-pointer"
                onClick={() => {
                  if (category.isActive) {
                    window.location.href = `/products/${category.id}`;
                  }
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-200 text-sm mb-3">{category.description}</p>
                  {category.isActive ? (
                    <div className="flex items-center text-red-400 font-semibold">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ) : (
                    <div className="text-gray-400 font-semibold">Coming Soon</div>
                  )}
                </div>
                {!category.isActive && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-semibold">
                      Coming Soon
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;