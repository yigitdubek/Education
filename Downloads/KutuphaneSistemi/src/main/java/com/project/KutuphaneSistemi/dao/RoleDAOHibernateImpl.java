package com.project.KutuphaneSistemi.dao;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.KutuphaneSistemi.entity.Role;

@Repository
public class RoleDAOHibernateImpl implements RoleDAO {
	
	@Autowired
	EntityManager entityManager;
	
	@Override
	public Role findRoleByName(String theRoleName) {

		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Role> theQuery = currentSession.createQuery("from Role where name=:roleName",Role.class);
		theQuery.setParameter("roleName", theRoleName);
		
		Role theRole = null;
		try {
			theRole= theQuery.getSingleResult();
		}catch(Exception e) {
			theRole = null;
		}
		
		
		return theRole;
	}

}
