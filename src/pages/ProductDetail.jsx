import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link
            to="/products"
            className="text-red-500 hover:text-red-600 font-semibold"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  (127 reviews)
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              <div className="text-3xl font-bold text-red-500 mb-6">
                ${product.price}
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 dark:text-white font-semibold">
                  Size:
                </span>
                <div className="flex space-x-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-500 transition-colors dark:text-white "
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(product)}
                className="w-full flex items-center justify-center px-8 py-4 bg-red-500 text-white rounded-xl font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="mr-3 h-6 w-6" />
                Add to Cart - ${product.price}
              </motion.button>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                  In Stock
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                  30-Day Returns
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                  Fast Delivery
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Why racers choose this
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Premium Materials
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built with racing-grade fabrics for maximum durability and comfort
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Track-Tested Design
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Every detail inspired by actual F1 racing gear and aesthetics
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Limited Edition
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Exclusive pieces that won't be around forever
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;