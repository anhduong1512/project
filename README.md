# project
```sql
CREATE TABLE materials (
	name TEXT,
	c REAL,
	t_plavl REAL,
	t_kip REAL
);
```

```sql
INSERT INTO materials
(name, c, t_plavl, t_kip)
VALUES('Вода', 1, 0+273, 100+273);
```
```JSON
 {[
 {"name": "Вода",  "c":1,  "t_plavl":0,  "t_kip":100},
 {"name": "Вода2",  "c":1,  "t_plavl":0,  "t_kip":100},
 {"name": "Вода3",  "c":1,  "t_plavl":0,  "t_kip":100}  
 ]}
 ```



```sql
SELECT name, c, t_plavl, t_kip
FROM materials;
```
```sql
SELECT name, c, t_plavl, t_kip
FROM materials
WHERE name LIKE "Вод%";
```
