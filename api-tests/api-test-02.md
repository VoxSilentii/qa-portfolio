# API-тест №2: POST-запрос к jsonplaceholder

## Цель

Проверить, что API создаёт новую запись по POST-запросу.

## Инструмент

Postman

## Запрос

- Метод: POST
- URL: https://jsonplaceholder.typicode.com/posts
- Body (raw JSON):

```json
{
  "title": "test",
  "body": "hello",
  "userId": 1
}
```

## Ожидаемый результат

- Status: 201 Created
- Content-Type: application/json
- Body: JSON с полями title, body, userId, id

## Фактический результат
- Status: 201 Created
- Content-Type: application/json
- Body:
  
```json
{
  "title": "test",
  "body": "hello",
  "userId": 1,
  "id": 101
}
```
## Вывод

API корректно создаёт запись. Возвращает 201 Created и данные с новым id.
## Скриншот
<img width="800" height="310" alt="image" src="https://github.com/user-attachments/assets/fd36069e-2b32-4317-a58e-47d0024983ac" />
