// アコーディオン
document.addEventListener('DOMContentLoaded', function() {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("accordion__active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              setTimeout(() => {
                  panel.classList.remove("open");
              }, 300); // match the duration of the transition
          } else {
              panel.classList.add("open");
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }
});

// チェックボックス
document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.checkbox-input');

  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          const checkBoxLabel = checkbox.closest('.check-box');
          if (checkbox.checked) {
              checkBoxLabel.classList.add('check-box__checked');
          } else {
              checkBoxLabel.classList.remove('check-box__checked');
          }
      });
  });
});
