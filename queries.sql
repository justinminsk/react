CREATE VIEW Hitters AS
SELECT playerID
FROM Batting
GROUP BY playerID
HAVING sum(AB) >= 4000;

CREATE VIEW HOFHitters AS
SELECT hf.playerID
FROM HallOfFame AS hf INNER JOIN Hitters as h
ON hf.playerID = h.playerID
WHERE inducted='Y';

SELECT b.playerID, nameFirst, nameLast, yearID, HR
FROM (Batting AS b INNER JOIN HOFHitters AS hf
ON b.playerID = hf.playerID) INNER JOIN Master
ON b.playerID = Master.playerID;
