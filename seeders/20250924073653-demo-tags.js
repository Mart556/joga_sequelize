"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			"Tags",
			[
				{
					name: "yogapractice",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "yogainspiration",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "nature",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "wellness",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "spiritual",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "sport",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "yogateacher",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Tags", null, {});
	},
};
