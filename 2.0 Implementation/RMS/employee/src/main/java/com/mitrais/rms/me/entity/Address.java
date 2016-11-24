package com.mitrais.rms.me.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
@Table(name = "Address")
public class Address {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "address")
    private String address;

    @Column(name = "active_ind")
    private int activeInd;

    @Column(name = "last_mod_date")
    private Timestamp lastModDate;

    @Column(name = "last_mod_user")
    private String lastModUser;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", nullable = false)
    private Employee employee;

    public Address() {
    }

    public Address(String address, int activeInd, Timestamp lastModDate,
                   String lastModUser, Employee employee) {
        this.address = address;
        this.activeInd = activeInd;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getActiveInd() {
        return activeInd;
    }

    public void setActiveInd(Byte activeInd) {
        this.activeInd = activeInd;
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