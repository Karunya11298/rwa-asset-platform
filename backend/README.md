# RWA Asset Platform — Backend

Backend service for the **RWA (Real-World Asset) Platform**, an enterprise-style FinTech learning project built with NestJS.

The platform is designed to represent real-world assets such as renewable energy projects, real estate, commodities, bonds, invoices, and carbon credits, with the long-term goal of supporting asset tokenisation, ownership tracking, transactions, blockchain integration, and AI-assisted data access.

> **Note:** This is a learning and portfolio project. It does not represent real financial assets, investments, or legal ownership.

---

## 🎯 Project Goal

The backend provides the core APIs required to:

- Register real-world assets
- Store and retrieve asset information
- Update asset details
- Remove assets
- Validate incoming API requests
- Handle invalid asset IDs
- Provide a foundation for PostgreSQL persistence
- Prepare the application for blockchain integration
- Prepare controlled backend tools for future AI-agent integration

The backend is being developed incrementally using enterprise-style development practices.

---

## 🏗️ Current Architecture
Client / Frontend
       │
       ▼
   NestJS API
       │
       ▼
   Controller
       │
       ▼
      DTO
       │
       ▼
   Validation
       │
       ▼
    Service
       │
       ▼
 In-Memory Storage
