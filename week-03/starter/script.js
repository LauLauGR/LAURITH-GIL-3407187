// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

// - App de guías turísticas virtuales    → calcular presupuesto de recorridos personalizados
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const VIRTUAL_TICKET_PRICE = 15_000;   // Precio virtual
const PREMIUM_SURCHARGE = 5_000;    // Recargo por mejor calidad
const MAX_CAPACITY = 20;     // Capacidad máxima de usuarios por guía
const PREMIUM_CUSTOMER_DISCOUNT = 0.30; // Descuento para clientes premium
const FIRST_BOOKING_BONUS = 2_000; // Bono de primera reserva

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Variables para cálculos
let assistants = 12;

// Calcular el costo total de un paquete virtual individual completo
const fullPackageCost = VIRTUAL_TICKET_PRICE + PREMIUM_SURCHARGE;
console.log("Costo del paquete 'Full Experience' por persona:", fullPackageCost);

//Aplicar el descuento del 30% si el cliente es Premium
const discountValue = fullPackageCost * PREMIUM_CUSTOMER_DISCOUNT;
const finalPriceWithDiscount = fullPackageCost - discountValue;
console.log("Precio final para cliente Premium (con 30% de descuento):", finalPriceWithDiscount);

// Calcular cupos restantes para la guía
const availablePlaces = MAX_CAPACITY - assistants;
console.log("Cupos todavía disponibles para el tour:", availablePlaces);

// Ingresos totales si la sala estuviera llena
const maximumPotentialIncome = MAX_CAPACITY * VIRTUAL_TICKET_PRICE;
console.log("Ingresos máximos por tickets básicos si la sala se llena:", maximumPotentialIncome);

// Calcular el porcentaje de ocupación actual de la sala
const occupationPercentage = (assistants / MAX_CAPACITY) * 100;
console.log("Porcentaje de ocupación de la guía en vivo:", occupationPercentage + "%");

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Proceso de una reserva
let checkoutTotal = 0;
console.log("Total inicial de la reserva:", checkoutTotal);

checkoutTotal += VIRTUAL_TICKET_PRICE;
console.log("Total tras añadir ticket virtual:", checkoutTotal);

checkoutTotal += PREMIUM_SURCHARGE;
console.log("Total tras añadir calidad Premium:", checkoutTotal);

checkoutTotal -= FIRST_BOOKING_BONUS;
console.log("Total tras aplicar bono de bienvenida (-2000):", checkoutTotal);

checkoutTotal *= (1 - PREMIUM_CUSTOMER_DISCOUNT);
console.log("Total tras aplicar beneficio de Cliente Premium (30% off):", checkoutTotal);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificación de Cupo Agotado (máximo 20 asistentes)
const isTourFull = assistants === MAX_CAPACITY;
console.log("¿El tour virtual está totalmente lleno?:", isTourFull);

// Verificación de Disponibilidad de Cupos (menor a 20 asistentes)
const canJoinMorePeople = assistants < MAX_CAPACITY;
console.log("¿Hay cupos disponibles para nuevos turistas?:", canJoinMorePeople);

// Validación de "Grupo Grande" (10 o más asistentes)
const isLargeGroup = assistants >= 10;
console.log("¿La sesión actual se considera un grupo grande?:", isLargeGroup);

// Validación de "Precio Económico" (menor o igual a 12.000)
const isBudgetFriendly = finalPriceWithDiscount <= 12_000;
console.log("¿El precio final es apto para presupuesto bajo?:", isBudgetFriendly);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const applyExtraBonus = isLargeGroup && isBudgetFriendly;
console.log("¿Aplica bono extra por grupo masivo económico?:", applyExtraBonus);

const prioritySupport = isTourFull || isLargeGroup;
console.log("¿Esta sesión requiere soporte técnico prioritario?:", prioritySupport);

const isSoldOut = !canJoinMorePeople;
console.log("¿La sala se encuentra agotada?:", isSoldOut);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log(`> Ocupación Actual: ${assistants} / ${MAX_CAPACITY} turistas.`);
console.log(`> Precio Final (con beneficios): $${finalPriceWithDiscount} COP`);
console.log(`> Estado de la Sala: ${isTourFull ? "AGOTADA" : "DISPONIBLE"}`);
console.log(`> Ingresos Proyectados (Sala Llena): $${maximumPotentialIncome} COP`);
console.log(`> Porcentaje de Llenado: ${occupationPercentage.toFixed(2)}%`);

console.log("--------------------------------------------");
console.log("Calculadora GuideApp - Operación Finalizada");

console.log("");