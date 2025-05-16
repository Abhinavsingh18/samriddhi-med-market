
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-medical-600 bg-medical-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-medium mb-1 line-clamp-1 group-hover:text-medical-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-medical-600 border-medical-200 hover:bg-medical-50 hover:text-medical-700 hover:border-medical-300"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          {product.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
