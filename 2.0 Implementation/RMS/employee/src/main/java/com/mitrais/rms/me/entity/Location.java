package com.mitrais.rms.me.entity;
import javax.persistence.*;

import java.sql.Timestamp;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
public class Location {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "branch_office")
    private String branchOffice;

    @Column(name = "last_mod_date")
    private Timestamp lastModDate;

    @Column(name = "last_mod_user")
    private String lastModUser;

    @Column(name = "active_ind")
    private Byte activeInd;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    public Location() { }

    public Location(String branchOffice, Timestamp lastModDate,
                    String lastModUser, Byte activeInd, Employee employee) {
        this.branchOffice = branchOffice;
        this.lastModDate = lastModDate;
        this.lastModUser = lastModUser;
        this.activeInd = activeInd;
        this.employee = employee;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBranchOffice() {
        return branchOffice;
    }

    public void setBranchOffice(String branchOffice) {
        this.branchOffice = branchOffice;
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

    public Byte getActiveInd() {
        return activeInd;
    }

    public void setActiveInd(Byte activeInd) {
        this.activeInd = activeInd;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
