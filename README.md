# 🩺 API Health Scoring & Failover Dashboard

A **real-time reliability monitoring system** that evaluates API health, assigns a dynamic score, and triggers alerts or failover actions when performance dips — inspired by SRE (Site Reliability Engineering) practices used in top tech companies.

## Overview

This dashboard provides **real-time visibility** into the reliability and responsiveness of APIs.  
It monitors latency, uptime, and error trends to generate a **health score**, visualized beautifully through an interactive frontend.

### Core Features
- **Health Scoring Engine:** Calculates an API health score based on latency, error rate, and status codes.
- **Real-Time Monitoring:** Continuously pings endpoints using a scheduler and updates dashboard metrics.
- **Failover Mechanism:** Automatically switches to a backup API when health falls below a threshold.
- **Alerts & Notifications:** Sends alerts for degraded or failed APIs.
- **Interactive Dashboard:** Built using React + Tailwind (Mosaic Lite UI) with rich Recharts visualizations.


## Tech Stack

**Frontend:**
- React + Vite
- TailwindCSS (Mosaic Lite Dashboard Template)
- Recharts
- Lucide React Icons

**Backend:**
- Node.js + Express
- MongoDB (Mongoose)
- Axios for API requests
- Node-cron for scheduling health checks
- Nodemailer / EmailJS (optional notifications)

**Deployment:**
- Vercel (Frontend)
- Railway / Render (Backend)
- MongoDB Atlas (Database)


## System Design Highlights

- **Scheduler / Ping Service:** Periodically pings all registered APIs and stores metrics.
- **Health Score Engine:** Uses rolling averages and weighted scoring logic for real-time reliability evaluation.
- **Failover Handler:** Monitors thresholds and triggers automatic rerouting to backup endpoints.
- **Notification System:** Notifies users when health score dips below thresholds.
- 
<img width="1470" height="624" alt="Screenshot 2025-11-12 at 3 30 43 PM" src="https://github.com/user-attachments/assets/a2c80ea5-8a99-439a-badc-f5173cfd580c" />

<img width="1470" height="834" alt="Screenshot 2025-11-12 at 3 30 57 PM" src="https://github.com/user-attachments/assets/371062a8-22c4-4054-8870-0ee261046d21" />

