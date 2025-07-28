## Гриды vs Флексы

#### - [Код](./style.css)
#### - [Пример 1](https://cdpn.io/pen/debug/OPyRQMw?authentication_hash=yYryLeGRRZbM)
#### - [Пример 2](https://cdpn.io/pen/debug/MYajoVO?authentication_hash=LDMmdWazzvZk)

**Контекст:** Применение флекс и грид технологий для адаптивной верстки сеток
**Решение:** 
- **Flexbox** — для **одномерных** раскладок (ряд *или* колонка). Когда нужно выровнять/распределить элементы в **одной оси**
- **CSS Grid** — для **сложных двумерных** сеток. Когда нужен контроль и по **вертикали и горизонтали**
- Grid для общего макета → Flex для внутренних компонентов
 

**Когда выбирать Flex:**
- Вертикальное/горизонтальное центрирование
- Навигационные панели
- Простые списки карточек
- Однострочные элементы

---


### 💎 Полезные свойства Grid для работы:

1. **`grid-template-areas`**  
   Визуальное проектирование макетов:
   ```css
   grid-template-areas:
     "header header"
     "sidebar main"
     "footer footer";
   ```

2. **`repeat(auto-fit, minmax())`**  
   Автоматическая адаптивность:
   ```css
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   ```

3. **`fr` единицы**  
   Пропорциональное распределение пространства:
   ```css
   grid-template-columns: 1fr 2fr; /* Соотношение 1:2 */
   ```

4. **`grid-column/grid-row`**  
   Точное позиционирование элементов:
   ```css
   .featured {
     grid-column: span 2; /* Занимает 2 колонки */
     grid-row: 1 / 3;    /* От строки 1 до 3 */
   }
   ```


