# Parcel template

Acest proiect a fost creat cu ajutorul Parcel. Pentru familiarizare și configurarea funcțiilor suplimentare [consultați documentația](https://parceljs.org/).

## Pregătirea noului proiect

1. Asigură-te că pe PC este instalată versiunea LTS Node.js.
   [Descarcă și instalează](https://nodejs.org/en/) dacă este necesar.
2. Clonează acest depozit.
3. Schimbă numele folderului din `parcel-project-template` în numele proiectului tău.
4. Creează un depozit nou și gol pe GitHub.
5. Deschide proiectul în VSCode, pornește terminalul și conectează proiectul cu depozitul GitHub
   [conform instrucțiunilor](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Setează dependențele proiectului în terminal cu ajutorul comenzii `npm install` .
7. Pornește modul dezvoltator prin rularea comenzii `npm start`.
8. Accesează  în browser pagina  [http://localhost:1234](http://localhost:1234).
   Această pagină se va reîncărca automat după salvarea modificărilor efectuate în fișiere proiectului.

## Fișiere și foldere

- Toate fișierele de stil trebuie să se afle în folderul `src/sass` să fie importate în fișiere de stil ale paginilor. De exemplu, pentru `index.html` fișierul de stiluri se numește
  `index.scss`.
- Adaugă imaginile în folderul `src/images`. Constructorul le va optimiza, dar numai atunci când va fi implementată versiunea de producție a proiectului. Toate acestea se realizează în cloud pentru a nu împovăra calculatorul, deoarece pe mașinile slabe aceasta poate dura mult timp. 

## Implementare
Pentru a configura implimentarea proiectului, trebuie de efectuat câțiva pași suplimentari pentru configurarea depozitului. Accesează fila `Settings` și în subsecțiunea `Actions` selectează `General`

![GitHub actions settings](./assets/actions-config-step-1.png)

Derulează pagina până la ultima secțiune, asigurându-te că opțiunile sunt selectate ca în imaginea următoare și apasă `Save`. Fără aceste setări, constructorul nu va avea drepturi suficiente pentru a automatiza procesul de implementare.

![GitHub actions settings](./assets/actions-config-step-2.png)

Versiunea de producție a proiectului va fi construită automat și implementată pe GitHub. Pages, în ramura `gh-pages`, de fiecare dată când ramura `main` va fi actualizată. De exemplu,
după un push direct sau după o cerere acceptată pool-request. Pentru aceasta, în fișierul
`package.json` trebuie de editat câmpul `homepage` și scriptul `build`, înlocuind
`your_username` și `your_repo_name` pe cele proprii, și trimite modificările la GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Apoi, accesează setările depozitului GitHub (`Settings` > `Pages`) și setează distribuția versiunii de producție a fișierelor din folderul `/root` ramurii `gh-pages`, dacă acest lucru nu a fost făcut automat.

![GitHub Pages settings](./assets/repo-settings.png)

### Starea implementării

Starea implimentării ultimului commit este afișată printr-o pictogramă lângă ID-ul acestuia.

- **Galbenă** - proiectul se asamblează și se implementează.
- **Verde** - proiectul a fost implementat cu succes.
- **Roșu** - în timpul listării, asamblării sau implementării a apărut o eroare.

Mai multe informații despre stare pot fi obținute dând clic pe pictogramă și în fereastra derulantă - click pe linkul  `Details`.

![Deployment status](./assets/status.png)

### Pagină live

După un timp, de obicei câteva minute, pagina live poate fi vizualizată la adresa specificată în proprietatea editată `homepage`. De exemplu, iată linkul către versiunea live pentru acest depozit
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Dacă se deschide o pagină goală, asigură-te că fila `Console` nu conține erori legate de căile incorecte ale fișierelor proCSS și JS din proiect (**404**). Probabil că este greșită valoarea proprietății `homepage` sau scriptului `build` în fișierul `package.json`.

## Cum funcționează

![How it works](./assets/how-it-works.png)

1. După fiecare push în ramura `main` depozitului GitHub, este rulat un script special (GitHub Action) din fișierul `.github/workflows/deploy.yml`.
2. Vor fi copiate toate fișierele din depozitul de cod pe server, unde proiectul va fi inițializat și va trece prin procesul de construcție înainte de implementare
3. Dacă toți pașii sunt executați cu succes, versiunea de producție asamblată a fișierelor proiectului este trimisă la ramura `gh-pages`. În caz contrar, în jurnalul de execuție al scriptului va fi indicată problema.

