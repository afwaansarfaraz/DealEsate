import zipfile
from PIL import Image
import numpy as np
import io
import os

def main():
    os.makedirs('public/assets/hero', exist_ok=True)
    os.makedirs('public/assets/brand', exist_ok=True)

    with zipfile.ZipFile('Dealestate_Antigravity_Master_Blueprint.docx') as z:
        # 1. Logo
        logo_data = z.read('word/media/image1.png')
        logo = Image.open(io.BytesIO(logo_data))
        logo.save('public/assets/brand/dealestate-logo-original.png')

        # Crop logo tightly
        cropped = logo.crop((80, 85, 1056, 606))
        cropped.save('public/assets/brand/dealestate-logo-cropped.png')

        # Generate transparent PNG
        cropped_rgba = cropped.convert('RGBA')
        arr = np.array(cropped_rgba, dtype=np.float32)
        r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
        dist_from_white = np.sqrt((255 - r)**2 + (255 - g)**2 + (255 - b)**2)
        alpha = np.clip((dist_from_white - 8) / 35.0 * 255, 0, 255)
        arr[:, :, 3] = alpha
        logo_trans = Image.fromarray(arr.astype(np.uint8), mode='RGBA')
        logo_trans.save('public/assets/brand/dealestate-logo-transparent.png')

        # Generate light variant for dark headers (crisp white letters + exact gold accent)
        arr_light = arr.copy()
        for y in range(arr.shape[0]):
            for x in range(arr.shape[1]):
                if arr[y, x, 3] > 20:
                    pr, pg, pb = arr[y, x, 0], arr[y, x, 1], arr[y, x, 2]
                    # Check if this is gold
                    is_gold = (pr > 140 and pg > 90 and pb < 80)
                    if not is_gold:
                        arr_light[y, x, 0] = 248
                        arr_light[y, x, 1] = 250
                        arr_light[y, x, 2] = 252

        logo_light = Image.fromarray(arr_light.astype(np.uint8), mode='RGBA')
        logo_light.save('public/assets/brand/dealestate-logo-white.png')

        # Web-optimized 2x version (488 x 260) for ultra-fast load and retina sharpness
        logo_light_2x = logo_light.resize((488, 260), Image.Resampling.LANCZOS)
        logo_light_2x.save('public/assets/brand/dealestate-logo.webp', 'WEBP', quality=95)
        logo_light_2x.save('public/assets/brand/dealestate-logo.png', 'PNG', optimize=True)

        # 2. Skyline Hero
        skyline_data = z.read('word/media/image2.png')
        skyline = Image.open(io.BytesIO(skyline_data))
        orig_hero_path = 'public/assets/hero/mumbai-skyline-original.png'
        skyline.save(orig_hero_path)

        # Desktop WebP & JPG (Full resolution 1774 x 887, high quality)
        desktop_webp = 'public/assets/hero/mumbai-skyline-desktop.webp'
        desktop_jpg = 'public/assets/hero/mumbai-skyline-desktop.jpg'
        skyline.save(desktop_webp, 'WEBP', quality=86, method=6)
        skyline.save(desktop_jpg, 'JPEG', quality=88, optimize=True)

        # Mobile panorama (1200 x 600, preserving wide sunset horizon and towers)
        mobile_pano = skyline.resize((1200, 600), Image.Resampling.LANCZOS)
        mobile_webp = 'public/assets/hero/mumbai-skyline-mobile.webp'
        mobile_jpg = 'public/assets/hero/mumbai-skyline-mobile.jpg'
        mobile_pano.save(mobile_webp, 'WEBP', quality=84, method=6)
        mobile_pano.save(mobile_jpg, 'JPEG', quality=86, optimize=True)

    print("=== ASSET OPTIMIZATION RESULTS ===")
    print(f"Original Hero (PNG): {os.path.getsize(orig_hero_path)/1024:.1f} KB")
    print(f"Desktop Hero (WebP): {os.path.getsize(desktop_webp)/1024:.1f} KB")
    print(f"Desktop Hero (JPG):  {os.path.getsize(desktop_jpg)/1024:.1f} KB")
    print(f"Mobile Hero (WebP):  {os.path.getsize(mobile_webp)/1024:.1f} KB")
    print(f"Mobile Hero (JPG):   {os.path.getsize(mobile_jpg)/1024:.1f} KB")
    print(f"Logo Web (WebP):     {os.path.getsize('public/assets/brand/dealestate-logo.webp')/1024:.1f} KB")
    print(f"Logo Web (PNG):      {os.path.getsize('public/assets/brand/dealestate-logo.png')/1024:.1f} KB")

if __name__ == '__main__':
    main()
