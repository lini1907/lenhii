Expand the existing Disaster SOS and Rescue Coordination System UI that was already generated.

Do not redesign the existing screens. Instead, expand the system by adding missing screens, flows, and user states so the project contains approximately 40–60 screens in total.

Fix and implement the following system logic:

USER ROLES
The system has three roles:

1. Citizen
2. Government / Emergency Coordinator
3. Rescue Team

AUTHENTICATION RULES

Citizens do NOT need to log in to view public information.

Citizens can access without login:

* disaster warnings
* incident reports
* disaster maps
* safety information
* public alerts

Citizens MUST log in only when:

* submitting an SOS request
* uploading evidence
* tracking their rescue request

Government coordinators and rescue teams MUST log in before accessing the system.

---

EXPAND PUBLIC CITIZEN SCREENS (NO LOGIN REQUIRED)

Create additional screens for public information access:

Public home page
Disaster alert list
Disaster alert detail page
Live disaster map
Incident reports list
Incident report details
Safety guidelines page
Emergency hotline information

---

CITIZEN AUTHENTICATION FLOW (ONLY WHEN SENDING SOS)

Add screens:

Login required modal when submitting SOS
Citizen login screen
Citizen registration screen
OTP verification screen
Login success redirect to SOS form

---

EXPAND SOS REPORTING FLOW

Add more detailed screens for the SOS process:

Select disaster category
Enter incident description
Add number of victims
Upload photos/videos
Location auto-detection
Manual map pin selection
Review report information
SOS submission loading screen
SOS submitted confirmation

---

COORDINATOR AUTHENTICATION

Government coordinators must log in before accessing the dashboard.

Add screens:

Coordinator login
Coordinator dashboard
Forgot password
Access denied screen for unauthorized users

---

COORDINATOR INCIDENT MANAGEMENT

Expand the coordinator workflow:

Incident monitoring dashboard
Incident list with filters
Incident detail screen
Duplicate report comparison screen
Verification decision screen
Approve incident screen
Reject incident screen

---

RESCUE TEAM AUTHENTICATION

Rescue teams must log in before accessing the mission interface.

Add screens:

Rescue team login
Rescue team dashboard
Mission notifications screen

---

RESCUE OPERATION FLOW

Expand rescue operation screens:

Mission detail
Accept mission
Reject mission
Navigation to incident (map)
Update mission status: En route
Update mission status: Arrived
Rescue in progress
Rescue completed
Mission summary

---

EARLY WARNING SYSTEM

Expand disaster alert management:

Disaster monitoring dashboard
Risk area map
Create alert message
Send alert confirmation
Citizen alert notification

---

ADD ADDITIONAL SYSTEM STATES

Also create screens for:

Empty states (no incidents, no alerts)
Loading states
Error states
Unauthorized access screens
Notification popups
Success confirmation screens

---

LAYOUT ORGANIZATION

Organize the canvas into flows:

Flow 1 – Public Citizen Access
Flow 2 – Citizen SOS Reporting
Flow 3 – Coordinator Incident Verification
Flow 4 – Rescue Team Mission Management
Flow 5 – Rescue Coordination
Flow 6 – Early Warning System
