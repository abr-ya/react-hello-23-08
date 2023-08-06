# react-hello-23-08
Стартер для проектов на React с TypeScript.
Конфиги линтера-приттиера обновлены, но можно откатить к старым. Тесты на месте.

## О сборке
Cборка Webpack + TypeScript + React, основные инструменты:
- [TypeScript](https://www.typescriptlang.org/docs/),
- [Webpack](https://webpack.js.org/guides/getting-started/),
- [Babel](https://babeljs.io/setup),
- [React](https://ru.react.js.org/docs/getting-started.html),
- [React Router](https://reactrouter.com/en/main),
- [Styled Components](https://styled-components.com/docs),
- [Axios](https://axios-http.com/docs/intro).

для тестов:
- [Jest](https://jestjs.io/docs/getting-started),
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/),
- [Cypress](https://www.cypress.io/).

для соблюдения чистоты кода используются:
- [ESLint](https://eslint.org/),
- [Prettier](https://prettier.io/),
- [Stylelint](https://stylelint.io/user-guide/get-started).

Переменные окружения берутся из файла .ENV (использован [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)).

автоматизация коммитов:
- [Сommitizen](https://commitizen-tools.github.io/commitizen/),
- [Husky](https://typicode.github.io/husky/getting-started.html).


## Основные скрипты (yarn или npm ...)
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint, исправляет ошибки
- format - prettier, исправляет ошибок
- start - запуск дев-сервера, порт 3000
- test - запуск тестов

## Деплой
### Netlify
Для деплоя на сервисе создан файл редиректов (для роутера, если он будет) и скрипт, собирающий переменные окружения в файл. Имена переменных в файле надо задавать вручную!)
