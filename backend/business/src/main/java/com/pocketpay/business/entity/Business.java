package com.pocketpay.business.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Table(name = "business")
@Entity
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "registration_number")
    private String registrationNumber;


    @Column(name = "business_address")
    private String businessAddress;
    @Column(name = "size_of_business")
    private String sizeOfBusiness;
    @Column(name = "category")
    private String category;

    @Column(name = "sub_category")
    private String subCategory;

}
