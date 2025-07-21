import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product, viewMode, onAddToCart, variants }) => {
  if (viewMode === 'list') {
    return (
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <div className="text-2xl font-bold text-red-500 mb-4">
                ${product.price}
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Details
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAddToCart(product)}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-red-500">
            ${product.price}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;