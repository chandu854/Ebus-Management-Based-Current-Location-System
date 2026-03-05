export function logAction(action, detail) {
  console.log(`[${new Date().toISOString()}] ${action} - ${detail}`);
}