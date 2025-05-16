
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-medical-700 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Samriddhi Enterprises</h1>
            <p className="text-lg md:text-xl text-medical-50">
              Leading distributor of high-quality medical equipment and healthcare supplies since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-medical-700">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Samriddhi Enterprises, our mission is to enhance healthcare delivery by providing 
                medical professionals with reliable, innovative, and high-quality equipment. We strive 
                to make advanced medical technology accessible to healthcare facilities of all sizes, 
                enabling them to deliver the best possible care to their patients.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-medical-700">Our Vision</h2>
              <p className="text-gray-600">
                We envision a future where every healthcare provider has access to the best medical 
                equipment and supplies. By bridging the gap between manufacturers and healthcare 
                providers, we aim to contribute to improved healthcare outcomes and patient care 
                across India.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Samriddhi Enterprises was founded in 2005 by Dr. Rajesh Kumar, a radiologist who 
                recognized the challenges healthcare providers faced in acquiring reliable medical 
                equipment at reasonable prices. What began as a small operation focusing on X-ray films 
                and accessories has grown into a comprehensive medical equipment distributor serving 
                hospitals, clinics, and healthcare professionals across India.
              </p>
              <p>
                Over the years, we have built strong relationships with leading manufacturers and suppliers 
                worldwide, allowing us to offer a wide range of products from basic medical consumables to 
                advanced diagnostic equipment. Our team of experts carefully evaluates each product to ensure 
                it meets our strict quality standards before adding it to our catalog.
              </p>
              <p>
                Today, Samriddhi Enterprises is recognized as a trusted partner in the healthcare industry. 
                We continue to expand our product offerings and enhance our services to meet the evolving 
                needs of healthcare providers, always staying true to our founding principles of quality, 
                reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to providing only the highest quality medical equipment and 
                supplies. Each product in our catalog undergoes rigorous testing and quality checks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards. Honesty, transparency, 
                and fairness guide every interaction with our customers, suppliers, and partners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-medical-50 flex items-center justify-center mb-4">
                <span className="text-medical-700 text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek out innovative medical technologies and solutions that can 
                help healthcare providers improve patient outcomes and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Dr. Rajesh Kumar</h3>
              <p className="text-medical-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Priya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Priya Sharma</h3>
              <p className="text-medical-600">Operations Director</p>
            </div>
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Amit Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Amit Patel</h3>
              <p className="text-medical-600">Technical Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-medical-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg mb-8">
              Whether you're a healthcare provider looking for reliable medical equipment or a 
              manufacturer seeking distribution channels, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-medical-700 hover:bg-medical-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
