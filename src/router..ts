import express from "express";
import { ExchangeRequestController } from "./controller/ExchangeRequestController";
import { HostelController } from "./controller/hostelController";
import { PrivateBoardingOwnerController } from "./controller/PrivateBoardingOwnerController";
import { RoomController } from "./controller/RoomController";
import { UserController } from "./controller/UserController";
import { StudentController } from "./controller/StudentController";
import { PrivateBoardingController } from "./controller/PrivateBoardingController";
import { BoardingRoomController } from "./controller/BoardingRoomController";


const router = express.Router();

const hostelController = new HostelController();
const roomController = new RoomController();
const exchangeRequestController = new ExchangeRequestController();
const privateBoardingOwnerController = new PrivateBoardingOwnerController();
const userController = new UserController();
const studentController = new StudentController();
const privateBoardingController = new PrivateBoardingController();
const boardingRoomController = new BoardingRoomController();

// Hostel Routes
router.get("/hostels", hostelController.getAllHostels);
router.post("/hostels", hostelController.createHostel);
router.get("/hostels/:id", hostelController.getHostelById);
router.put("/hostels/:id", hostelController.updateHostel);
router.delete("/hostels/:id", hostelController.deleteHostel);

// Room Routes
router.get("/hostels/:id/rooms", roomController.getAllRooms);
router.post("/hostels/:id/rooms", roomController.createRoom);
router.get("/hostels/:id/rooms/:roomId", roomController.getRoomById);
router.put("/hostels/:id/rooms/:roomId", roomController.updateRoom);
router.delete("/hostels/:id/rooms/:roomId", roomController.deleteRoom);

// Exchange Request Routes
router.get("/swap-requests", exchangeRequestController.getAllExchangeRequests);
router.put("/swap-requests/:id", exchangeRequestController.updateExchangeRequest);


// Private Boarding Owner Routes
router.get("/private-boarding-owners", privateBoardingOwnerController.getAllPrivateBoardingOwners);
router.post("/private-boarding-owners", privateBoardingOwnerController.createPrivateBoardingOwner);
router.get("/private-boarding-owners/:id", privateBoardingOwnerController.getPrivateBoardingOwnerById);
router.put("/private-boarding-owners/:id", privateBoardingOwnerController.updatePrivateBoardingOwner);
router.delete("/private-boarding-owners/:id", privateBoardingOwnerController.deletePrivateBoardingOwner);

// User Routes
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Student Routes
router.get("/students", studentController.getAllStudents);
router.post("/students", studentController.createStudent);
router.get("/students/:id", studentController.getStudentById);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

// Private Boarding Routes
router.get("/private-boardings", privateBoardingController.getAllPrivateBoardings);
router.post("/private-boardings", privateBoardingController.createPrivateBoarding);
router.get("/private-boardings/:id", privateBoardingController.getPrivateBoardingById);
router.put("/private-boardings/:id", privateBoardingController.updatePrivateBoarding);
router.delete("/private-boardings/:id", privateBoardingController.deletePrivateBoarding);

// Boarding Room Routes
router.get("/private-boardings/:id/boarding-rooms", boardingRoomController.getAllBoardingRooms);
// router.post("/private-boardings/:id/boarding-rooms", boardingRoomController.createBoardingRoom);
router.get("/private-boardings/:id/boarding-rooms/:roomId", boardingRoomController.getBoardingRoomById);
router.put("/private-boardings/:id/boarding-rooms/:roomId", boardingRoomController.updateBoardingRoom);
router.delete("/private-boardings/:id/boarding-rooms/:roomId", boardingRoomController.deleteBoardingRoom);

// Export the router
export default router;
