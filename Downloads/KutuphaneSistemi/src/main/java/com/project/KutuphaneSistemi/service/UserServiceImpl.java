package com.project.KutuphaneSistemi.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.KutuphaneSistemi.dao.RoleDAO;
import com.project.KutuphaneSistemi.dao.UserDAO;
import com.project.KutuphaneSistemi.entity.User;
import com.project.KutuphaneSistemi.user.CrmUser;
import com.project.KutuphaneSistemi.entity.Role;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDao;
	
	@Autowired
	private RoleDAO roleDao;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	
	@Override
	@Transactional
	public List<User> findAll() {

		
		return userDao.findAll();
	}

	@Override
	@Transactional
	public User findById(int theId) {

		
		return userDao.findById(theId);
	}

	@Override
	@Transactional
	public void save(CrmUser crmUser) {
		User user =new User();
		 user.setUserName(crmUser.getUserName());
		 user.setPassword(passwordEncoder.encode(crmUser.getPassword()));
		 user.setFirstName(crmUser.getFirstName());
		 user.setLastName(crmUser.getLastName());
		 user.setEmail(crmUser.getEmail());
		 user.setRoles(Arrays.asList(roleDao.findRoleByName("ROLE_USER")));
		
		userDao.save(user);

		
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		userDao.deleteById(theId);
	}

	@Override
	@Transactional
	public User findByUserName(String theUserName) {

			return userDao.findByUserName(theUserName);
		
	}
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = userDao.findByUserName(userName);
		if (user == null) {
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
				mapRolesToAuthorities(user.getRoles()));
	}

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
		return roles.stream()
				.map(role -> new SimpleGrantedAuthority(role.getName()))
				.collect(Collectors.toList());
	}
	
	

}
