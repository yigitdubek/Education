package com.project.KutuphaneSistemi.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.project.KutuphaneSistemi.entity.User;
import com.project.KutuphaneSistemi.user.CrmUser;

public interface UserService extends UserDetailsService {
  

	public List<User> findAll();
	
	public User findById(int theId);
	
	public void save (CrmUser crmUser);
	
	public void deleteById(int theId);
	
	public User findByUserName(String theUserName);

	
	
}
