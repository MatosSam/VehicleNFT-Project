# 🚗 VehicleNFT Project

## 📜 Project Description

This project implements a **smart contract for managing vehicle NFTs**. The contract was developed using **Solidity** and tested with **Hardhat**. It allows functionalities such as:

- **Minting** vehicles (only by authorized manufacturers).
- Assigning car service providers to vehicles.
- Updating car service records using **IPFS** to store off-chain data.
- Checking the vehicle status, such as if it has been reported stolen or if the loan has been cleared.

## 🛠️ Technologies Used

- **Solidity**: The primary programming language used for developing smart contracts on Ethereum.
- **Hardhat**: A development environment for compiling, testing, and deploying smart contracts.
- **Ethers.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **Node.js**: JavaScript runtime used to run tests with Hardhat.
- **IPFS (simulated)**: Used for storing off-chain service records (currently simulated).

## 🌟 Key Features

### 1. Vehicle Minting
Only authorized manufacturers can mint new vehicle NFTs.

### 2. Assigning Service Providers
Vehicle owners can assign authorized service providers to update service records for a vehicle.

### 3. Updating Service Records
Authorized service providers can update the vehicle's service records with **IPFS hashes**, storing the data off-chain.

### 4. Report Stolen Vehicle
Owners can report a vehicle as stolen, and only a regulatory authority can confirm this status.

### 5. Clear Loan
Owners can mark a loan as cleared, and the regulatory authority can confirm the loan clearance.

## 📁 Project Structure

- **contracts/**
  - `VehicleNFT.sol`: The smart contract that implements the logic for minting, assigning service providers, and updating service records.
  
- **test/**
  - `VehicleNFT.test.js`: Automated tests to verify the main functionalities of the contract.
  
- **hardhat.config.js**: Hardhat configuration file.

## 🛠️ Installation

Follow the steps below to clone and run the project locally.

### Prerequisites

- Node.js installed (version 12 or higher)
- Hardhat installed globally or locally in the project

### Installation Steps

1. Clone the repository:

   git clone https://github.com/MatosSam/VehicleNFT-Project.git

2. Navigate to the project directory:

   cd VehicleNFT-Project

3. Install the dependencies

   npm install

## Running Tests

Use the following commands to compile the contract and run the tests:

Compile the contract:
npx hardhat compile

Run the tests:
npx hardhat test

