//package com.example.demo.Repository;
//
//import org.springframework.data.jdbc.repository.query.Query;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.query.Param;
//
//import com.example.demo.Entity.Login;
//
//public interface Loginrepo extends JpaRepository<Login, Integer>{
//	@Query("SELECT u FROM User u WHERE username=:username")
//	public Login findByusername(@Param("username") String username);
//}
