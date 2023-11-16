/**
 * Check if the input is valid
 * @param conditions
 * @param input
 */
export const checkConditions = (conditions, input) => {
  const found = conditions.find((condition) => {
    return (!condition.condition(input));
  });
  return found? found.message : "";
};