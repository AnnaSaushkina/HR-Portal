**Инструкция по линтингу HTML (шаг за шагом):**

---

### 🔧 **Шаг 1: Установи инструменты**  
```bash
# 1. Инициализируй проект (если ещё нет)
npm init -y

# 2. Установи линтеры и Prettier
npm install htmlhint eslint prettier eslint-plugin-html --save-dev
```

---

### ⚙️ **Шаг 2: Настрой конфиги**  
#### **.htmlhintrc** (проверка HTML)  
```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "id-unique": true,
  "src-not-empty": true,
  "alt-required": true,
  "doctype-first": true,
  "indentation": 2,
  "tag-pair": true
}
```

#### **.prettierrc** (форматирование)  
```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": false,
  "trailingComma": "none",
  "bracketSameLine": true
}
```

#### **.eslintrc.json** (проверка JS внутри HTML)  
```json
{
  "plugins": ["html"],
  "rules": {
    "no-console": "warn",
    "semi": ["error", "always"]
  }
}
```

---

### 🛠️ **Шаг 3: Добавь команды в package.json**  
```json
"scripts": {
  "lint:html": "htmlhint \"**/*.html\"",
  "lint:js": "eslint \"**/*.html\"",
  "format": "prettier --write \"**/*.html\"",
  "lint": "npm run lint:html && npm run lint:js"
}
```

---

### 💻 **Шаг 4: Как использовать**  
- **Проверить код на ошибки:**  
  ```bash
  npm run lint
  ```  
- **Автоматически исправить форматирование:**  
  ```bash
  npm run format
  ```  
- **Запустить валидатор W3C (онлайн):**  
  Загрузи файл на [validator.w3.org](https://validator.w3.org/)  

---

### 🔄 **Шаг 5: Автоматизация в VSCode**  
1. Установи расширения:  
   - [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)  
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  

2. Добавь в настройки VSCode (**Ctrl + ,** → `settings.json`):  
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "htmlhint.enable": true,
  "[html]": {
    "editor.formatOnSave": true
  }
}
```

---

### 🚨 **Что делать, если ошибки?**  
1. **HTMLHint/ESLint покажет проблему в коде:**  
   ```html
   <!-- Плохо: -->
   <IMG SRC="image.png"> 
   
   <!-- Хорошо: -->
   <img src="image.png" alt="Описание">
   ```  
2. **Prettier сам исправит:**  
   - Неверные отступы  
   - Кавычки  
   - Переносы строк  

---

### 💡 **Советы для „красивого“ кода**  
1. **Семантика > дивов:**  
   ```html 
   <!-- Плохо: -->
   <div class="header">...</div>
   
   <!-- Хорошо: -->
   <header>...</header>
   ```  
2. **Доступность:**  
   ```html
   <!-- Всегда добавляй: -->
   <button aria-label="Закрыть меню">×</button>
   ```  
3. **Ленивая загрузка:**  
   ```html
   <img src="image.jpg" loading="lazy" alt="...">
   ```

---
