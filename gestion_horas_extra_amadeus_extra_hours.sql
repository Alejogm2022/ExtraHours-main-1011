-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_horas_extra_amadeus
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `extra_hours`
--

DROP TABLE IF EXISTS `extra_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `extra_hours` (
  `registry` int NOT NULL AUTO_INCREMENT,
  `id` bigint DEFAULT NULL,
  `date` date DEFAULT NULL,
  `diurnal` double DEFAULT NULL,
  `nocturnal` double DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `diurnal_holiday` double DEFAULT NULL,
  `end_time` time(6) DEFAULT NULL,
  `extras_hours` double DEFAULT NULL,
  `nocturnal_holiday` double DEFAULT NULL,
  `start_time` time(6) DEFAULT NULL,
  PRIMARY KEY (`registry`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_hours`
--

LOCK TABLES `extra_hours` WRITE;
/*!40000 ALTER TABLE `extra_hours` DISABLE KEYS */;
INSERT INTO `extra_hours` VALUES (1,123462,'2024-10-20',0,0,'ninguna',0.88,'23:07:00.000000',3,2.12,'20:07:00.000000'),(2,123461,'2024-10-20',0,0,'Ninguna',0,'23:22:00.000000',1,1,'22:22:00.000000'),(3,123456,'2024-10-22',1.73,0.27,'Tarea adicional',0,'21:16:00.000000',2,0,'19:16:00.000000'),(4,123459,'2024-10-23',2.03,1.97,'Pruebas',0,'22:58:00.000000',4,0,'18:58:00.000000'),(5,123456,'2024-10-23',1.43,1.57,'Trabajo adicional',0,'22:34:00.000000',3,0,'19:34:00.000000');
/*!40000 ALTER TABLE `extra_hours` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-23 19:39:39
