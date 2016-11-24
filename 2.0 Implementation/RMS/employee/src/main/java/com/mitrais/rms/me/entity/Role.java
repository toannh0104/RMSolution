package com.mitrais.rms.me.entity;
import javax.persistence.*;
import java.util.Set;


/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
public class Role {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "code")
    private String code;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "role")
    private Set<CredentialRole> credentialRoles;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<CredentialRole> getCredentialRoles() {
        return credentialRoles;
    }

    public void setCredentialRoles(Set<CredentialRole> credentialRoles) {
        this.credentialRoles = credentialRoles;
    }
}
