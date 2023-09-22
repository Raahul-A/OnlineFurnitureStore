package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Products;

public interface ProductsRepo extends JpaRepository<Products, Integer>{

}
