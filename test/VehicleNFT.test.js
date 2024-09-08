const { expect } = require("chai");

describe("VehicleNFT", function () {
    let vehicleNFT;
    let owner, manufacturer, serviceProvider, user;

    // Setup: Deploy the contract and authorize a manufacturer before each test
    beforeEach(async function () {
        const VehicleNFT = await ethers.getContractFactory("VehicleNFT");
        vehicleNFT = await VehicleNFT.deploy();
        [owner, manufacturer, serviceProvider, user] = await ethers.getSigners();

        // The contract owner authorizes the manufacturer before minting vehicles
        await vehicleNFT.authorizeManufacturer(manufacturer.address);
    });

    it("Should allow the vehicle owner to assign an authorized car service provider", async function () {
        // Authorize a car service provider
        await vehicleNFT.authorizeCarServiceProvider(serviceProvider.address);

        // Mint a new vehicle by the authorized manufacturer
        await vehicleNFT.connect(manufacturer).mintVehicle("hashMetaData", "hashInsurance", "hashService");

        // The vehicle owner assigns the authorized car service provider
        await vehicleNFT.connect(manufacturer).assignCarServiceProvider(1, serviceProvider.address);

        // Verify that the car service provider was assigned correctly by accessing the vehicles mapping
        const vehicle = await vehicleNFT.vehicles(1);
        expect(vehicle.ownerAddress).to.equal(serviceProvider.address);
    });

    it("Should allow authorized service providers to update car service records with IPFS", async function () {
        const dummyServiceRecordHash = "QmSomeDummyIPFSHashForServiceRecord";

        // Authorize a car service provider
        await vehicleNFT.authorizeCarServiceProvider(serviceProvider.address);

        // Mint a vehicle by the authorized manufacturer
        await vehicleNFT.connect(manufacturer).mintVehicle("hashMetaData", "hashInsurance", "hashService");

        // The authorized car service provider updates the car service record
        await vehicleNFT.connect(serviceProvider).updateCarServiceRecord(1, dummyServiceRecordHash);

        // Verify that the car service record was updated correctly by accessing the vehicles mapping
        const vehicle = await vehicleNFT.vehicles(1);
        expect(vehicle.carServiceRecordHash).to.equal(dummyServiceRecordHash);
    });
});
