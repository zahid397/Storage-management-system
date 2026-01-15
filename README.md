# Storage Management System Backend

Modular Node.js Backend for a File Storage System.

## Features
- **Auth:** JWT, Email OTP (Mocked), PIN.
- **Files:** Upload (Image/PDF), Create Notes, Duplicate, Share.
- **Organization:** Folders, Favorites, Calendar View.

## Setup
1. `npm install`
2. Create `.env` file (see above).
3. Ensure MongoDB is running.
4. `npm run dev`

## API Endpoints
- POST `/api/auth/register`
- POST `/api/files/upload` (form-data: 'file')
- GET `/api/files?date=2024-01-15`
- 
