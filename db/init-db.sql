CREATE TABLE carstable(
    carid serial unique primary key,
    name character varying(20) not null,
    year character varying(200) not null
);

ALTER TABLE carstable
    OWNER TO schenker;

alter role schenker connection limit -1;

insert into carstable(name,year)
values('volvo','1980');
insert into carstable(name,year)
values('mercerdes','1999');
insert into carstable(name,year)
values('kia','1966');
insert into carstable(name,year)
values('Honda','1956');
