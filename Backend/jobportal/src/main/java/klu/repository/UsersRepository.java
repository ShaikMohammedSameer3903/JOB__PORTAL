package klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import klu.model.*;
@Repository
public interface UsersRepository extends JpaRepository<Users,String>{
//Query for email
	@Query("SELECT COUNT(U) FROM Users U WHERE U.email = :email")
	    int validateEmail(@Param("email") String email);
	}

