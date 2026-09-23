Production files live in the repository root, `brand_assets`, and `assets`.

`source_assets/originals` keeps full-size source photos, achievement PDFs/screenshots, and other source-only media as a local archive excluded from Git. Back it up separately before moving to another machine. These files are not referenced by the site and should not be uploaded with the public static build unless the archive is needed separately.

When a source asset is needed on the site, create a cropped/optimized production copy under `assets/` and reference that copy from `index.html`. Keep the original here for future re-processing.

## Новые фотографии для правок от 23.09.2026

В рабочей копии `Anna-ph-revisions` подготовлены папки:

- `source_assets/originals/family/` — семейные съёмки.
- `source_assets/originals/children/` — детские съёмки.
- `source_assets/originals/portrait-men/` — замена мужской портретной съёмки.
- `source_assets/originals/art/ballet/` — новые кадры балерины.

Внутри категории складывайте каждую фотосессию в отдельную папку с понятным
названием. Для обложки можно добавить файл `cover.txt` с именем выбранной фотографии.
Оригиналы можно оставить в исходном размере и с исходными именами.

Добавление файлов сюда само по себе не меняет сайт: после получения фотографий
нужно подготовить web-копии и обновить списки серий в `index.html`.
Архив исключён из Git и публикации сайта; он хранится локально.

## Импорт с Яндекс Диска 24.09.2026

181 оригинал сохранён в подпапках `2026-09-24/` внутри `portrait-women`,
`portrait-men`, `art`, `children`, `lovestory` и `family`.
Готовые JPEG/WebP подключены к галереям с проверкой дублей.
Подробности и реестр файлов: `docs/MEDIA_IMPORT_2026-09-24.md`.
