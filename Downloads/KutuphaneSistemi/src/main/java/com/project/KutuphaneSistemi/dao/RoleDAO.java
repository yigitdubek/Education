package com.project.KutuphaneSistemi.dao;

import com.project.KutuphaneSistemi.entity.Role;

public interface RoleDAO {
	
	public Role findRoleByName(String theRoleName);

}
