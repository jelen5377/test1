# GitHub Pages Kalkulacka

Jednoducha staticka aplikace pripravena pro publikaci pres GitHub Pages.

## Co je uvnitr

- `index.html`
- `style.css`
- `script.js`

## Lokalne

Staci otevrit `index.html` v prohlizeci.

## Nasazeni na GitHub Pages

1. Vytvor na GitHubu novy repository.
2. Nahraj obsah teto slozky do rootu repozitare.
3. V repozitari otevri `Settings` -> `Pages`.
4. U `Source` vyber `Deploy from a branch`.
5. Vyber branch `main` a folder `/ (root)`.
6. Uloz nastaveni.
7. Po chvili bude aplikace dostupna na adrese ve tvaru:

`https://TVUJ-USERNAME.github.io/NAZEV-REPA/`

## Git prikazy

```powershell
git init
git add .
git commit -m "Initial GitHub Pages app"
git branch -M main
git remote add origin https://github.com/TVUJ-USERNAME/NAZEV-REPA.git
git push -u origin main
```
