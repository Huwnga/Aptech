drop table if exists exam_attendance;
drop table if exists students;
drop table if exists exams;
drop table if exists schedulers;

create table students (
  roll_no varchar(20) primary key,
  full_name varchar(50),
  class_name varchar(20)
);

create table exams
(
    id          integer primary key auto_increment,
    name        varchar(100),
    duration    integer,
    description varchar(300),
    created_at  timestamp,
    updated_at  timestamp
);
create Table exam_attendance
(
    id              integer primary key auto_increment,
    exam_id         integer,
    scheduler_id    integer,
    student_roll_no varchar(20)
);
create Table schedulers
(
    id          integer primary key auto_increment,
    time_slot   varchar(20),
    location    varchar(30),
    exam_sitter varchar(50),
    start_at    timestamp,
    end_at      timestamp
);

alter table  exam_attendance
    ADD CONSTRAINT exam_attendance_fk
    FOREIGN KEY (exam_id) REFERENCES exams(id);
alter table  exam_attendance
    ADD CONSTRAINT schedulers_fk
        FOREIGN KEY (scheduler_id) REFERENCES schedulers(id);
alter table  exam_attendance
    ADD CONSTRAINT students_fk
        FOREIGN KEY (student_roll_no) REFERENCES students(roll_no);
        
INSERT INTO exams (id, name, duration, description, created_at, updated_at) VALUES (7, 'Application Development Fundamentals-I Exam', 90, 'examination of Application Development Fundamentals-I                        ', '2023-08-08 15:05:12', '2023-08-08 15:05:12');
INSERT INTO exams (id, name, duration, description, created_at, updated_at) VALUES (8, 'MongoDB', 60, 'Examination of NoSQL - MongoDB                        ', '2023-08-08 15:05:37', '2023-08-08 15:05:37');


