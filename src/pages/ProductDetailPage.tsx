
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/data/products';
import { useCart, Product } from '@/context/CartContext';
import ProductGrid from '@/components/products/ProductGrid';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, cartItems } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products (same category, excluding current product)
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      setLoading(false);
    }
  }, [id]);

  // Check if product is already in cart
  const productInCart = product ? cartItems.find(item => item.product.id === product.id) : null;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/products" className="inline-flex items-center text-medical-600 hover:text-medical-700">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            style={{ maxHeight: '500px' }}
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-2">
            <span className="inline-block bg-medical-50 text-medical-700 px-3 py-1 text-sm font-medium rounded-full">
              {product.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
            {product.stock > 0 ? (
              <span className="ml-3 inline-block bg-green-50 text-green-700 px-3 py-1 text-sm font-medium rounded-full">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="ml-3 inline-block bg-red-50 text-red-700 px-3 py-1 text-sm font-medium rounded-full">
                Out of Stock
              </span>
            )}
          </div>
          
          <Separator className="my-6" />
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          {product.stock > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 text-lg font-medium w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleAddToCart} 
              disabled={product.stock <= 0} 
              className="bg-medical-600 hover:bg-medical-700 text-white"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {productInCart ? 'Update Cart' : 'Add to Cart'}
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/cart">View Cart</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
