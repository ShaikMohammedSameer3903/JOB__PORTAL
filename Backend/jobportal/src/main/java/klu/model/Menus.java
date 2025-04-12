package klu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="menus")
public class Menus {

    @Id
    @Column(name="mid")
    Long mid;
    
    @Column(name="menu")
    String menu;
    
    @Column(name="icon")
    String icon;

    public Long getMid() {
      return mid;
    }

    public void setMid(Long mid) {
      this.mid = mid;
    }

    public String getMenu() {
      return menu;
    }

    public void setMenu(String menu) {
      this.menu = menu;
    }

    public String getIcon() {
      return icon;
    }

    public void setIcon(String icon) {
      this.icon = icon;
    }

    
    
    
}