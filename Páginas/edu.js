document.addEventListener("DOMContentLoaded", function() {
    const botaoCadastrar = document.querySelector('.btn-acessar');

    if (botaoCadastrar) {
        botaoCadastrar.addEventListener('click', function() {
            const radioProfessor = document.getElementById('professor');
            const radioAluno = document.getElementById('aluno');

            if (radioProfessor && radioProfessor.checked) {
                window.location.href = 'AreaDoProfesssor.html';
            } else if (radioAluno && radioAluno.checked) {
                window.location.href = 'AreaDoAluno.html';
            } else {
                alert('Por favor, selecione se você é Aluno ou Professor!');
            }
        });
    }
});















//VLibras 

<script>
  new window.VLibras.Widget(
    'https://vlibras.gov.br/app',
    'https://vlibras.gov.br/config/default_logo.json',
    'random',
    'R'
  );
</script>