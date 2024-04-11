CREATE DATABASE IF NOT EXISTS translationDB;

USE translationDB;

CREATE TABLE IF NOT EXISTS translations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ukrainian_word VARCHAR(255) NOT NULL,
    english_translation VARCHAR(255) NOT NULL
);


