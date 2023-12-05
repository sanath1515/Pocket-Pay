package com.pocketpay.business.repository;

import com.pocketpay.business.entity.TradingAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradingAddressRepository extends JpaRepository<TradingAddress,Long> {
}
