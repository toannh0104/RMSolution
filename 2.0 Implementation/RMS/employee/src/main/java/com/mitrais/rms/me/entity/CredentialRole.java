package com.mitrais.rms.me.entity;
import javax.persistence.*;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
@Table(name = "credential_role", schema = "rmsolution")
public class CredentialRole {

    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "credential_id", referencedColumnName = "id", nullable = false)
    private Credential credential;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id", nullable = false)
    private Role role;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Credential getCredential() {
        return credential;
    }

    public void setCredential(Credential credential) {
        this.credential = credential;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
