# API-тест №3: Проверка HTTP-кодов

## Цель

Проверить, что API возвращает корректные HTTP-коды на разные типы запросов.

## Инструмент

Postman

## Тесты

| № | Запрос | Ожидаемо | Фактически | Вывод |
|---|---|---|---|---|
| 1 | GET /posts/1 | 200 OK | 200 OK | Ок |
| 2 | GET /posts/99999 | 404 Not Found | 404 Not Found | Ок |
| 3 | POST /posts | 201 Created | 201 Created | Ок |
| 4 | PUT /posts/1 | 200 OK | 200 OK | Ок |
| 5 | DELETE /posts/1 | 200 OK | 200 OK | Ок |

## Вывод

API корректно возвращает HTTP-коды на все типы запросов:
- 200 OK — успешный GET, PUT, DELETE
- 201 Created — успешный POST
- 404 Not Found — несуществующий ресурс

## Скриншот
<img width="800" height="312" alt="image" src="https://github.com/user-attachments/assets/5bc55c1b-e78d-41a9-96b3-b2f1dce5ed22" />

<img width="800" height="312" alt="image" src="https://github.com/user-attachments/assets/77b287e0-bf28-4d64-b1dc-ad251771cc61" />

<img width="800" height="312" alt="image" src="https://github.com/user-attachments/assets/3c92af65-3c2b-4d74-abe5-719668b4683d" />

<img width="800" height="312" alt="image" src="https://github.com/user-attachments/assets/c3a34026-b9a1-4ed5-89c1-1edb70e49f7c" />

<img width="800" height="312" alt="image" src="https://github.com/user-attachments/assets/59c27e44-033e-40bf-83eb-776b60d4cb35" />
