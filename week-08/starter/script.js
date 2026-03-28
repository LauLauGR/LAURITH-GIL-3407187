// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Guías Turísticos Virtuales";
const VALUE_LABEL = "guías";

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 1, name: "Carlos Pérez", category: "cultural", rating: 4.7, active: true, city: "Bogotá", experience: 5 },
  { id: 2, name: "Laura Gómez", category: "aventura", rating: 4.2, active: true, city: "Medellín", experience: 3 },
  { id: 3, name: "Andrés Ruiz", category: "gastronómico", rating: 4.9, active: false, city: "Cartagena", experience: 6 },
  { id: 4, name: "Sofía Torres", category: "cultural", rating: 3.8, active: true, city: "Bogotá", experience: 2 },
  { id: 5, name: "Miguel Herrera", category: "aventura", rating: 4.5, active: false, city: "San Andrés", experience: 4 }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — ⭐ ${item.rating} — ${item.active ? "Activo" : "Inactivo"} — 📍 ${item.city}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo guía
addItem({ id: 6, name: "Camila Rojas", category: "gastronómico", rating: 4.3, active: true, city: "Cali", experience: 3 });

// Agregar guía prioritario
addPriorityItem({ id: 0, name: "Guía Premium", category: "cultural", rating: 5.0, active: true, city: "Bogotá", experience: 10 });

// Eliminar un elemento del medio
removeByIndex(2);

// Eliminar último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar guía por nombre
const found = findByName("Carlos Pérez");
console.log("Resultado búsqueda:", found ? formatItem(found) : "No encontrado");

// Mostrar activos
const activeItems = getActiveItems();
console.log(`Guías activos: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Guía Temporal", category: "aventura", rating: 4.0, active: false, city: "Santa Marta", experience: 1 }];
console.log(`Snapshot (sin modificar original): ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Transformación de calificación (ej: subir 0.2 puntos)
const updatedRatings = items.map(item => ({
  ...item,
  rating: +(item.rating + 0.2).toFixed(1)
}));
console.log("Calificaciones ajustadas:", updatedRatings);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);