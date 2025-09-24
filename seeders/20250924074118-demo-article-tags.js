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
			"ArticleTags",
			[
				{
					article_id: 1,
					tag_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					article_id: 1,
					tag_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					article_id: 2,
					tag_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					article_id: 2,
					tag_id: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					article_id: 3,
					tag_id: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					article_id: 3,
					tag_id: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					article_id: 3,
					tag_id: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{
				timestamps: true,
			}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
