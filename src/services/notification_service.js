async function enviarNotificacao(titulo, body) {
  const notificationToken = "ExponentPushToken[zNejtCAAFbN58MH5LYcYWB]"

  const message = {
    to: notificationToken,
    sound: "default",
    title: titulo,
    body: body,
  };


  const resultado = await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });

  console.log("Notificação enviada!");
}

export default enviarNotificacao;