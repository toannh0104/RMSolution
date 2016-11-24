package com.mitrais.rms.me.repository;

import com.mitrais.rms.me.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Toan_H on 11/24/2016.
 */
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}