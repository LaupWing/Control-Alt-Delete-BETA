# Control Alt Delete project
De applicatie is met behulp van Vue gemaakt. 

## Installatie
Om de applicatie te starten dien je eerst het project te downloaden. 

Voorheen maakten we gebruik van een database daarom zit de applicatie files in de client map en database files in de server map.
Hierdoor is het ook vereist om de npm install command in beide mappen uit te voeren één keer in de root map en één keer in de client map.

Dit is natuurlijk 100% onnodig, maar omdat ik te weinig tijd had om helemaal van scratch een nieuwe project te maken heb ik gewoon gewerkt in dezelfde folder. 

```bash
# root folder
npm install 

# client folder root/client
npm install

```

## Starten van de appicatie(pre-production)
In de client folder kan je applicatie starten.
```bash
#in de client folder
npm run serve

#ctrl + click op de localhost:8080 om de applicatie op een lokale server te starten
```

## Applicatie voor productie preppen
Deze stap is volkomen nutteloos, omdat er geen gebruik gemaakt word van een database door onze nieuwe applicatie. Maar zoals ik al in het begin heb aangegeven, had ik te weinig tijd om vanaf een scratch te beginnen heb ik het maar zo gedaan. 
```bash
#in de client folder
npm run build
```
Na het uitvoeren van de build command worden de client files in gebundeld en vervolgens komen de files in de public folder terecht en is de applicatie klaar voor productie! 