//package com.example.demo.Controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.Entity.Login;
//import com.example.demo.Service.LoginService;
//
//
//@RestController
//@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
//@RequestMapping("/api/user")
//public class LoginController {
//
//	
//	  @Autowired
//	  LoginService userservice;
//	  
//	  
//	  @GetMapping
//	  public List<Login> getalluser()
//	  {
//		  return userservice.getalluser();
//	  }
//	  @PostMapping
//	  public Login adduser(@RequestBody Login user)
//	  {
//		  return userservice.adduser(user);
//	  }
//	  @PostMapping("/login")
//	  public ResponseEntity<String> authenticate(@RequestBody Login user) {
//		  Login foundUser = userservice.findByUsername(user.getUsername());
//	      if (foundUser != null && userservice.checkPassword(user.getPass(), foundUser.getPass())) {
//	          return ResponseEntity.ok("Authentication successful");
//	      } else {
//	          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
//	      }
//	  }
//
//	  Login login = new Login("Naveen", "543");
//	  
//}