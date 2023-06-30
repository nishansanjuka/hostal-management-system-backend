// controllers/hostelController.js

const Hostel = require('../models/hostelModel');

const getHostels = async () => {
    try {
        const hostels = await Hostel.findAll();
        console.log(hostels[0]);
        return hostels;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

const getHostelById = async (req, res) => {
    const { id } = req.params;
    try {
        const hostel = await Hostel.findById(id);
        if (!hostel) {
            return res.status(404).send('Hostel not found');
        }
        return hostel;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

const createHostel = async (req, res) => {
    const { name, address, contactInfo, numRooms, roomType, price } = req.body;
    try {
        const newHostel = await Hostel.create({
            name,
            address,
            contactInfo,
            numRooms,
            roomType,
            price
        });
        return newHostel;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

module.exports = {
    getHostels,
    getHostelById,
    createHostel
};
