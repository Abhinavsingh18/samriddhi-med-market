
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = "Samriddhi Enterprises | Medical Equipment Store";
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;
