package klu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import klu.model.Menus;

public interface MenusRepository extends JpaRepository<Menus, Long> {
    @Query("select M from Menus M join Roles R on M.mid = R.menus.mid where R.role=:role")
    public List<Menus> findByRole(@Param("role") int role);
}