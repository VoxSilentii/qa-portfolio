# Практика перехвата и анализа трафика (Fiddler)

В рамках изучения инструментов тестирования я освоил перехват и анализ HTTP/HTTPS трафика с помощью Fiddler.

## Что было сделано:
1. Настроил Fiddler для перехвата HTTPS-трафика (включил расшифровку).
2. Перехватил GET-запрос к публичному API (`jsonplaceholder.typicode.com/posts/1`).
3. Проанализировал структуру запроса (метод GET, заголовки).
4. Проанализировал ответ сервера (статус-код 200, формат JSON, тело ответа).

## Результаты проверки:

**1. Перехват запроса в Fiddler (Список запросов):**

<img width="1234" height="92" alt="fiddler-traffic" src="https://github.com/user-attachments/assets/05371586-1f63-48d4-af07-2752017d947a" />


**2. Анализ ответа сервера (JSON):**

<img width="1300" height="136" alt="fiddler-analyze" src="https://github.com/user-attachments/assets/6a69a699-f1d3-4856-bcf1-f89165f779ca" />
