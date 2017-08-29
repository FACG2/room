BEGIN;

DROP TABLE IF EXISTS messages comments CASCADE;


CREATE TABLE messages(
id SERIAL PRIMARY KEY,
username VARCHAR(100) NOT NULL,
context TEXT NOT NULL,
date TIMESTAMP DEFAULT now()
);

insert into messages (username,context) values ('Sami','Hello world1');
insert into messages (username,context) values ('Ahmed','Hello world2');
insert into messages (username,context) values ('Mohammed','Hello world3');

COMMIT;
