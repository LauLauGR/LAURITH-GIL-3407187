// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "App de Guías Turísticas Virtuales";

const rawTourName = "  Caminata en Marte  ";

const tourType = "Tour VR (Realidad Virtual)";

const tourCategory = "Aventura Espacial";

const tourCode = "TOUR-001";

const tourDescription = "Acompañanos en una caminata virtual por la superficie de Marte, guiada por expertos en exploración espacial. Descubre los secretos del planeta rojo y vive una experiencia única desde la comodidad de tu hogar.";

const tourPrice = 25_000;

const isAvailable = true;

// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
const tourName = rawTourName.trim();

// TODO: Obtén el nombre en mayúsculas para el encabezado
const tourNameUpper = tourName.toUpperCase();

// TODO: Obtén el nombre en minúsculas para el código
const tourNameLower = tourName.toLowerCase();

// TODO: Extrae las primeras letras del código con slice()
// para usarlas como prefijo de referencia
const codePrefix = tourCode.slice(0, 4);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
// Usa startsWith() con el prefijo que definiste
const hasValidPrefix = tourCode.startsWith(codePrefix);

// TODO: Verifica si la descripción contiene una palabra clave
// Usa includes() con una palabra importante de tu dominio
const descriptionIsRelevant = tourDescription.includes("guiada", "virtual");

// TODO: Verifica si el código termina con los dígitos
// Usa endsWith() con algo coherente de tu dominio
const hasValidSuffix = tourCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(60);
const subSeparator = "-".repeat(60);

// TODO: Construye la ficha multilínea usando template literals
// Usa TODAS las variables transformadas arriba
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE TOUR
${separator}
Nombre:      ${tourNameUpper}
Tipo:        ${tourType}
Categoría:   ${tourCategory}
Código:      ${tourCode}
Prefijo:     ${codePrefix}
Valor:       ${tourPrice}
Estado:      ${isAvailable ? "Disponible" : "No disponible"}

${subSeparator}
Descripción:
${tourDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'guiada' o 'virtual'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// TODO: Construye un mensaje corto de una línea
// Usa template literal con el nombre limpio y el código
const notification = `📢 Nuevo tour disponible: ${tourName} (${tourCode})`;
console.log(notification);
console.log("");