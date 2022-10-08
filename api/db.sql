create table user (
  id int primary key auto_increment,
  username varchar(50), 
  email varchar(50) unique,
  pass varchar(16),
  img varchar(255)
);
alter table 'blog'.'user' rename to 'blog'.'users';

create table posts (
  id int primary key auto_increment,
  title varchar(255),
  descc text,
  img varchar(255),
  datee datetime,
  uidd int,
  index 'uid_idx' ('uid', ASC) visible,
  foreign key (uid) references users(id)
);
alter table posts drop foreign key posts_ibfk_1;

ALTER TABLE posts
ADD CONSTRAINT FK_posts_users
FOREIGN KEY (uidd) REFERENCES users(id);