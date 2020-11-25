$(() => {
  $('form').on('submit', event=>{
      event.preventDefault();
      $('.newSearch').css('display','inline')
      $('.searchForm').css('display', 'none')
      $(".results").append(
        "<tr><th>" + "opponent" + "</th><th>" + "explosiveness" + "</th><th>" + "ppa" + "</th><th>" + "powersuccess" + "</th><th>" + "secondlevel" + "</th></tr>")



      $('.header').hide();
      const userInput = $('input[type="text"]').val()



    $.ajax({
  	   url: 'https://api.collegefootballdata.com/stats/game/advanced?year=2020&team=' + userInput + '&excludeGarbageTime=true'
    }).then(
      (data)=>{
        for (var i = 0; i < data.length; i++) {
          const totalScr = data[i].offense.explosiveness+data[i].offense.secondLevelYards
          $(".results").append(
            "<tr><td>" + data[i].opponent +
            "</td><td>" + data[i].offense.explosiveness +
            "</td><td>" + data[i].offense.ppa +
            "</td><td>" + data[i].offense.powerSuccess+
            "</td><td>" + data[i].offense.secondLevelYards +
            "</td><td>" + totalScr +
            "</td></tr>")
        }
    })
  })
})
