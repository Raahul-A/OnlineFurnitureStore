package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepo;

import org.springframework.data.domain.Sort;
@Service
public class ProductService {

	@Autowired
	UserRepo repositorylayer;
	public List<User> show()
	{
		return repositorylayer.findAll();
	}
	public User postDetails(User modify)
	{
		return repositorylayer.save(modify);
	}
	public void putDetails(User name)
	{
		repositorylayer.saveAndFlush(name);
	}
	public void delete(Integer id)
	{
		repositorylayer.deleteById(id);
	}
	public void deletedirect(User st)
	{
		repositorylayer.delete(st);
	}
	public User get(Integer id)
	{
		return repositorylayer.findById(id).get();
	}
	public List<User> getCustomerWithSorting(String field) {
		return repositorylayer.findAll(Sort.by(Sort.Direction.DESC,field));
	}

	public Page<User> getCustomerWithPagination(int offset, int pageSize) {
		Page<User> products = repositorylayer.findAll(PageRequest.of(offset, pageSize));
		return products;
	}
	public User getdetails(int id)
	{
		return repositorylayer.getInfo(id);
	}
	
	
}

	