package com.example.demo.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.Service.ProductService;
@RestController
public class Furniture{
	Logger logger =LoggerFactory.getLogger(getClass());
	
	@Autowired
	ProductService productService;
	
	      
			@GetMapping("/notes")
			public List<User>getDetails()
			{
				return ( productService).show();
			}
			@GetMapping("/customer/{field}")
			public List<User> getCustomerWithSorting(@PathVariable String field) {
				List<User> sortcustomer = productService.getCustomerWithSorting(field);
		   		return sortcustomer;
		   		
			}
			@GetMapping(path="/loggerdemo")
				public String loggerDemo() {
					logger.info("Logger info");
					logger.warn("Logger warn");
					logger.error("logger error");
					return "Hello from logger demo";
				}

			@GetMapping("/pagination/{offset}/{pageSize}")
			public Page<User> getCustomerWithSorting(@PathVariable int offset, @PathVariable int pageSize) {
				Page<User> sortProducts = productService.getCustomerWithPagination(offset, pageSize);
				return sortProducts;
			}
			@PostMapping("/book")
			public User create(@RequestBody User student)
			{
				return productService.postDetails(student);
			}
			@PutMapping("/library/{id}")
			public String update(@RequestBody User student,@PathVariable Integer id)
			{
				User temp =productService.get(id);
				if(temp !=null)
				{
					productService.putDetails(student); 
					return "Book detail of id "+id+" updated";
				}
				return "Not found";
			}
			@DeleteMapping("/student/delete/{id}")
			public void delete(@PathVariable Integer id)
			{
				productService.delete(id);
			}
			@DeleteMapping("/student/delete/direct")
			public void deleteDirect(User st)
			{
				productService.deletedirect(st);
			}
			@GetMapping("/query/get/{id}")
			public User getuser(@PathVariable("id") int id)
			{
				return productService.getdetails(id);
			}
			
	
}
