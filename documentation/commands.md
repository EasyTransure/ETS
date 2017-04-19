# Commandes utiles

## Lancer l'application dans un navigateur
`ionic serve`

## Lancer les tests
`npm test`

## Deploiement
### Dans un émulateur
La première fois : 
`ionic platform add android` 
Et sur mac : 
`ionic platform add ios`

A chaque nouveau déploiement :
`ionic build ou cordova build`

### Pour executer le test coverage
`npm run test:coverage`

### Sur le téléphone android
A chaque nouveau déploiement : `cordova run android`
