  
    document.addEventListener("scroll",()=>{
      const screenPosition = (window.innerHeight)/1.2;//return the height of the screen
      const i = document.querySelector(".second .image")
      const p = document.querySelector(".second div p")
      const i_2 = document.querySelector(".image2")
      const p_2 = document.querySelector(".paragraph2")
      var i_2_position = i_2.getBoundingClientRect().top;
      var p_2_position = p_2.getBoundingClientRect().top;
      var i_position = i.getBoundingClientRect().top;
      var p_position = p.getBoundingClientRect().top;
      //returns the distance of element from top of the screen to the current position of an element
      console.log(p_position,screenPosition)
      if(p_position < screenPosition)
      {
          console.log("got it")
          p.classList.add("secondPAni")
      }
      if(i_position < screenPosition)
      {
          i.classList.add("secondIAni")
      }
      if(i_2_position < screenPosition)
      {
          i_2.classList.add("thirdIAni")
      }
      if(p_2_position < screenPosition)
      {
          p_2.classList.add("thirdPAni")
      }
  })
  
