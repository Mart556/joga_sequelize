"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Authors",
			[
				{
					id: 1,
					name: "John Doe",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					name: "Jane Smith",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					name: "Alice Johnson",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Authors", null, {});
	},
};
