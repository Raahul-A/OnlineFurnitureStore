package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Register;


public interface RegisterRepo extends JpaRepository<Register, String> {

}
