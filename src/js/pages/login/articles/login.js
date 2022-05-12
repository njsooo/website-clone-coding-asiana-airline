initChangeActionType();
initChangeLoginMethod();

function initChangeActionType() {
  const $liLogin = $("#login .container .action-type .login");
  const $liReservationCheck = $("#login .container .action-type .reservation-check");

  const $loginArea = $("#login .container .login-area");
  const $reservationCheckArea = $("#login .container .reservation-check-area");

  $liLogin.on("click", () => {
    $liReservationCheck.removeClass("on");
    $liLogin.addClass("on");

    $reservationCheckArea.removeClass("on");
    $loginArea.addClass("on");
  });

  $liReservationCheck.on("click", () => {
    $liLogin.removeClass("on");
    $liReservationCheck.addClass("on");

    $loginArea.removeClass("on");
    $reservationCheckArea.addClass("on");
  });
}

function initChangeLoginMethod() {
  const $radioIdLogin = $("#login .container .login-area form .login-method .id-login");
  const $radioMemberShipNumberLogin = $(
    "#login .container .login-area form .login-method .membership-number-login"
  );

  const $inputId = $("#login .container .login-area form .input-id");
  const $spanInCheckboxSaveId = $("#login .container .login-area form .checkbox-save-id .text");

  $radioIdLogin.on("click", () => {
    $inputId.attr("placeholder", "아이디 입력");
    $spanInCheckboxSaveId.text("아이디 저장");
  });

  $radioMemberShipNumberLogin.on("click", () => {
    $inputId.attr("placeholder", "회원번호 입력");
    $spanInCheckboxSaveId.text("회원번호 저장");
  });
}
