
              function showElement(elementId) {
                    const elements = document.querySelectorAll('.element');
                    elements.forEach(element => {
                        element.style.display = 'none';
                    });

                    const selectedElement = document.getElementById(elementId);
                    selectedElement.style.display = 'block';
                }                