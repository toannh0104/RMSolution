package com.mitrais.rms.me.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


/**
 * Created by Toan_H on 11/24/2016.
 */
@Entity
public class Role {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "code")
    @NotNull
    private String code;

    @NotNull
    @Column(name = "description")
    private String description;

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
}
