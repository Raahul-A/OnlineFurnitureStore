package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.ProductEntity;

public interface ProductRepo extends JpaRepository<ProductEntity, Integer> {

}
