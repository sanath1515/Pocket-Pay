package com.pocketpay.transaction.entity;
import lombok.*;

import javax.persistence.*;

@Data
@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="business")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="business_name")
    private String businessName;

    @Column(name="registration_number")
    private String registrationNumber;

    @Column(name="size_of_business")
    private String sizeOfBusiness;

    @Column(name="category")
    private String category;

    @Column(name="sub_category")
    private String subCategory;

    @Column(name="business_address")
    private String businessAddress;
}
