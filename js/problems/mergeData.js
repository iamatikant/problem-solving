/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
function mergeData(sessions) {
  const map = new Map();
  for (let person of sessions) {
    const { user, duration, equipment } = person;
    if (map.has(user)) {
      let details = map.get(user);
      const currDuration = details.duration + duration;
      const currEquipment = [
        ...new Set([...details.equipment, ...equipment]),
      ].sort();
      map.set(user, {
        ...details,
        duration: currDuration,
        equipment: currEquipment,
      });
    } else {
      map.set(user, {
        user: user,
        duration: duration,
        equipment: [...equipment],
      });
    }
  }
  return Array.from(map.values());
}

const sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

console.log(mergeData(sessions));
