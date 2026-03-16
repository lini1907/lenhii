import { createBrowserRouter, Navigate } from "react-router"
import { RootLayout } from "./layouts/RootLayout"
import { AuthLayout } from "./layouts/AuthLayout"
import { Register } from "./pages/auth/Register"
import { OTP } from "./pages/auth/OTP"

// Public Pages (No Auth Required)
import { PublicLayout } from "./layouts/PublicLayout"
import { PublicHome } from "./pages/public/PublicHome"
import { DisasterAlerts } from "./pages/public/DisasterAlerts"
import { DisasterAlertDetail } from "./pages/public/DisasterAlertDetail"
import { LiveDisasterMap } from "./pages/public/LiveDisasterMap"
import { IncidentReports } from "./pages/public/IncidentReports"
import { IncidentReportDetail } from "./pages/public/IncidentReportDetail"
import { SafetyGuidelines } from "./pages/public/SafetyGuidelines"
import { EmergencyHotlines } from "./pages/public/EmergencyHotlines"

// Citizen Auth Pages
import { CitizenLogin } from "./pages/auth/CitizenLogin"
import { CitizenRegister } from "./pages/auth/CitizenRegister"
import { CitizenOTP } from "./pages/auth/CitizenOTP"

// Coordinator Auth Pages
import { CoordinatorLogin } from "./pages/auth/CoordinatorLogin"
import { ForgotPassword } from "./pages/auth/ForgotPassword"

// Rescue Team Auth Pages
import { RescueTeamLogin } from "./pages/auth/RescueTeamLogin"
// Admin Auth Pages
import { AdminLogin } from "./pages/auth/AdminLogin"

import { CitizenLayout } from "./layouts/CitizenLayout"
import { CitizenDashboard } from "./pages/citizen/Dashboard"
import { SOSForm } from "./pages/citizen/SOSForm"
import { SOSCategorySelect } from "./pages/citizen/SOSCategorySelect"
import { SOSIncidentDescription } from "./pages/citizen/SOSIncidentDescription"
import { SOSVictimsCount } from "./pages/citizen/SOSVictimsCount"
import { SOSPhotoUpload } from "./pages/citizen/SOSPhotoUpload"
import { SOSLocationAuto } from "./pages/citizen/SOSLocationAuto"
import { SOSLocationManual } from "./pages/citizen/SOSLocationManual"
import { SOSReview } from "./pages/citizen/SOSReview"
import { SOSSubmitting } from "./pages/citizen/SOSSubmitting"
import { SOSConfirmation } from "./pages/citizen/SOSConfirmation"
import { MySOSRequests } from "./pages/citizen/MySOSRequests"
import { SOSRequestDetail } from "./pages/citizen/SOSRequestDetail"

import { CoordinatorLayout } from "./layouts/CoordinatorLayout"
import { CoordinatorDashboard } from "./pages/coordinator/CoordinatorDashboard"
import { IncidentsQueue } from "./pages/coordinator/IncidentsQueue"
import { IncidentDetail } from "./pages/coordinator/IncidentDetail"
import { DuplicateComparison } from "./pages/coordinator/DuplicateComparison"
import { IncidentVerification } from "./pages/coordinator/IncidentVerification"
import { IncidentApproval } from "./pages/coordinator/IncidentApproval"
import { IncidentRejection } from "./pages/coordinator/IncidentRejection"
import { RescueAssignment } from "./pages/coordinator/RescueAssignment"
import { CoordinatorMap } from "./pages/coordinator/CoordinatorMap"
import { WarningsPanel } from "./pages/coordinator/WarningsPanel"
import { DisasterMonitoring } from "./pages/coordinator/DisasterMonitoring"
import { RiskAreaMap } from "./pages/coordinator/RiskAreaMap"
import { CreateAlert } from "./pages/coordinator/CreateAlert"
import { SendAlertConfirmation } from "./pages/coordinator/SendAlertConfirmation"

import { RescueLayout } from "./layouts/RescueLayout"
import { RescueTeamDashboard } from "./pages/rescue/RescueTeamDashboard"
import { RescueMissions } from "./pages/rescue/RescueMissions"
import { MissionNotifications } from "./pages/rescue/MissionNotifications"
import { MissionDetail } from "./pages/rescue/MissionDetail"
import { MissionAccept } from "./pages/rescue/MissionAccept"
import { MissionReject } from "./pages/rescue/MissionReject"
import { MissionNav } from "./pages/rescue/MissionNav"
import { MissionEnroute } from "./pages/rescue/MissionEnroute"
import { MissionArrived } from "./pages/rescue/MissionArrived"
import { RescueInProgress } from "./pages/rescue/RescueInProgress"
import { RescueCompleted } from "./pages/rescue/RescueCompleted"
import { MissionSummary } from "./pages/rescue/MissionSummary"

