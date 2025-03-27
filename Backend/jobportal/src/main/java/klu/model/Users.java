package klu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "Users")
@Entity
public class Users {

    @Column(name = "fullname")
    private String fullname;

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "role")
    private int role;

    @Column(name = "password")
    private String password;

    public Users() {}

    public Users(String fullname, String email, int role, String password) {
        this.fullname = fullname;
        this.email = email;
        
        
        this.role = role;
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Users [fullname=" + fullname + ", email=" + email + ", role=" + role + ", password=" + password + "]";
    }
}