package com.mitrais.rms.me.entity;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Set;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
public class Employee {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "grade")
    private String grade;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "employeement_status")
    private String employeementStatus;

    @Column(name = "gender")
    private String gender;

    @Column(name = "marital_status")
    private String maritalStatus;

    @Column(name = "dependent")
    private Integer dependent;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "hire_date")
    private Date hireDate;

    @Column(name = "retire_date")
    private Date retireDate;

    @Column(name = "suspend_date")
    private Date suspendDate;

    @Column(name = "active_ind")
    private int activeInd;

    @Column(name = "last_mod_date")
    private Timestamp lastModDate;

    @Column(name = "last_mod_user")
    private String lastModUser;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, fetch =  FetchType.EAGER)
    private Set<Address> addresses;

    @OneToMany(mappedBy = "employee")
    private Set<Dependent> dependents;

    @OneToMany(mappedBy = "employee")
    private Set<EmployeeHistory> empHistories;

    @OneToMany(mappedBy = "employee")
    private Set<GradeHistory> gradeHistories;

    @OneToMany(mappedBy = "employee")
    private Set<Location> locations;

    @OneToMany(mappedBy = "employee")
    private Set<Credential> credentials;

    public Employee() {
    }

    public Employee(String firstName, String lastName, String grade, Date dob, String phone, String email,
                    String employeementStatus, String gender, String maritalStatus, Integer dependent,
                    String nationality, Date hireDate, Date retireDate, Date suspendDate, int activeInd,
                    Timestamp lastModDate, String lastModUser) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.employeementStatus = employeementStatus;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.dependent = dependent;
        this.nationality = nationality;
        this.hireDate = hireDate;
        this.retireDate = retireDate;
        this.suspendDate = suspendDate;
        this.activeInd = activeInd;
        this.lastModDate = lastModDate;
        this.lastModUser = lastModUser;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmployeementStatus() {
        return employeementStatus;
    }

    public void setEmployeementStatus(String employeementStatus) {
        this.employeementStatus = employeementStatus;
    }


    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }


    public Integer getDependent() {
        return dependent;
    }

    public void setDependent(Integer dependent) {
        this.dependent = dependent;
    }


    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }


    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }


    public Date getRetireDate() {
        return retireDate;
    }

    public void setRetireDate(Date retireDate) {
        this.retireDate = retireDate;
    }

    public Date getSuspendDate() {
        return suspendDate;
    }

    public void setSuspendDate(Date suspendDate) {
        this.suspendDate = suspendDate;
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

    public Set<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<Address> addresses) {
        this.addresses = addresses;
    }

    public Set<Dependent> getDependents() {
        return dependents;
    }

    public void setDependents(Set<Dependent> dependents) {
        this.dependents = dependents;
    }

    public Set<EmployeeHistory> getEmpHistories() {
        return empHistories;
    }

    public void setEmpHistories(Set<EmployeeHistory> empHistories) {
        this.empHistories = empHistories;
    }

    public Set<GradeHistory> getGradeHistories() {
        return gradeHistories;
    }

    public void setGradeHistories(Set<GradeHistory> gradeHistories) {
        this.gradeHistories = gradeHistories;
    }

    public Set<Location> getLocations() {
        return locations;
    }

    public void setLocations(Set<Location> locations) {
        this.locations = locations;
    }

    public Set<Credential> getCredentials() {
        return credentials;
    }

    public void setCredentials(Set<Credential> credentials) {
        this.credentials = credentials;
    }
}
