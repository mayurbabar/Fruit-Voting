-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2018 at 08:11 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- ------------------------ 
-- Database: `fruitvoting` 
-- ------------------------ 
CREATE DATABASE fruitvoting;

-- --------------------------------------------------------

-- 
-- Table structure for table `fruits`
-- 

CREATE TABLE `fruits` (
  `fruit_id` int(11) NOT NULL,
  `fruit_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table `fruits`
-- 

INSERT INTO `fruits` (`fruit_id`, `fruit_name`) VALUES
(1, 'Apple'),
(2, 'Orange'),
(3, 'Banana'),
(4, 'Pineapple');

-- --------------------------------------------------------

-- 
-- Table structure for table `users`
-- 

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--  
-- Dumping data for table `users`
-- 

INSERT INTO `users` (`ID`, `name`, `email`, `password`) VALUES
(1, 'Jane Jacobs', 'jane@gmail.com', '1234'),
(2, 'John Jacobs', 'john@gmail.com', '1234'),
(3, 'Mayur Babar', 'mayur.babar@gmail.com', '1234'),
(4, 'Admin', 'admin@admin.com', 'admin');

-- --------------------------------------------------------

-- 
-- Table structure for table `votes`
-- 

CREATE TABLE `votes` (
  `vote_id` int(11) NOT NULL,
  `fruit_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table `votes`
-- 
 
INSERT INTO `votes` (`vote_id`, `fruit_id`, `user_id`, `datetime`) VALUES
(1, 1, 1, '2018-03-01 10:10:00'),
(2, 2, 1, '2018-03-02 01:20:00'),
(3, 3, 2, '2018-02-06 02:10:00'),
(4, 4, 3, '2018-02-19 07:59:00'),
(5, 2, 1, '2018-01-09 09:00:00'),
(6, 1, 4, '2018-01-17 00:30:00'),
(7, 2, 4, '2018-01-08 04:20:00');

-- --------------------------
-- Indexes for dumped tables
-- --------------------------

-- 
-- Indexes for table `fruits`
-- 
ALTER TABLE `fruits`
  ADD PRIMARY KEY (`fruit_id`);

-- 
-- Indexes for table `users`
-- 
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

-- 
-- Indexes for table `votes`
-- 
ALTER TABLE `votes`
  ADD PRIMARY KEY (`vote_id`),
  ADD KEY `fruit_id` (`fruit_id`),
  ADD KEY `user_id` (`user_id`);
  

-- ---------------------------------
-- AUTO_INCREMENT for dumped tables
-- ---------------------------------

-- 
-- AUTO_INCREMENT for table `fruits`
-- 
ALTER TABLE `fruits`
  MODIFY `fruit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

-- 
-- AUTO_INCREMENT for table `users`
-- 
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

-- 
-- AUTO_INCREMENT for table `votes`
-- 
ALTER TABLE `votes`
  MODIFY `vote_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
  

-- ------------------------------
-- Constraints for dumped tables
-- ------------------------------

-- 
-- Constraints for table `votes`
-- 
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`fruit_id`) REFERENCES `fruits` (`fruit_id`),
  ADD CONSTRAINT `votes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
