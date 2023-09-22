//package com.example.demo.Service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.stereotype.Service;
//
//import com.example.demo.Entity.Login;
//import com.example.demo.Repository.Loginrepo;
//
//
//
//@Service
//public class LoginService {
//          
//@Autowired
//Loginrepo userRepository;
//public Login adduser(Login user)
//{
//	return userRepository.save(user);
//}
//public List<Login>getalluser()
//{
//	return userRepository.findAll();
//}
//
//public Login findByUsername(String username)
//{
//	return userRepository.findByusername(username);
//	
//}
//
//public boolean checkPassword(String rawPassword,String encodedPassword)
//{
//	return rawPassword.equals(encodedPassword);
//}
//
//
//}