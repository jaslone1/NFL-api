$(() => {
  $('form').on('submit', event=>{
      event.preventDefault();



      $('.header').hide();
      const userInput = $('input[type="text"]').val()



    $.ajax({
  	   url: 'https://api.collegefootballdata.com/stats/game/advanced?year=2020&team=' + userInput
    }).then(
      (data)=>{
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].offense.explosiveness);
          $(".results").append("<tr><td>" + data[i].offense.explosiveness + "</td><td>" + data[i].offense.ppa + "</td></tr>")
        }
    })
  })
})
