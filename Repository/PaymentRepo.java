package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.PaymentStatus;

public interface PaymentRepo extends JpaRepository<PaymentStatus, Integer>{

}
