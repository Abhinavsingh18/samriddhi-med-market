
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from "@/components/ui/sonner";
import { ArrowLeft, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  // If cart is empty, redirect to cart page
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-medical-600 mb-6">
            <ShoppingBag size={64} className="mx-auto" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            You need to add products to your cart before checkout.
          </p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      
      toast.success('Order placed successfully!');
      navigate('/order-confirmation');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/cart" className="inline-flex items-center text-medical-600 hover:text-medical-700">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Cart
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <div className="mb-4">
                <Label htmlFor="address">Address*</Label>
                <Input 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City*</Label>
                  <Input 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State*</Label>
                  <Input 
                    id="state" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code*</Label>
                  <Input 
                    id="postalCode" 
                    name="postalCode" 
                    value={formData.postalCode} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange}>
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label htmlFor="payment-card" className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" /> Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="payment-cod" />
                  <Label htmlFor="payment-cod">Cash on Delivery</Label>
                </div>
              </RadioGroup>
              
              {formData.paymentMethod === 'card' && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="mb-4">
                    <Label htmlFor="cardName">Name on Card*</Label>
                    <Input 
                      id="cardName" 
                      name="cardName" 
                      value={formData.cardName} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="cardNumber">Card Number*</Label>
                    <Input 
                      id="cardNumber" 
                      name="cardNumber" 
                      value={formData.cardNumber} 
                      onChange={handleInputChange} 
                      required 
                      className="mt-1"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardExpiry">Expiry Date*</Label>
                      <Input 
                        id="cardExpiry" 
                        name="cardExpiry" 
                        value={formData.cardExpiry} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardCvv">CVV*</Label>
                      <Input 
                        id="cardCvv" 
                        name="cardCvv" 
                        value={formData.cardCvv} 
                        onChange={handleInputChange} 
                        required 
                        className="mt-1"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 lg:hidden">
              <Button 
                type="submit" 
                disabled={isProcessing}
                className="w-full bg-medical-600 hover:bg-medical-700"
                size="lg"
              >
                {isProcessing ? 'Processing...' : `Place Order - ₹${getCartTotal().toLocaleString()}`}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <div className="flex items-start">
                    <span className="bg-gray-100 text-gray-700 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-1">
                      {item.quantity}
                    </span>
                    <span className="text-gray-800 truncate" style={{ maxWidth: '180px' }}>
                      {item.product.name}
                    </span>
                  </div>
                  <span className="font-medium">
                    ₹{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">₹0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (18% GST)</span>
                <span className="font-medium">₹{Math.round(getCartTotal() * 0.18).toLocaleString()}</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between mb-6">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-lg text-medical-600">
                ₹{Math.round(getCartTotal() * 1.18).toLocaleString()}
              </span>
            </div>
            
            <Button 
              onClick={(e) => {
                e.preventDefault();
                const form = document.querySelector('form');
                if (form) {
                  form.dispatchEvent(new Event('submit', { cancelable: true }));
                }
              }}
              disabled={isProcessing}
              className="w-full bg-medical-600 hover:bg-medical-700 hidden lg:block"
              size="lg"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
