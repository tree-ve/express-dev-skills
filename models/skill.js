const skills = [
  {id: 125223, skill: 'Programming', good: false},
  {id: 127904, skill: 'Guitar', good: true},
  {id: 139608, skill: 'Existing', good: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};
  
function update(id, updatedskill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedskill);
}
  
function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
  
function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}