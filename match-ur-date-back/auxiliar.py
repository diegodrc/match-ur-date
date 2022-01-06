import random

def randon_key():
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    key = ""
    for x in range(0, 8):
        key_char = random.choice(chars)
        key = key + key_char
    return key
