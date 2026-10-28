# API-тест №1: GET-запрос к jsonplaceholder

## Цель

Проверить, что API возвращает корректные данные по GET-запросу.

## Инструмент

Postman

## Запрос

- Метод: GET
- URL: https://jsonplaceholder.typicode.com/posts/1

## Ожидаемый результат

- Status: 200 OK
- Content-Type: application/json
- Body: JSON с полями userId, id, title, body

## Фактический результат

- Status: 200 OK
- Content-Type: application/json
- Body:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
## Вывод

API работает корректно. Данные приходят в JSON.

## Скриншот
<img width="800" height="314" alt="image" src="https://github.com/user-attachments/assets/6ce0b851-8009-4a35-be24-09b441bce993" />
