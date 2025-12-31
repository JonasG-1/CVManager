CREATE SEQUENCE IF NOT EXISTS project_seq START WITH 1 INCREMENT BY 50;

CREATE TABLE project
(
    id          BIGINT NOT NULL,
    name        VARCHAR(255),
    description VARCHAR(255),
    link        VARCHAR(255),
    start_date  date,
    end_date    date,
    CONSTRAINT pk_project PRIMARY KEY (id)
);