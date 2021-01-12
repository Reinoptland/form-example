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

Wat we gebruiken: HookForm

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
  - [x] Wanneer is het geldig & Een foutmelding (feedback)
    - name:
      - [x] required (je moet het invullen)
      - [x] ten minste 3 karakters
      - [x] alleen abcd etc.. geen ~/@,
    - email
      - [x] Er moet @ (het moet een email zijn)
    - comment
    - postId

## De input uit het formulier halen en wegsturen (naar een api / backend)

Wat we gebruiken: Axios

- [x] npm install axios
- [x] import axios
- [x] async function
- [x] axios.post() -> hoe moeten we dat configureren
  - url
  - data
- [x] Response checken, is het gelukt

## Feedback geven: het is gelukt

- [x] Bijhouden of de info verstuurd is
- [x] Feedback geven aan de gebruiker

## Herschrijven van je Code -> Refactoring

Herbruikbaar Error Component Maken

- [x] Bestandje aanmaken
- [x] De juiste imports gebruiken
- [x] De code die je wil hergebruiken moet je in het bestandje zetten
- [x] De code die je weghaalt, moet vervangen voor het component wat je schrijft

Veralgemeniseren (abstracting)

- [x] Waarschijnlijk moet je props doorgeven aan je component
- [x] Content gehardcode is (altijd hetzelfde is) moet je afhankelijk maken van een prop
