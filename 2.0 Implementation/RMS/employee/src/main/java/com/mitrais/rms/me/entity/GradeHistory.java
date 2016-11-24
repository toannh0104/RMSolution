package com.mitrais.rms.me.entity;
import javax.persistence.*;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
@Table(name = "grade_history", schema = "rmsolution")
public class GradeHistory {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "grade")
    private String grade;

    @Column(name = "last_mod_date")
    private Timestamp lastModDate;

    @Column(name = "last_mod_user")
    private String lastModUser;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    public GradeHistory() { }

    public GradeHistory(Date startDate, Date endDate, String grade,
                        Timestamp lastModDate, String lastModUser, Employee employee) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
        this.lastModDate = lastModDate;
        this.lastModUser = lastModUser;
        this.employee = employee;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Timestamp getLastModDate() {
        return lastModDate;
    }

    public void setLastModDate(Timestamp lastModDate) {
        this.lastModDate = lastModDate;
    }

    public String getLastModUser() {
        return lastModUser;
    }

    public void setLastModUser(String lastModUser) {
        this.lastModUser = lastModUser;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
