$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nounInput = $("input#noun").val();
    const foodInput = $("input#food").val();
    const colourInput = $("input#colour").val();
    const adjectiveInput = $("input#adjective").val();
    const noun1Input = $("input#noun1").val();
    const animalInput= $("input#animal").val();
    const animal1Input= $("input#animal1").val();
    const verbInput = $("input#verb").val();
    const personInput = $("input#person").val();
    const person1Input = $("input#person1").val();

    $(".noun").text(nounInput);
    $(".food").text(foodInput);
    $(".colour").text(colourInput);
    $(".adjective").text(adjectiveInput);
    $(".noun1").text(noun1Input);
    $(".animal").text(animalInput);
    $(".animal1").text(animal1Input);
    $(".verb").text(verbInput);
    $(".person").text(personInput);
    $(".person1").text(person1Input);

    $("#story").show();
  });
});