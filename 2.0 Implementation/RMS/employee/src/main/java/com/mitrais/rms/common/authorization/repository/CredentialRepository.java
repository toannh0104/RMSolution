package com.mitrais.rms.common.authorization.repository;

import com.mitrais.rms.me.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by Toan_H on 11/24/2016.
 */
@Repository
public interface CredentialRepository extends JpaRepository<Credential, Integer> {

    /**
     * Query for a Employee entity by email.
     *
     * @param email A String username value to query the repository.
     * @return An Account or <code>null</code> if none found.
     */
    @Query("SELECT a FROM Credential a")
    Credential findByUsername(@Param("email") String email);

}
