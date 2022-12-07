# School Database Schema

## Tables

- [x] users
- [x] students
- [x] parents
- [x] employees
- [x] classes
- [x] sections
- [x] class_teachers
- [x] subjects
- [x] Syllabus
- [x] class_relations
- [x] categories
- [x] houses
- [x] reasons
- [x] disable_students
- [x] departments
- [x] designations
- [x] hostels
- [x] hostel_rooms
- [x] hostel_members
- [x] books
- [x] library_members
- [x] book_issues
- [x] sessions
- [x] events
- [x] faqs
- [x] exams
- [x] exam_for_classes
- [x] teacher_feedbacks
- [x] homeworks
- [x] homework_evaluations
- [x] notices
- [x] student_board_exams
- [x] income_heads

## User

    id                      UUID,
    name                    VARCHAR,
    phone                   VARCHAR,
    email                   VARCHAR,
    photo                   VARCHAR,
    password                VARCHAR,
    role                    VARCHAR, -- [SupAdmin,Admin,Teac,stud,Parent,Accou,Libra,Recep,Mode]
    status                  VARCHAR,

    employee_id             INTEGER,
    student_id              INTEGER,
    parent_id               INTEGER,

## Students

    id                      UUID,
    name                    VARCHAR,
    email                   VARCHAR,
    id_card_no              VARCHAR,
    registration_no         VARCHAR,
    roll_no                 VARCHAR,
    dob                     DATE,
    "group"                 VARCHAR,  --Science,arts,cmrs
    shift                   VARCHAR,  --Morning,day,evening,none
    present_address         VARCHAR,
    permanent_address       VARCHAR,
    gender                  VARCHAR,
    blood_group             VARCHAR,
    religion                VARCHAR,
    nationality             VARCHAR,
    phone                   VARCHAR,
    photo                   VARCHAR,
    ext_curri_actives       VARCHAR,
    height                  VARCHAR,
    weight                  VARCHAR,
    status                  VARCHAR,   -- active,inactive
    remarks                 VARCHAR,
    admission_date          DATE,

    parent_id               INTEGER,
    class_id                INTEGER,
    section_id              INTEGER,
    subject_id              INTEGER,  --optional subject nite hbe
    category_id             INTEGER,
    house_id                INTEGER,
