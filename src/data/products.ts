
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Digital X-Ray Machine DR System",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMGVxdWlwbWVudHxlbiZ8MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "X-Ray Machines",
    description: "High-performance digital X-ray system with advanced imaging capabilities. Features include high resolution imaging, quick processing time, and radiation dose optimization.",
    stock: 5
  },
  {
    id: "2",
    name: "Portable Ultrasound Scanner",
    price: 350000,
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVsdHJhc291bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Ultrasound",
    description: "Compact and lightweight portable ultrasound system with excellent image quality. Ideal for point-of-care applications and mobile healthcare services.",
    stock: 8
  },
  {
    id: "3",
    name: "12-Channel ECG Machine",
    price: 85000,
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "ECG Machines",
    description: "Advanced 12-channel ECG machine with automatic analysis and interpretation. Features include high resolution display, built-in printer, and wireless connectivity.",
    stock: 12
  },
  {
    id: "4",
    name: "Medical-Grade Surgical Masks (Box of 50)",
    price: 499,
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMG1hc2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Consumables",
    description: "3-ply medical-grade surgical masks with bacterial filtration efficiency (BFE) > 98%. Comfortable elastic ear loops and adjustable nose clip.",
    stock: 200
  },
  {
    id: "5",
    name: "Digital Blood Pressure Monitor",
    price: 2799,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBwcmVzc3VyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Equipment",
    description: "Accurate and reliable digital blood pressure monitor for home and clinical use. Features large LCD display, irregular heartbeat detection, and memory function.",
    stock: 30
  },
  {
    id: "6",
    name: "Ultrasound Gel (5L)",
    price: 799,
    image: "https://plus.unsplash.com/premium_photo-1664741577797-3d27fed73be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Ultrasound",
    description: "High-quality ultrasound transmission gel for medical ultrasound procedures. Hypoallergenic, non-irritating, and bacteriostatic.",
    stock: 50
  },
  {
    id: "7",
    name: "ECG Paper Rolls (10 Pack)",
    price: 1299,
    image: "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNhbCUyMHN1cHBsaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Consumables",
    description: "High-quality thermal ECG recording paper rolls compatible with most ECG machines. Gridded for accurate reading and interpretation.",
    stock: 100
  },
  {
    id: "8",
    name: "X-Ray Film (Box of 100)",
    price: 4999,
    image: "https://images.unsplash.com/photo-1516069677018-378529086e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "X-Ray Machines",
    description: "Premium quality X-ray films for radiographic imaging. High sensitivity and excellent image quality with good contrast and resolution.",
    stock: 20
  }
];

export const categories = [
  "X-Ray Machines",
  "Ultrasound",
  "ECG Machines",
  "Consumables",
  "Equipment",
];

export const featuredProducts = products.slice(0, 4);

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
