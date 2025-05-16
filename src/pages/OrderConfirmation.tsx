
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate random order ID and estimated delivery date
  const orderId = `SE${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <div className="text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase from Samriddhi Enterprises
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Number</p>
                <p className="text-lg font-medium">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Date</p>
                <p className="text-lg font-medium">{formatDate(today)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                <p className="text-lg font-medium">{formatDate(deliveryDate)}</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p>
              We've received your order and are preparing it for shipment.
              You will receive a confirmation email shortly with your order details.
            </p>
            <p>
              If you have any questions about your order, please contact our customer service team
              at <a href="mailto:support@samriddhienterprises.com" className="text-medical-600 hover:underline">
                support@samriddhienterprises.com
              </a> or call us at <a href="tel:+919876543210" className="text-medical-600 hover:underline">+91 9876543210</a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
