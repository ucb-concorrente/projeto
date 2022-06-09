-- MySQL Workbench Synchronization
-- Generated: 2022-06-08 22:58
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Mateus Colares

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `mydb`.`ingresso` (
  `idingresso` INT(11) NOT NULL AUTO_INCREMENT,
  `valor_ingresso` FLOAT(11) NOT NULL,
  `qtd_ingressos` INT(11) NOT NULL,
  `show_idshow` INT(11) NOT NULL,
  `tipo_ingresso` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idingresso`),
  UNIQUE INDEX `idingresso_UNIQUE` (`idingresso` ASC) VISIBLE,
  INDEX `fk_ingresso_show1_idx` (`show_idshow` ASC) VISIBLE,
  CONSTRAINT `fk_ingresso_show1`
    FOREIGN KEY (`show_idshow`)
    REFERENCES `mydb`.`show` (`idshow`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`show` (
  `idshow` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_show` VARCHAR(45) NOT NULL,
  `localizacao` VARCHAR(45) NOT NULL,
  `artista_mpb` VARCHAR(45) NOT NULL,
  `data_show` DATETIME NOT NULL,
  PRIMARY KEY (`idshow`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`profile` (
  `idprofile` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(45) NOT NULL,
  `nascimento_usuario` DATE NOT NULL,
  `cpf_usuario` VARCHAR(12) NOT NULL,
  `celular_usuario` VARCHAR(12) NOT NULL,
  `email_usuario` VARCHAR(45) NOT NULL,
  `senha_usuario` VARCHAR(22) NOT NULL,
  `is_admin` TINYINT(4) NOT NULL,
  PRIMARY KEY (`idprofile`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`ingresso_usuario` (
  `id_ingresso_usuario` INT(11) NOT NULL,
  `profile_idprofile` INT(11) NOT NULL,
  `ingresso_idingresso` INT(11) NOT NULL,
  PRIMARY KEY (`id_ingresso_usuario`),
  INDEX `fk_ingresso_usuario_profile1_idx` (`profile_idprofile` ASC) VISIBLE,
  INDEX `fk_ingresso_usuario_ingresso1_idx` (`ingresso_idingresso` ASC) VISIBLE,
  CONSTRAINT `fk_ingresso_usuario_profile1`
    FOREIGN KEY (`profile_idprofile`)
    REFERENCES `mydb`.`profile` (`idprofile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingresso_usuario_ingresso1`
    FOREIGN KEY (`ingresso_idingresso`)
    REFERENCES `mydb`.`ingresso` (`idingresso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