import { AdminLayout } from "./layouts/AdminLayout"
import { SystemManagement } from "./pages/admin/SystemManagement"

// Error & State Pages
import { Unauthorized } from "./pages/errors/Unauthorized"
import { NotFound } from "./pages/errors/NotFound"
import { EmptyState } from "./pages/states/EmptyState"
import { LoadingState } from "./pages/states/LoadingState"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // Public routes - no authentication required
      {
        path: "",
        Component: PublicLayout,
        children: [
          { index: true, Component: PublicHome },
          { path: "alerts", Component: DisasterAlerts },
          { path: "alerts/:id", Component: DisasterAlertDetail },
          { path: "map", Component: LiveDisasterMap },
          { path: "incidents", Component: IncidentReports },
          { path: "incidents/:id", Component: IncidentReportDetail },
          { path: "safety", Component: SafetyGuidelines },
          { path: "hotlines", Component: EmergencyHotlines },
        ],
      },
      // Authentication routes
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { index: true, element: <Navigate to="/auth/citizen/login" replace /> },
          { path: "register", Component: Register },
          { path: "otp", Component: OTP },
          { path: "forgot-password", Component: ForgotPassword },
          // Citizen Auth
          { path: "citizen/login", Component: CitizenLogin },
          { path: "citizen/register", Component: CitizenRegister },
          { path: "citizen/otp", Component: CitizenOTP },
          // Coordinator Auth
          { path: "coordinator/login", Component: CoordinatorLogin },
          // Rescue Team Auth
          { path: "rescue/login", Component: RescueTeamLogin },
          // Admin Auth
          { path: "admin/login", Component: AdminLogin },
        ],
      },
      // Citizen routes - requires authentication
      {
        path: "citizen",
        Component: CitizenLayout,
        children: [
          { index: true, Component: CitizenDashboard },
          { path: "my-requests", Component: MySOSRequests },
          { path: "my-requests/:id", Component: SOSRequestDetail },
          // SOS Flow
          { path: "sos", Component: SOSForm },
          { path: "sos/category", Component: SOSCategorySelect },
          { path: "sos/description", Component: SOSIncidentDescription },
          { path: "sos/victims", Component: SOSVictimsCount },
          { path: "sos/photos", Component: SOSPhotoUpload },
          { path: "sos/location-auto", Component: SOSLocationAuto },
          { path: "sos/location-manual", Component: SOSLocationManual },
          { path: "sos/review", Component: SOSReview },
          { path: "sos/submitting", Component: SOSSubmitting },
          { path: "sos/confirmation", Component: SOSConfirmation },
        ],
      },
      // Coordinator routes - requires authentication
      {
        path: "coordinator",
        Component: CoordinatorLayout,
        children: [
          { index: true, Component: CoordinatorDashboard },
          { path: "incidents", Component: IncidentsQueue },
          { path: "incidents/:id", Component: IncidentDetail },
          { path: "incidents/:id/verify", Component: IncidentVerification },
          { path: "incidents/:id/approve", Component: IncidentApproval },
          { path: "incidents/:id/reject", Component: IncidentRejection },
          { path: "incidents/:id/duplicates", Component: DuplicateComparison },
          { path: "assign", Component: RescueAssignment },
          { path: "map", Component: CoordinatorMap },
          { path: "warnings", Component: WarningsPanel },
          // Early Warning System
          { path: "monitoring", Component: DisasterMonitoring },
          { path: "risk-map", Component: RiskAreaMap },
          { path: "create-alert", Component: CreateAlert },
          { path: "alert-confirmation", Component: SendAlertConfirmation },
        ],
      },
      // Rescue Team routes - requires authentication
      {
        path: "rescue",
        Component: RescueLayout,
        children: [
          { index: true, Component: RescueTeamDashboard },
          { path: "missions", Component: RescueMissions },
          { path: "notifications", Component: MissionNotifications },
          { path: "missions/:id", Component: MissionDetail },
          { path: "missions/:id/accept", Component: MissionAccept },
          { path: "missions/:id/reject", Component: MissionReject },
          { path: "missions/:id/nav", Component: MissionNav },
          { path: "missions/:id/enroute", Component: MissionEnroute },
          { path: "missions/:id/arrived", Component: MissionArrived },
          { path: "missions/:id/in-progress", Component: RescueInProgress },
          { path: "missions/:id/completed", Component: RescueCompleted },
          { path: "missions/:id/summary", Component: MissionSummary },
          { path: "nav/:id", Component: MissionNav },
        ],
      },
      // Admin routes
      {
        path: "admin",
        Component: AdminLayout,
        children: [
          { index: true, Component: SystemManagement },
        ],
      },
      // Error pages
      { path: "unauthorized", Component: Unauthorized },
      { path: "empty", Component: EmptyState },
      { path: "loading", Component: LoadingState },
      { path: "*", Component: NotFound },
    ],
  },
])