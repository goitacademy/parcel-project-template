const setup = name => {
        const backdrop = document.querySelector(`[data-backdrop-${name}]`);
        const buttons = document.querySelectorAll(
          `[data-toggle-backdrop-${name}]`,
        );
        const toggleBackdrop = () =>
          backdrop.classList.toggle('backdrop--hidden');
        buttons.forEach(button =>
          button.addEventListener('click', toggleBackdrop),
        );
      };
      setup('schedule');
      setup('menu');