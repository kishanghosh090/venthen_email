ALTER TABLE "users" DROP CONSTRAINT "users_nameName_key";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "userName" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "nameName";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "phoneNumber" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_userName_key" UNIQUE("userName");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_key" UNIQUE("email");