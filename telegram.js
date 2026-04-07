export async function onRequestPost(context) {

  const TELEGRAM_TOKEN = context.env.TELEGRAM_BOT_TOKEN;

  const update = await context.request.json();

  console.log("Telegram update:", update);

  const chatId = update.message?.chat?.id;
  const text = update.message?.text;

  if (!chatId) {
    return new Response("OK");
  }

  // risposta test
  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `✅ Smart Planner collegato!\nHai scritto: "${text}"`
    })
  });

  return new Response("OK");
}