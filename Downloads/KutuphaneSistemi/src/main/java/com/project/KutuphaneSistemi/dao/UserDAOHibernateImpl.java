package com.project.KutuphaneSistemi.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.KutuphaneSistemi.entity.User;


@Repository
public class UserDAOHibernateImpl implements UserDAO {

	
	@Autowired
	private EntityManager entityManager;
	
	
	@Override
	public List<User> findAll() {
		
		Session currentSession =entityManager.unwrap(Session.class);
		
		 Query<User> theQuery = currentSession.createQuery("from User",User.class);
		 
		 List<User> user = theQuery.getResultList();
		
		
		return user;
	}



	@Override
	public User findById(int theId) {
		Session currentSession =entityManager.unwrap(Session.class);
		
		User user = currentSession.get(User.class,theId);
		
		return user;
	}



	@Override
	public void save(User theUser) {
		Session currentSession =entityManager.unwrap(Session.class);

		currentSession.saveOrUpdate(theUser);
	}



	@Override
	public void deleteById(int theId) {

		Session currentSession =entityManager.unwrap(Session.class);

		Query<User> theQuery = currentSession.createQuery("delete from User where id=:userId",User.class);
		
		theQuery.setParameter("userId", theId);
		
		theQuery.executeUpdate();
		
	}



	@Override
	public User findByUserName(String theUserName) {
		Session currentSession =entityManager.unwrap(Session.class);
		
		Query<User> theQuery = currentSession.createQuery("from User where username=:uName ",User.class);
		
		theQuery.setParameter("uName",theUserName );
		
		User theUser=null;
		
		try {
			theUser = theQuery.getSingleResult();
		}catch(Exception e) {
			theUser=null;
		}
		
		return theUser;
	}

}
