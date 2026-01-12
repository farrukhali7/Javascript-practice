function countdown() {
      const birthday = new Date("2026-05-15T00:00:00"); 
      const now = new Date();
      const diff = birthday - now;

      if (diff <= 0) {
        birthdayWish();
        return;
      }

      const daysValue = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursValue = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesValue = Math.floor((diff / (1000 * 60)) % 60);
      const secondsValue = Math.floor((diff / 1000) % 60);
      
      document.getElementById("d-num").textContent = daysValue;
      document.getElementById("h-num").textContent = hoursValue;
      document.getElementById("m-num").textContent = minutesValue;
      document.getElementById("s-num").textContent = secondsValue;
    }

    countdown();

    setInterval(countdown, 1000);

    function birthdayWish() {
      document.getElementById("countdown").textContent = "Happppyyyyy Birthdayyyyyy!";
    }
