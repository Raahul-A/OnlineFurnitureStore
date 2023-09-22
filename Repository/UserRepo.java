package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

	@Query(value="select * from user where userid= :s ",nativeQuery =true)
	public User getInfo(@Param("s") int id);
	

}

