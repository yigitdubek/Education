package com.project.KutuphaneSistemi.dao;

import java.util.List;

import com.project.KutuphaneSistemi.entity.User;

public interface UserDAO {
	
	
		public List<User> findAll();
		
		public User findById(int theId);
		
		public void save (User theUser);
		
		public void deleteById(int theId);
		
		public User findByUserName(String theUserName);
	

}
