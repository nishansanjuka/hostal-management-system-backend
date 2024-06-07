import express from "express";
import { ExchangeRequestController } from "./controller/ExchangeRequestController";
import { HostelController } from "./controller/hostelController";
import { PrivateBoardingOwnerController } from "./controller/PrivateBoardingOwnerController";
import { RoomAllocationController } from "./controller/RoomAllocationController";
import { RoomController } from "./controller/RoomController";

const router = express.Router();

// Instantiate controllers
const hostelController = new HostelController();
const roomController = new RoomController();
const exchangeRequestController = new ExchangeRequestController();
const privateBoardingOwnerController = new PrivateBoardingOwnerController();
const roomAllocationController = new RoomAllocationController();

// Define routes
router.get("/hostels", hostelController.getAllHostels);
router.post("/hostels", hostelController.createHostel);
router.get("/hostels/:id", hostelController.getHostelById);
router.put("/hostels/:id", hostelController.updateHostel);
router.delete("/hostels/:id", hostelController.deleteHostel);

router.get("/hostels/:id/rooms", roomController.getAllRooms);
router.post("/hostels/:id/rooms", roomController.createRoom);
router.get("/hostels/:id/rooms/:roomId", roomController.getRoomById);
router.put("/hostels/:id/rooms/:roomId", roomController.updateRoom);
router.delete("/hostels/:id/rooms/:roomId", roomController.deleteRoom);

router.get("/swap-requests", exchangeRequestController.getAllExchangeRequests);
router.put("/swap-requests/:id", exchangeRequestController.updateExchangeRequest);

router.post("/allocate-students", roomAllocationController.allocateStudents);

router.get("/private-boarding-owners", privateBoardingOwnerController.getAllPrivateBoardingOwners);
router.post("/private-boarding-owners", privateBoardingOwnerController.createPrivateBoardingOwner);
router.get("/private-boarding-owners/:id", privateBoardingOwnerController.getPrivateBoardingOwnerById);
router.put("/private-boarding-owners/:id", privateBoardingOwnerController.updatePrivateBoardingOwner);
router.delete("/private-boarding-owners/:id", privateBoardingOwnerController.deletePrivateBoardingOwner);

// Export the router
export default router;
