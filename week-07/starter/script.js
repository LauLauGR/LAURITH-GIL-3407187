// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: App de guías turísticas virtuales
// ============================================

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes del dominio
const DOMAIN_NAME = "App de Guías Turísticas Virtuales";
const VALUE_LABEL = "calificación"; // valor numérico del guía

// Array de guías turísticos
const items = [
  { id: 1, name: "Carlos Pérez", category: "cultural", value: 4.7, active: true },
  { id: 2, name: "Laura Gómez", category: "aventura", value: 4.2, active: true },
  { id: 3, name: "Andrés Ruiz", category: "gastronómico", value: 4.9, active: false },
  { id: 4, name: "Sofía Torres", category: "cultural", value: 3.8, active: true },
  { id: 5, name: "Miguel Herrera", category: "aventura", value: 4.5, active: false }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// Formatea la información de un guía turístico
const formatItem = (item) => {
  return `🧭 ${item.name} [${item.category}] — ⭐ ${item.value} — ${item.active ? "Activo" : "Inactivo"}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula un valor basado en la calificación (por ejemplo, ponderación)
const calculateValue = (baseValue, factor = 1) => {
  return +(baseValue * factor).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un guía es válido si está activo
const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea un valor con etiqueta y moneda opcional
const formatWithDefault = (value, label = VALUE_LABEL, symbol = "") => {
  return symbol
    ? `${label}: ${symbol}${value}`
    : `${label}: ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Guías activos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }

  const averageValue = items.length > 0
    ? (totalValue / items.length).toFixed(2)
    : 0;

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
  console.log(formatWithDefault(averageValue, `Promedio ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);