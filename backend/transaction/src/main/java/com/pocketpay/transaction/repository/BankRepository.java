package com.pocketpay.transaction.repository;

import com.pocketpay.transaction.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BankRepository extends JpaRepository<Bank,Long> {
}
