-- Database Schema for Pace WISP Applications
-- This schema handles incoming applications from the website's apply form.

-- Optional: Create database if not exists
-- CREATE DATABASE pace_wisp_db;
-- \c pace_wisp_db; -- For PostgreSQL

-- 1. Applications Table
-- Stores the primary information from the 'Apply Now' form
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    
    -- Company Details
    company_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    
    -- Contact Information
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    
    -- Service Specifics
    -- Using VARCHAR for portability, but ENUM('hotspot', 'pppoe', 'both') is better in Postgres/MySQL
    service_type VARCHAR(50) NOT NULL CHECK (service_type IN ('hotspot', 'pppoe', 'both')),
    current_users INT DEFAULT 0,
    expected_growth VARCHAR(100), -- Stored as string to handle '10-15%' or '50/mo'
    
    -- Additional Info
    message TEXT,
    
    -- CRM / Management Fields
    status VARCHAR(20) DEFAULT 'pending' 
        CHECK (status IN ('pending', 'reviewing', 'contacted', 'approved', 'rejected')),
    admin_notes TEXT, -- For internal use
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Indexes for faster Lookups
-- Useful for admin dashboard performance
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_created_at ON applications(created_at);

-- 3. Audit Trigger (PostgreSQL Example)
-- Automatically update 'updated_at' column when a record is modified
/*
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
*/

-- 4. Sample Queries for Admin Dashboard

-- Get pending applications from the last 7 days
-- SELECT * FROM applications 
-- WHERE status = 'pending' 
-- AND created_at >= NOW() - INTERVAL '7 days'
-- ORDER BY created_at DESC;

-- Get count of applications by service type
-- SELECT service_type, COUNT(*) 
-- FROM applications 
-- GROUP BY service_type;
