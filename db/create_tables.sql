CREATE TABLE "public".categories(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
)

CREATE TABLE "public".questions (
    id SERIAL PRIMARY KEY,
    category_id INTERGER NOT NULL REFERENCES categories(id),
    questions TEXT NOT null
);


CREATE TABLE "public".answers (
    id SERIAL PRIMARY KEY,
    question_id INT NOT NULL REFERENCES questions(id),
    answer TEXT NOT NULL
);
