const awilix = require('awilix')
import { Version } from 'graph-navigation-js'
import SessionClientImpl from './SessionClientImpl';

const sessionClientInstance = new SessionClientImpl();

// Define una función de fábrica personalizada
function createMobileVersionWithSessionClient() {
  return new Version(sessionClientInstance);
}

function createDesktopVersionWithSessionClient() {
  return new Version(sessionClientInstance);
}

function createAndroidMobileVersionWithSessionClient() {
  return new Version(sessionClientInstance);
}

// Crea el contenedor de dependencias
const container = awilix.createContainer();

// Registra la función de fábrica personalizada con inyección de la instancia de SessionClient
container.register({
  mobileVersion: awilix.asFunction(createMobileVersionWithSessionClient).singleton(),
  desktopVersion: awilix.asFunction(createDesktopVersionWithSessionClient).singleton(),
  androidMobile: awilix.asFunction(createAndroidMobileVersionWithSessionClient).singleton()
});

export default container;
