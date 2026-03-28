// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Se representa un guía turístico dentro de la app

const elementName = "Carlos Pérez";     // nombre del guía turístico
const elementStatus = "active";         // estado actual ("active", "inactive")
const elementValue = 4.7;               // calificación promedio del guía
const elementType = "cultural";         // tipo de guía
const elementInfo = {                   // información adicional
  detail: "Especialista en recorridos históricos en Bogotá",
  location: "Bogotá",
  experience: 5 // años de experiencia
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasificación del guía según su calificación

let classification = "Sin clasificar";

if (elementValue >= 4.5) {
  classification = "Guía Excelente";
} else if (elementValue >= 3.5) {
  classification = "Guía Bueno";
} else {
  classification = "Guía en formación";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Determina si el guía está activo o no

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// Clasificación según el tipo de guía

let typeLabel = "Sin tipo";

switch (elementType) {
  case "cultural":
    typeLabel = "Guía Cultural";
    break;
  case "aventura":
    typeLabel = "Guía de Aventura";
    break;
  case "gastronomico":
    typeLabel = "Guía Gastronómico";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Valores por defecto si son null o undefined

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Acceso seguro a una propiedad adicional

const safeProperty = elementInfo?.experience ?? "Experiencia no especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional (años de experiencia): ${safeProperty}`);
console.log("=".repeat(40));