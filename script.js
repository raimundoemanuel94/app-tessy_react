// Função para gerar opções de horários
function gerarOpcoesHora() {
  let opcoes = "<option value=''>Selecione a Hora</option>";
  for (let hora = 8; hora <= 18; hora++) {
    const horaStr = hora.toString().padStart(2, '0') + ':00';
    opcoes += `<option value="${horaStr}">${horaStr}</option>`;
  }
  return opcoes;
}

// Mostra campo de horário só após escolher a data
const dataInput = document.getElementById('data');
const horaDiv = document.getElementById('horaDiv');
const horaInput = document.getElementById('hora');

if(dataInput){
  dataInput.addEventListener('change', function() {
    if (this.value) {
      horaDiv.style.display = 'block';
      horaInput.innerHTML = gerarOpcoesHora();
      // Seta o atributo required apenas após mostrar
      horaInput.required = true;
    } else {
      horaDiv.style.display = 'none';
      horaInput.innerHTML = "";
      horaInput.required = false;
    }
  });
}

// Mantém a rotina do submit
const formAg = document.getElementById('form-agendamento');
if(formAg){
  formAg.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Agendamento enviado com sucesso!');
    this.reset();
    horaDiv.style.display = 'none';
    horaInput.innerHTML = "";
    horaInput.required = false;
  });
}
