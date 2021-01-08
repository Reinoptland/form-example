# Form voorbeeld

## Een formulier maken (comment)

1 comment

```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
}
```

HookForm

Vraag: is er nog meer dan register, handleSubmit, errors?

- Het maken van het formulieren
  - [x] Library installeren: npm install react-hook-form
  - [x] Apart component maken voor het formulier
  - [x] Invoer velden maken
  - [x] Elk invoer veld moet een "name" attribuut hebben
  - [x] Submit knop
  - [x] Importeren useForm
  - [x] Invoer velden registreren
  - [x] handleSubmit ingesteld
- Validatie & Feedback
  - [ ] Wanneer is het geldig & Een foutmelding (feedback)
    - name:
      - [x] required (je moet het invullen)
      - [x] ten minste 3 karakters
      - [x] alleen abcd etc.. geen ~/@,
    - email
      - [x] Er moet @ (het moet een email zijn)
      - [ ] required
    - comment
    - postId

## De input uit het formulier halen en wegsturen (naar een api / backend)

Axios
