-- public."Persons" definition

-- Drop table

-- DROP TABLE public."Persons";

CREATE TABLE public."Persons" (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	phone int4 NULL,
	email varchar(255) NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Persons_email_key" UNIQUE (email),
	CONSTRAINT "Persons_phone_key" UNIQUE (phone),
	CONSTRAINT "Persons_pkey" PRIMARY KEY (id)
);

INSERT INTO public."Persons" ("name",phone,email,"createdAt","updatedAt") VALUES
	 ('Ignacio Martinez',26135555,'ignacio.martinez@inpulsedm.com','2023-10-27 04:32:05.383-03','2023-10-27 04:32:05.383-03'),
	 ('Enzo Saravia',519078999,'enzo.saravia@hotmail.com','2023-10-27 04:34:28.141-03','2023-10-27 04:34:28.141-03'),
	 ('Martin Quiroga',987045678,'martinquiroga10@outlook.es','2023-10-27 04:35:41.7-03','2023-10-27 04:35:41.7-03'),
	 ('Mauro Rodriguez',387523145,'maurorodriguez@gmail.com','2023-10-27 04:38:30.038-03','2023-10-27 04:38:30.038-03'),
	 ('Julian Soriano',997856311,'juliansoriano@mail.com','2023-10-27 05:15:54.717-03','2023-10-27 05:15:54.717-03'),
	 ('Gabriel Copa',345789001,'gabrielcopa@gmail.com','2023-10-27 06:25:35.879-03','2023-10-27 06:25:35.879-03'),
	 ('Javier Castro',89765432,'javiercastro@mail.com','2023-10-27 06:25:56.191-03','2023-10-27 06:25:56.191-03'),
	 ('Camila Rodriguez',995432199,'camilarodriguez@mail.to','2023-10-27 06:26:25.38-03','2023-10-27 06:26:25.38-03'),
	 ('Facundo Saravia',556789124,'facundo_saravia@outlook.es','2023-10-27 06:26:57.732-03','2023-10-27 06:26:57.732-03'),
	 ('Ivana Puyol',775438711,'ivana.puyol@hotmail.com','2023-10-27 06:27:43.857-03','2023-10-27 06:27:43.857-03');
INSERT INTO public."Persons" ("name",phone,email,"createdAt","updatedAt") VALUES
	 ('Yamila Lopez',236789017,'yamilalopez@gmail.com','2023-10-27 06:28:23.055-03','2023-10-27 06:28:23.055-03');
