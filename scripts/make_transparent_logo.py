from PIL import Image
from pathlib import Path

src = Path(
    r"C:\Users\ASUS\.cursor\projects\c-Users-ASUS-Desktop-PROJCET-A\assets\c__Users_ASUS_AppData_Roaming_Cursor_User_workspaceStorage_a044beb0f5e61251d23b650e84afc808_images_sancora_technologies_transparent-ebea4285-7dd7-4773-96d4-087500ae0ac6.png"
)
out = Path(r"c:\Users\ASUS\Desktop\PROJCET A\sancora-website\public\logo.png")
out_mark = Path(r"c:\Users\ASUS\Desktop\PROJCET A\sancora-website\public\logo-watermark.png")

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        brightness = (r + g + b) / 3
        mx = max(r, g, b)
        # Knock out solid black / near-black plate
        if brightness < 22 and mx < 35:
            pixels[x, y] = (r, g, b, 0)
        elif brightness < 40 and mx < 55:
            alpha = int(a * ((brightness - 22) / 18))
            pixels[x, y] = (r, g, b, max(0, min(255, alpha)))

bbox = img.getbbox()
if bbox:
    cropped = img.crop(bbox)
    pad = 20
    canvas = Image.new("RGBA", (cropped.width + pad * 2, cropped.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(cropped, (pad, pad), cropped)
else:
    canvas = img

canvas.save(out, "PNG")
canvas.save(out_mark, "PNG")
print("saved", out, canvas.size, out.stat().st_size)
