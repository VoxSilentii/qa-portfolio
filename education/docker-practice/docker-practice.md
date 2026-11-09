# Практика работы с Docker

В рамках изучения Docker я развернул локальное тестовое окружение с веб-сервером Nginx для проверки сетевых запросов.

## Что было сделано:
1. Скачал образ Nginx (`docker pull nginx`).
2. Запустил контейнер в фоне с пробросом портов (`docker run -d -p 8080:80 nginx`).
3. Проверил работу сервера в браузере по адресу `http://localhost:8080`.
4. С помощью DevTools (вкладка Network) проанализировал статус-коды ответов (200 и 404).
5. Просмотрел логи контейнера через `docker logs`.
6. Остановил и удалил контейнер (`docker stop`, `docker rm`).

## Результаты проверки (DevTools):

**1. Позитивный сценарий: главная страница (Статус 200 OK)**
При запросе к `http://localhost:8080` сервер успешно отвечает и отдает страницу. В DevTools виден статус-код 200.

<img width="644" height="86" alt="docker-nginx-start" src="https://github.com/user-attachments/assets/624288cc-d4d2-488d-963d-34f9a20aba64" />
<img width="711" height="201" alt="docker-nginx-200" src="https://github.com/user-attachments/assets/d75405fd-6033-4c7e-958d-81ef11c68f5b" />


**2. Негативный сценарий: несуществующая страница (Статус 404 Not Found)**
При запросе к несуществующему файлу (например, `favicon.ico`) сервер корректно возвращает ошибку 404.

<img width="769" height="212" alt="docker-nginx-400" src="https://github.com/user-attachments/assets/c92e370c-b0d8-4ae5-acba-5ada875e0668" />

**3. Анализ логов контейнера:**
В логах видно, как Nginx запустился и обработал запросы. Также зафиксирована ошибка отсутствия файла `favicon.ico` (404).

<img width="2295" height="1145" alt="docker-nginx-logs" src="https://github.com/user-attachments/assets/92b317c3-3c2c-4ee3-b633-1cd547a4ec64" />

**4. Управление контейнером (остановка и удаление):**
Проверил статус контейнера (`docker ps`), остановил его (`docker stop`), убедился, что он завершился (`docker ps -a`), и удалил (`docker rm`).

<img width="1311" height="305" alt="docker-nginx-delete" src="https://github.com/user-attachments/assets/ed2979bf-d94e-4a08-ba1f-6394c8b78949" />

