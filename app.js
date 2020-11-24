$(() => {
  $('form').on('submit', event=>{
      event.preventDefault();
      $('.newSearch').css('display','inline')
      $('.searchForm').css('display', 'none')
      $(".results").append(
        "<tr><th>" + "opponent" + "</th><th>" + "line yards" + "</th><th>" + "explosiveness" + "</th></tr>")



      $('.header').hide();
      const userInput = $('input[type="text"]').val()



    $.ajax({
  	   url: 'https://api.collegefootballdata.com/stats/game/advanced?year=2020&team=' + userInput
    }).then(
      (data)=>{
        for (var i = 0; i < data.length; i++) {
          $(".results").append(
            "<tr><td>" + data[i].opponent + "</td><td>" + data[i].offense.explosiveness + "</td><td>" + data[i].offense.ppa + "</td></tr>")
        }
    })
  })
})
