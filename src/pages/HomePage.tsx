
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories, featuredProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-600 to-medical-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Advanced Medical Equipment for Modern Healthcare
            </h1>
            <p className="text-lg md:text-xl mb-8 text-medical-50 animate-fade-in">
              Samriddhi Enterprises provides high-quality medical equipment for hospitals, 
              clinics, and healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-white text-medical-700 hover:bg-medical-50">
                <Link to="/products">
                  Browse Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Product Categories</h2>
            <p className="text-gray-600">Explore our comprehensive range of medical equipment</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/products?category=${encodeURIComponent(category)}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-14 w-14 mx-auto mb-3 bg-medical-50 rounded-full flex items-center justify-center">
                  <span className="text-medical-700 text-2xl">
                    {category.includes("X-Ray") ? "📱" : 
                     category.includes("Ultrasound") ? "🔊" : 
                     category.includes("ECG") ? "💓" : 
                     category.includes("Consumables") ? "🧴" : "🩺"}
                  </span>
                </div>
                <h3 className="font-medium text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular medical equipment and supplies</p>
          </div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Samriddhi Enterprises</h2>
            <p className="text-gray-600">We are committed to providing the best medical equipment and services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                All our products meet strict quality standards and are sourced from reputable manufacturers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                We offer prompt delivery services to ensure you receive your equipment without delay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of medical equipment specialists is always available to provide guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-medical-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Upgrade Your Medical Equipment?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn more about our products and how we can assist your healthcare facility.
            </p>
            <Button asChild size="lg" className="bg-white text-medical-700 hover:bg-medical-50">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
