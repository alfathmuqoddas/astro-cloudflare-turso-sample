CREATE TABLE `posts_test` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`title` text NOT NULL,
	`content` text,
	`userId` integer NOT NULL,
	CONSTRAINT `fk_posts_test_userId_users_test_id_fk` FOREIGN KEY (`userId`) REFERENCES `users_test`(`id`)
);
--> statement-breakpoint
ALTER TABLE `users_test` DROP COLUMN `age`;