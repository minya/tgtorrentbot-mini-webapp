from os import environ, path
from dotenv import load_dotenv
from urllib.parse import urlencode
import json

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import CommandHandler, MessageHandler, filters, CallbackQueryHandler, ApplicationBuilder

load_dotenv(path.expanduser("~/.envs/tgt-mwa.env"))

BOT_TOKEN = environ['BOT_TOKEN']
SITE_URL = environ['SITE_URL']

async def start(update, _context):
  await update.message.reply_text(
    'Hello! I am a mini webapp bot. \
    Send me a message and I will reply with a button to my mini webapp.')

async def handle_message(update, _context):
  torrentsObj = [
    {
      "id": 1,
      "name": "torrent1",
      "seeders": 123,
      "leechers": 4,
      "sizeBytes": 33
    },
    {
      "id": 2,
      "name": "torrent2",
      "seeders": 12,
      "leechers": 44,
      "sizeBytes": 666
    },
  ]
  params = urlencode({"torrents": json.dumps(torrentsObj)})
  url = "{}?{}".format(SITE_URL, params)
  print(url)
  button = InlineKeyboardButton(
    text='Open Mini Webapp',
    web_app=WebAppInfo(url=url)
  )
  keyboard = InlineKeyboardMarkup([[button]])
  await update.message.reply_text(
    'Here is a button to my mini webapp:',
    reply_markup=keyboard)

def handle_button_click(_update, _context):
  pass

def main():
  app = ApplicationBuilder().token(BOT_TOKEN).build()

  app.add_handler(CommandHandler('start', start))
  app.add_handler(MessageHandler(filters.TEXT, handle_message))
  app.add_handler(CallbackQueryHandler(handle_button_click))

  app.run_polling()

main()
