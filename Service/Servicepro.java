package com.example.demo.Service;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.demo.Entity.Products;
import com.example.demo.Repository.ProductsRepo;

import java.util.List;
	import java.util.Optional;

	@Service
	public class Servicepro {

	    private  ProductsRepo productRepository;

	    @Autowired
	    public Servicepro(ProductsRepo productRepository) {
	        this.productRepository = productRepository;
	    }

	    public List<Products> getAllProducts() {
	        return productRepository.findAll();
	    }

	    public Optional<Products> getProductById(Integer id) {
	        return productRepository.findById(id);
	    }

	    public Products createProduct(Products product) {
	        return productRepository.save(product);
	    }

	    public Optional<Products> updateProduct(Integer id, Products updatedProduct) {
	        return productRepository.findById(id)
	                .map(product -> {
	                    product.setName(updatedProduct.getName());
	                    product.setPrice(updatedProduct.getPrice());
	                    return productRepository.save(product);
	                });
	    }

	    public void deleteProduct(Integer id) {
	        productRepository.deleteById(id);
	    }
	}

