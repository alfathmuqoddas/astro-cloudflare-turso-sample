CREATE TABLE `comments_test` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`content` text NOT NULL,
	`postId` integer NOT NULL,
	CONSTRAINT `fk_comments_test_postId_posts_test_id_fk` FOREIGN KEY (`postId`) REFERENCES `posts_test`(`id`)
);
