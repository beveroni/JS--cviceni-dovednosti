const updateSkill = (id, uroven) => {
  const postup = document.querySelector(`#${id} .skill__progress`);
  const hodnota = document.querySelector(`#${id} .skill__value`);
  hodnota.textContent = `${uroven} / 100`;
  postup.style.width = `${uroven}%`;
};

const html = Number(prompt('Jaká je vaše úroveň HTML? (0 až 100)'));
const css = Number(prompt('Jaká je vaše úroveň CSS? (0 až 100)'));
const js = Number(prompt('Jaká je vaše úroveň JavaScriptu? (0 až 100)'));

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', js);
