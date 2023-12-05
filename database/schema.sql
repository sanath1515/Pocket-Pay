-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pocketpay
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pocketpay
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pocketpay` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pocketpay` ;

-- -----------------------------------------------------
-- Table `pocketpay`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`address` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(45) NOT NULL,
  `house_no` VARCHAR(45) NOT NULL,
  `pincode` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 58
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`bank`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`bank` (
  `IFSC_code` VARCHAR(45) NOT NULL,
  `Bank_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IFSC_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`business` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `business_name` VARCHAR(100) NOT NULL,
  `registration_number` VARCHAR(50) NOT NULL,
  `size_of_business` VARCHAR(45) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `sub_category` VARCHAR(100) NOT NULL,
  `business_address` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`currency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`currency` (
  `id` INT NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`recipient_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`recipient_details` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `acc_no` DOUBLE NOT NULL,
  `account_type` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `bank_IFSC_code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Recipient_details_bank1_idx` (`bank_IFSC_code` ASC) VISIBLE,
  CONSTRAINT `fk_Recipient_details_bank1`
    FOREIGN KEY (`bank_IFSC_code`)
    REFERENCES `pocketpay`.`bank` (`IFSC_code`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`owner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`owner` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `Recipient_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_owner_Recipient_details1_idx` (`Recipient_id` ASC) VISIBLE,
  CONSTRAINT `fk_owner_Recipient_details1`
    FOREIGN KEY (`Recipient_id`)
    REFERENCES `pocketpay`.`recipient_details` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`trading_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`trading_address` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(500) NOT NULL,
  `business_id` BIGINT NOT NULL,
  `address1` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trading_address_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_trading_address_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `pocketpay`.`business` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `account_type` VARCHAR(45) NOT NULL,
  `phno` VARCHAR(15) NOT NULL,
  `dob` VARCHAR(45) NOT NULL,
  `address_id` BIGINT NOT NULL,
  `business_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_address1_idx` (`address_id` ASC) VISIBLE,
  INDEX `fk_user_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `pocketpay`.`address` (`id`),
  CONSTRAINT `fk_user_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `pocketpay`.`business` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 30
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocketpay`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocketpay`.`transaction` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  `sending_amount` VARCHAR(45) NOT NULL,
  `guaranted_rate` VARCHAR(45) NOT NULL,
  `fee` VARCHAR(45) NOT NULL,
  `time` TIME NOT NULL,
  `reference_no` VARCHAR(45) NOT NULL,
  `recieving_amount` VARCHAR(45) NOT NULL,
  `purpose` VARCHAR(45) NOT NULL,
  `Recipient_id` BIGINT NOT NULL,
  `bank_IFSC_code` VARCHAR(45) NOT NULL,
  `user_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transaction_Recipient_details1_idx` (`Recipient_id` ASC) VISIBLE,
  INDEX `fk_transaction_bank1_idx` (`bank_IFSC_code` ASC) VISIBLE,
  INDEX `fk_transaction_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_transaction_bank1`
    FOREIGN KEY (`bank_IFSC_code`)
    REFERENCES `pocketpay`.`bank` (`IFSC_code`),
  CONSTRAINT `fk_transaction_Recipient_details1`
    FOREIGN KEY (`Recipient_id`)
    REFERENCES `pocketpay`.`recipient_details` (`id`),
  CONSTRAINT `fk_transaction_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `pocketpay`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
