        var link = document.querySelector(".user-list__link--js");
        var popup = document.querySelector(".modal-login");
        var close = popup.querySelector(".modal-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");

        var isStorageSupport = true;
        var storage = "";

        
        
        
        try {
            storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        }

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();

                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });



        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            login.focus();
            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
           if (!login.value || !password.value) {
            evt.preventDefault();
            popup.classList.add("modal-error");
           } else {
               if (isStorageSupport) {
                localStorage.setItem("login", login.value);
               }
           }

        });