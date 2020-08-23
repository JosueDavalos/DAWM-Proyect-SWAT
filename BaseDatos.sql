create database gpa;
use gpa;

select * from gpa_animal;
select * from auth_user;
select * from gpa_adopcion;
select * from gpa_persona;
select * from gpa_FormularioPonerAdopcion;
select * from gpa_ubicacion;
 
SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS=0;
delete from auth_user;
delete from gpa_persona;
delete from gpa_animal;