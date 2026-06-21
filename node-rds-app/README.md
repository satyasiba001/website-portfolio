# AWS RDS + Dockerized Node.js Application

## Project Overview

This project demonstrates how to deploy a Dockerized Node.js application on AWS EC2 and connect it to an Amazon RDS MySQL database.

The application fetches employee information stored in MySQL and displays it through a simple web interface.

## Architecture

Browser
↓
EC2 Instance
↓
Docker Container (Node.js + Express)
↓
Amazon RDS MySQL

## Technologies Used

* AWS EC2
* Amazon RDS (MySQL)
* Docker
* Node.js
* Express.js
* MySQL2
* Amazon Linux

## Features

* Dockerized Node.js application
* Amazon RDS MySQL integration
* Employee management database
* Security Group configuration
* Database user management
* Read-only and application-specific users
* Automated backups
* Manual snapshots
* Disaster recovery testing
* Environment variable support
* Web UI for displaying employee data

## Database Setup

### Create Database

```sql
CREATE DATABASE appdb;
```

### Create Table

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sample Data

```sql
INSERT INTO employees(name, department)
VALUES
('Satyasiba','DevOps'),
('John','Cloud'),
('Alice','Platform');
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start application:

```bash
node server.js
```

## Docker Deployment

Build image:

```bash
docker build -t node-rds-app:v1 .
```

Run container:

```bash
docker run -d \
-p 3000:3000 \
-e DB_HOST=<RDS-ENDPOINT> \
-e DB_USER=appuser \
-e DB_PASSWORD=<PASSWORD> \
-e DB_NAME=appdb \
node-rds-app:v1
```

## Security Implementations

* Dedicated application user
* Read-only user
* Principle of Least Privilege
* Security Group-based access control
* Database access restricted through AWS networking

## Backup and Recovery

* Automated RDS backups enabled
* Manual snapshots created before changes
* Snapshot restoration tested
* Disaster recovery workflow validated

## Learning Outcomes

* AWS RDS administration
* MySQL user management
* Docker containerization
* EC2 to RDS connectivity
* Security Group troubleshooting
* Backup and recovery strategies
* Application deployment on AWS

## Future Enhancements

* AWS Secrets Manager integration
* Docker Compose
* Amazon ECR integration
* CI/CD using GitHub Actions
* Nginx reverse proxy
* CloudWatch monitoring
