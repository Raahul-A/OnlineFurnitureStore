package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Orde;

public interface OrderRepo extends JpaRepository<Orde, Integer>{

}
