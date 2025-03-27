package klu.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import klu.repository.UsersRepository;

@Service
public class UsersManager {
@Autowired
UsersRepository UR;
@Autowired
EmailManager EM;
public String addUsers(Users U) {
	if(UR.validateEmail(U.getEmail())>0)
		return "400::Email Already Exists";
	UR.save(U);
	return "200::User Registe"
			+ "red Successfully!";
}
public String recoverPassword(String email) {
	Users U=UR.findById(email).get();
	  String message=String.format("Dear %s, \n\n Your Password is: %s",U.getFullname(),U.getFullname(),U.getPassword());
	      return EM.sendEmail(U.getEmail(),"jobportal: Password Recovery",message);}

}

