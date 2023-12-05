package com.pocketpay.transaction.repository;

import com.pocketpay.transaction.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OwnerRepository extends JpaRepository<Owner,Long> {
}
