
// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "App de guías turísticas virtuales";

const itemName = "Senderos de la Patagonia";

const itemType = "Audio guía";

const itemDuration = 90; // Duración en minutos

const isAvailable = true; // Indica si la guía está disponible para los usuarios

const fixedPrice = null; // Precio fijo (null indica que el precio se determinará según la temporada)

// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("=================================================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("=================================================");
console.log("");

console.log(`Nombre del tour:    ${itemName}`);
console.log(`Tipo de guía:       ${itemType}`);
console.log(`Duración (min):     ${itemDuration}`);
console.log(`Disponible:         ${isAvailable}`);
console.log("");

// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemDuration: ", typeof itemDuration);
console.log("typeof isAvailable:  ", typeof isAvailable);
console.log("");

// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

const durationAsText = String(itemDuration);
console.log("Número como texto:", durationAsText, "minutos");
console.log("typeof (convertido):", typeof durationAsText);
console.log("");

// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Precio fijo:", fixedPrice);
console.log("typeof null:", typeof fixedPrice);
console.log("¿Es null?:", fixedPrice === null);
console.log("");

// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
