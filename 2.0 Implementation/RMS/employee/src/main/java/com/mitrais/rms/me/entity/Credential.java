package com.mitrais.rms.me.entity;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
@Table(name = "Credential")
public class Credential {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "enable")
    private int enable; //0: disable, 1: enable

    @Column(name = "locked")
    private int locked; //0: locked, 1: unlocked

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", nullable = false)
    private Employee employee;

    @OneToMany(mappedBy = "credential")
    private Set<CredentialRole> credentialRoles;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getEnable() {
        return enable;
    }

    public void setEnable(Byte enable) {
        this.enable = enable;
    }

    public int getLocked() {
        return locked;
    }

    public void setLocked(Byte locked) {
        this.locked = locked;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Set<CredentialRole> getCredentialRoles() {
        return credentialRoles;
    }

    public void setCredentialRoles(Set<CredentialRole> credentialRoles) {
        this.credentialRoles = credentialRoles;
    }
}
