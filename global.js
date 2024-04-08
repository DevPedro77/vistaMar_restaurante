$(document).ready(function(){
  $('#botaozao').click(function(e) {
    e.preventDefault(); // Evita o comportamento padrão do botão

    // Coloque aqui o código que você deseja executar quando o botão é clicado, como enviar os dados do formulário via AJAX

    // Limpar os valores dos campos do formulário
    $('#formulario')[0].reset(); // Isso irá limpar todos os campos do formulário

    console.log("Botão de envio clicado e campos limpos");
});



  $('#nome').keyup(function() {
    const nome = $(this).val();
    const novoNome = nome.replace(/[^a-zA-Z\s]/g, '');
    $(this).val(novoNome);
  });
  
  $('#telefone').mask('(00)0000-0000');

  $('#email').mask(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});
